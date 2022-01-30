import React, { useEffect, useRef } from 'react'
import BackArrow from '../components/BackArrow'
import Todo from '../components/Todo'
import { getTodoList, localUncompletedCount } from '../recoil'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getDBTodos } from '../firebase'

export default function TodoList() {
  const id = useParams().id as string

  const [todos, setTodos] = useRecoilState(getTodoList(id))

  // Fetch firestore data
  useEffect(() => {
    getDBTodos(id).then(todos => setTodos(todos))
  }, [id, setTodos])

  const todoListRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
      todoListRef!.current!.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <BackArrow />

      <h1 className="header mt-12">
        {id}
      </h1>

      <h2 className="subheader">
        {useRecoilValue(localUncompletedCount(id))} uncompleted tasks
      </h2>

      <div ref={todoListRef} className="flex flex-col w-5/6 max-h-min rounded-sm bg-tred-50 drop-shadow-md my-8">
        {todos.map(todo => <Todo key={todo.id} id={todo.id} parentID={id} />)}
      </div>
    </div>
  )
}