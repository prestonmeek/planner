import uniqid from 'uniqid'

interface TodoData {
    [todoID: string]: {[checkbox: string]: string}
}

// TODO: make this dynamic based on Firebase data
const data: TodoData = {
    'test 1': {
        'Test 1': uniqid(),
        'Test 2': uniqid(),
        'Test 3': uniqid(),
        'Test 4': uniqid(),
        'Test 5': uniqid(),
        'Test 6': uniqid(),
    },
    'homework': {
        'Test 1': uniqid(),
        'Test 2': uniqid(),
        'Test 3': uniqid(),
        'Test 4': uniqid(),
        'Test 5': uniqid(),
        'Test 6': uniqid(),
    },
    'daily': {
        'Test 1': uniqid(),
        'Test 2': uniqid(),
        'Test 3': uniqid(),
        'Test 4': uniqid(),
        'Test 5': uniqid(),
        'Test 6': uniqid()
    },
    'test4': {
        'Test 1': uniqid(),
        'Test 2': uniqid(),
        'Test 3': uniqid(),
        'Test 4': uniqid(),
        'Test 5': uniqid(),
        'Test 6': uniqid()
    },
    'google': {
        'Test 1': uniqid(),
        'Test 2': uniqid(),
        'Test 3': uniqid(),
        'Test 4': uniqid(),
        'Test 5': uniqid(),
        'Test 6': uniqid(),
        'Test 7': uniqid()
    },
    'test 6': {
        'Test 1': uniqid(),
        'Test 2': uniqid(),
        'Test 3': uniqid(),
        'Test 4': uniqid(),
        'Test 5': uniqid(),
        'Test 6': uniqid()
    }
}

export default data