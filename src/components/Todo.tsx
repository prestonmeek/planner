import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { getTodoList, replaceItemAtIndex } from '../recoil'

export interface TodoProps {
  id: string,
  parentID: string,
  label: string,
  checked: boolean
}

export default function Todo(props: TodoProps) {
  const [todos, setTodos] = useRecoilState(getTodoList(props.parentID))

  const index = todos.findIndex(item => props.id === item.id)

  const handleChange = () => {
    const newList = replaceItemAtIndex(todos, index, {
      ...props,
      checked: !props.checked,
    })

    setTodos(newList);
  }

  return (
    <div className="w-full">
      <input 
        name="checkbox"
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
        className="form-checkbox"
      />
      <label htmlFor="checkbox" className={"mx-2 " + (props.checked ? 'line-through text-tgray-400' : 'none text-tbrown-900')}>{props.label}</label>
    </div>
  )
}