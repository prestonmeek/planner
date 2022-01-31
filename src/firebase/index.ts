import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, onSnapshot, Firestore, DocumentData } from 'firebase/firestore'
import uniqid from 'uniqid'
import { TodoData, TodoState } from '../components/Todo'

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCQD10cd3X5B7BHjaD3L1qCXe0Mw9lgHCE",
    authDomain: "todo-2ee38.firebaseapp.com",
    projectId: "todo-2ee38",
    storageBucket: "todo-2ee38.appspot.com",
    messagingSenderId: "1059981794499",
    appId: "1:1059981794499:web:7fff9912c03ca7b31d1676"
}

const app: FirebaseApp = initializeApp(firebaseConfig)

export const db: Firestore = getFirestore(app);

export function getSortedCategories(data: DocumentData): string[] {
    return Object.keys(data).sort()
}

export function getDBTodos(data: DocumentData, category: string): TodoData[] {
    const todos = data[category]

    let tempTodos: TodoData[] = []

    for (let label in todos) {
        const todo = todos[label]

        tempTodos.push({
            id: todo.id,
            parentID: category,
            label: label,
            checked: todo.checked,
            dueDate: todo.dueDate,
            state: TodoState.Default
        })
    }

    return tempTodos
}