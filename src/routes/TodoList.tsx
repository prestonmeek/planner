import React, { useEffect, useRef } from 'react'
import BackArrow from '../components/BackArrow'
import Todo, { TodoProps } from '../components/Todo'
import { getTodoList, localUncompletedCount } from '../recoil'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function TodoList() {
  const id = useParams().id as string

  const [todos, setTodos] = useRecoilState(getTodoList(id))

  let todoList: Array<JSX.Element> = []

  todos.forEach((item: TodoProps) => {
    todoList.push(
      <Todo 
        key={item.id} 
        id={item.id}
        parentID={id}
      />
    )
  })

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
        {todoList}
      </div>
    </div>
  )
}