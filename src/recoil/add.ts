import { RecoilState, atom, selector, RecoilValueReadOnly } from 'recoil'
import memoize from 'memoizee'

export const getAddState = memoize(function(todoID: string): RecoilState<boolean> {
    return atom({
        key: `add.${todoID}`,
        default: false as boolean
    })
})