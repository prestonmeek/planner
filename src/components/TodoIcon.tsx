
import React from 'react'
import { TodoProps } from './Todo'
import { getTodoList, removeItemAtIndex } from '../recoil'
import { HiOutlineCog, HiX } from 'react-icons/hi'
import { useRecoilState } from 'recoil'

export function XIcon(props: TodoProps) {
  const [todos, setTodos] = useRecoilState(getTodoList(props.parentID))

  const index = todos.findIndex(item => props.id === item.id)
  
  const handleClick = () => setTodos(removeItemAtIndex(todos, index))

  return (
    <div onClick={handleClick}>
      <HiX />
    </div>
  )
}

export function CogIcon(props: TodoProps) {
  return (
    <HiOutlineCog />
  )
}
