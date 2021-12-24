import uniqid from 'uniqid'

interface TodoData {
    [todoLabel: string]: {
        [checkbox: string]: {
            id: string
            dueDate: string
        }
    }
}

// TODO: make this dynamic based on Firebase data
const data: TodoData = {
    'test 1': {
        'Test 1': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 2': {
            id: uniqid(),
            dueDate: '1/23/21'
        },
        'Test 3': {
            id: uniqid(),
            dueDate: '1/4/21'
        },
        'Test 4': {
            id: uniqid(),
            dueDate: '1/5/21'
        },
        'Test 5': {
            id: uniqid(),
            dueDate: '1/6/21'
        },
        'Test 6': {
            id: uniqid(),
            dueDate: '1/12/21'
        }
    },
    'homework': {
        'Test 1': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 2': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 3': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 4': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 5': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 6': {
            id: uniqid(),
            dueDate: '1/19/21'
        }
    },
    'daily': {
        'Test 1': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 2': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 3': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 4': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 5': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 6': {
            id: uniqid(),
            dueDate: '1/19/21'
        }
    },
    'test4': {
        'Test 1': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 2': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 3': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 4': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 5': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 6': {
            id: uniqid(),
            dueDate: '1/19/21'
        }
    },
    'google': {
        'Test 1': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 2': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 3': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 4': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 5': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 6': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 7': {
            id: uniqid(),
            dueDate: '1/19/21'
        }
    },
    'test 6': {
        'Test 1': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 2': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 3': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 4': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 5': {
            id: uniqid(),
            dueDate: '1/19/21'
        },
        'Test 6': {
            id: uniqid(),
            dueDate: '1/19/21'
        }
    }
}

export default data