import React, { useEffect } from 'react'
import Categories from './routes/Categories'
import TodoList from './routes/TodoList'
import AddButton from './components/AddButton'
import { Routes, Route } from 'react-router-dom'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { useRecoilCallback, useRecoilState } from 'recoil'
import { getCategories, getTodoList } from './recoil'
import { getDBCategories, getDBTodos } from './firebase'

export default function App() {
  const [categories, setCategories] = useRecoilState(getCategories())

  // Preload all the necessary firestore data
  useEffect(() => {
    getDBCategories().then(categories => setCategories(categories))
  }, [setCategories])

  useRecoilCallback(({ set }) => () => {
    categories.forEach(async category => set(getTodoList(category), await getDBTodos(category)))
  })()
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-tgray-50">
      <p className="icon top-3 right-3"><MdOutlineManageAccounts /></p>
      <AddButton />

      <h2 className="text-center text-xl mt-3 text-tred-300">
        welcome back, <b>preston</b>
      </h2>

      <Routes>
        <Route path="*" element={<Categories />} />
        <Route path="/todo/:id" element={<TodoList />} />
      </Routes>
    </div>
  )



  /*
  return (
    <div className="flex flex-col justify-content items-center min-h-screen bg-tgray-50">
      <h1 className="text-3xl font-bold mt-3 text-tred-300">
        todo
      </h1>

      <div className="flex flex-wrap justify-center w-screen mt-6">
        <TodoList
          label="Test"
          items={[
            'Test 1',
            'Test 2',
            'Test 3',
            'Test 4',
            'Test 5',
            'Test 6'
          ]}
        />

        <TodoList
          label="Test"
          items={[
            'Test 1',
            'Test 2',
            'Test 3',
            'Test 4'
          ]}
        />

        <TodoList
          label="Test"
          items={[
            'Test 1',
            'Test 2',
            'Test 3',
            'Test 4'
          ]}
        />

        <TodoList
          label="Test"
          items={[
            'Test 1',
            'Test 2',
            'Test 3',
            'Test 4'
          ]}
        />

        <TodoList
          label="Test"
          items={[
            'Test 1',
            'Test 2',
            'Test 3',
            'Test 4'
          ]}
        />
      </div>
    </div>
  )
  */
}