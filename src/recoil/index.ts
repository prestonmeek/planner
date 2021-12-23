import data from '../firebase'
import { TodoProps } from '../components/Todo'
import { RecoilState, atom, selector, RecoilValueReadOnly } from 'recoil'
import memoize from 'memoizee'

export function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export const getCategories = memoize(function(): RecoilState<string[]> {
    return atom({
        key: 'categories',
        default: Object.keys(data)
    })
})

export const getTodoList = memoize(function(id: string): RecoilState<TodoProps[]> {
    let res: Array<TodoProps> = []

    for (let item in data[id]) {
        res.push({
            id: data[id][item],
            parentID: id,
            label: item,
            checked: false
        })
    }

    return atom({
        key: `todoList.${id}`,
        default: res
    })
})

export const localUncompletedCount = memoize(function(id: string): RecoilValueReadOnly<number> {
    return selector({
        key: `localUncompletedCount.${id}`,
        get: ({ get }) => {
            let count = 0

            get(getTodoList(id)).forEach((item: TodoProps) => {
                if (!item.checked)
                    count++
            })

            return count
        }
    })
})


export const globalUncompletedCount = memoize(function(): RecoilValueReadOnly<number> {
    return selector({
        key: 'globalUncompletedCount',
        get: ({ get }) => {
            let count = 0

            get(getCategories()).forEach((item: string) => {
                count += get(localUncompletedCount(item))
            })

            return count
        }
    })
})