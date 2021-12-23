import React from 'react'
import Categories from './routes/Categories'
import TodoList from './routes/TodoList'
import { Routes, Route } from 'react-router-dom'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { HiOutlinePlusCircle } from 'react-icons/hi'

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-tgray-50">
      <p className="icon top-3 right-3 text-2xl text-tbrown-900"><MdOutlineManageAccounts /></p>
      <p className="icon bottom-2 right-2 text-2xl text-tbrown-900"><HiOutlinePlusCircle /></p>

      <h2 className="text-center text-xl mt-3 text-tred-300">
        welcome back, <b>preston</b>
      </h2>

      <Routes>
        <Route path="/" element={<Categories />} />
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