import data from '../firebase'
import { TodoProps } from '../components/Todo'
import { RecoilState, atom, selector, RecoilValueReadOnly } from 'recoil'
import memoize from 'memoizee'

export const getCategories = memoize(function(): RecoilState<string[]> {
    return atom({
        key: 'categories',
        default: Object.keys(data)
    })
})

export const getTodoList = memoize(function(todoID: string): RecoilState<TodoProps[]> {
    let res: Array<TodoProps> = []

    for (let key in data[todoID]) {
        const { id, dueDate } = data[todoID][key]

        res.push({
            id: id,
            parentID: id,
            label: key,
            checked: false,
            dueDate: dueDate
        })
    }

    return atom({
        key: `todoList.${todoID}`,
        default: res
    })
})

export const localUncompletedCount = memoize(function(todoID: string): RecoilValueReadOnly<number> {
    return selector({
        key: `localUncompletedCount.${todoID}`,
        get: ({ get }) => {
            let count = 0

            get(getTodoList(todoID)).forEach((item: TodoProps) => {
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

            get(getCategories()).forEach((key: string) => {
                count += get(localUncompletedCount(key))
            })

            return count
        }
    })
})