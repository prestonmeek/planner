import { TodoData } from '../components/Todo'
import { RecoilState, atom, selector, RecoilValueReadOnly } from 'recoil'
import memoize from 'memoizee'

export const getCategories = memoize(function(): RecoilState<string[]> {
    return atom({
        key: 'categories',
        default: [] as string[]
    })
})

export const getTodoList = memoize(function(todoID: string): RecoilState<TodoData[]> {
    return atom({
        key: `todoList.${todoID}`,
        default: [] as TodoData[]
    })
})

export const localUncompletedCount = memoize(function(todoID: string): RecoilValueReadOnly<number> {
    return selector({
        key: `localUncompletedCount.${todoID}`,
        get: ({ get }) => {
            let count = 0

            get(getTodoList(todoID)).forEach((item: TodoData) => {
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