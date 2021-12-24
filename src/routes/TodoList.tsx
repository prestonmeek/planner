import React from 'react'
import BackArrow from '../components/BackArrow'
import Todo, { TodoProps, CreateTodo } from '../components/Todo'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getAddState, getTodoList, localUncompletedCount } from '../recoil'

export default function TodoList() {
  const id = useParams().id as string

  const [todos] = useRecoilState(getTodoList(id))

  let todoList: Array<JSX.Element> = []

  todos.forEach((item: TodoProps) => {
    todoList.push(
      <Todo 
        key={item.id} 
        label={item.label}
        id={item.id}
        parentID={id}
        checked={item.checked}
        dueDate={item.dueDate}
      />
    )
  })

  const addState = useRecoilValue(getAddState(id))

  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <BackArrow />

      <h1 className="header mt-12">
        {id}
      </h1>

      <h2 className="subheader">
        {useRecoilValue(localUncompletedCount(id))} uncompleted tasks
      </h2>

      <div className="flex flex-col w-5/6 max-h-min rounded-sm bg-tred-50 drop-shadow-md mt-8">
        {todoList}
        {addState ? <CreateTodo /> : <></>}
      </div>
    </div>
  )
}