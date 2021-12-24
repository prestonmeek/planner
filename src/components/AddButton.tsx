import React from 'react'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { getAddState } from '../recoil'

export default function PlusButton() {
  // Get an array of all the path arguments
  const path   = useLocation().pathname.split('/').filter(item => item !== '')
  const todoID = decodeURI(path[1])

  const [addState, setAddState] = useRecoilState(getAddState(todoID))

  const handleClick = () => {
    // If we are on a TodoList page
    if (path[0] === 'todo' && todoID)
      handleTodoList(todoID)
  }

  const handleTodoList = (todoID: string) => setAddState(true)

  return (
    <p className="icon bottom-2 right-2" onClick={handleClick}><HiOutlinePlusCircle /></p>
  )
}