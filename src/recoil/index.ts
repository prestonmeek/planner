import {
    getCategories,
    getTodoList,
    localUncompletedCount,
    globalUncompletedCount
} from './todo'

import { getAddState } from './add'

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export { 
    replaceItemAtIndex,
    getCategories, 
    getTodoList, 
    localUncompletedCount, 
    globalUncompletedCount,
    getAddState, 
}