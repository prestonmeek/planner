import data from '../firebase'
import { RecoilState, atom, selector, RecoilValueReadOnly } from 'recoil'
import memoize from 'memoizee'

export const checkedStateWithID = memoize(function(id: string): RecoilState<boolean> {
    return atom({
        key: `checked.${id}`,
        default: false as boolean
    })
})

export const localUncompletedCount = memoize(function(id: string): RecoilValueReadOnly<number> {
    return selector({
        key: `localUncompletedCount.${id}`,
        get: ({ get }) => {
            let count = 0

            for (let item in data[id]) {
                const isChecked: boolean = get(checkedStateWithID(data[id][item]))

                if (!isChecked)
                    count++
            }

            return count
        }
    })
})

export const globalUncompletedCount = memoize(function(): RecoilValueReadOnly<number> {
    return selector({
        key: 'globalUncompletedCount',
        get: ({ get }) => {
            let count = 0

            for (let item in data)
                count += get(localUncompletedCount(item))

            return count
        }
    })
})