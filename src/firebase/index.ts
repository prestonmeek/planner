import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, Firestore } from 'firebase/firestore'
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
const db: Firestore    = getFirestore(app);

// Get all the category names from the database
export async function getDBCategories(): Promise<string[]> {
    return new Promise(async resolve => {
        const snapshot = await getDoc(doc(db, 'todos', 'categories'))

        if (snapshot.exists()) {
            const categories: string[] = Object.keys(snapshot.data()).sort()

            resolve(categories)
        }
    })
}

export async function getDBTodos(category: string): Promise<TodoData[]> {
    return new Promise(async resolve => {
        const snapshot = await getDoc(doc(db, 'todos', 'categories'))

        if (snapshot.exists()) {
            const todos = snapshot.data()[category]

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

            // Sort the todos by the time they were added to the database
            resolve(tempTodos.sort((a, b) => (todos[a.label].timeAdded.valueOf() > todos[b.label].timeAdded.valueOf()) ? 1 : -1))
        }
    })
}