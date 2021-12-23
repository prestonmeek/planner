import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { getTodoList, replaceItemAtIndex } from '../recoil'
import { HiOutlineCog } from 'react-icons/hi'

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

  const checkedStyling = (checked: boolean, color: string) => {
    if (checked)
      return 'line-through text-tgray-400'
    else
      return 'none ' + color
  }

  return (
    <div className="todo">
      <input 
        name="todo"
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
        className="form-checkbox"
      />
      <label htmlFor="todo" className={"mx-2 " + checkedStyling(props.checked, 'text-tbrown-900')}>
        {props.label}
        <h2 className={"subheader text-xs " + checkedStyling(props.checked, 'text-tred-300')}>
          Due 1/4/22
        </h2>
      </label>
      <p className="icon absolute right-4"><HiOutlineCog /></p>
    </div>
  )
}