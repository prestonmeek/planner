import React from 'react'
import BackArrow from '../components/BackArrow'
import Todo, { TodoProps } from '../components/Todo'
import data from '../firebase'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getTodoList, localUncompletedCount } from '../recoil'

export default function TodoList() {
  const id = useParams().id as string

  const [todos, setTodos] = useRecoilState(getTodoList(id))

  let checklist: Array<JSX.Element> = []

  todos.forEach((item: TodoProps) => {
    checklist.push(
      <Todo 
        key={item.id} 
        label={item.label}
        id={item.id}
        parentID={id}
        checked={item.checked}
      />
    )
  })

  console.log(todos)

  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <BackArrow />

      <h1 className="header mt-12">
        {id}
      </h1>

      <h2 className="subheader">
        {useRecoilValue(localUncompletedCount(id))} uncompleted tasks
      </h2>

      <div className="flex flex-col w-4/5 h-72 px-5 pt-3 pb-12 rounded-sm bg-tred-50 drop-shadow-md mt-8">
        {checklist}
      </div>
    </div>
  )
}