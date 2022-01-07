import React, { useState } from 'react'
import EditTodo from './EditTodo'
import { getTodoList, replaceItemAtIndex } from '../recoil'
import { useRecoilState } from 'recoil'
import { XIcon, CogIcon } from './TodoIcon'

export interface TodoProps {
  id: string,
  parentID: string
}

export interface TodoData extends TodoProps {
  label: string,
  checked: boolean,
  dueDate: string,
  state: TodoState
}

export enum TodoState {
  Editing = -1,
  Default = 1
}

export default function Todo(props: TodoProps) {
  const [todos, setTodos] = useRecoilState(getTodoList(props.parentID))

  const index = todos.findIndex(item => props.id === item.id)
  const todo  = todos[index]

  const [icon, setIcon] = useState(<></>)

  const xIcon   = <XIcon {...props}  />
  const cogIcon = <CogIcon {...props} />

  const handleChange = () => {
    // If the todo has been checked, make sure it is no longer being edited
    setTodos(replaceItemAtIndex(todos, index, {
      ...todo,
      checked: !todo.checked,
      state: TodoState.Default
    }));

    // Also set the icon to its new state
    setIcon(!todo.checked ? xIcon : cogIcon)
  }

  const checkedStyling = (color: string) => {
    if (todo.checked)
      return 'line-through text-tgray-400'
    else
      return 'none ' + color
  }

  // If the Todo is not currently being edited and it hasn't been checked off already, set it to editing mode
  const handleClick = () => {
    if (todo.state === TodoState.Default && !todo.checked) {
      setTodos(replaceItemAtIndex(todos, index, {
        ...todo,
        state: TodoState.Editing
      }));
    }
  }
  
  // Decide which icon to display based on if the Todo is checked or not
  const handleMouseOver = () => setIcon(todo.checked ? xIcon : cogIcon)

  // If the entire Todo goes out of focus, hide any icon
  const handleMouseLeave = () => setIcon(<></>)

  // If the Todo label text goes out of focus, make sure it is no longer in editing mode.
  const handleBlur = () => {
    setTodos(replaceItemAtIndex(todos, index, {
      ...todo,
      state: TodoState.Default
    }));
  }

  return (
    <div className="todo" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <input 
        name="todo"
        type="checkbox"
        checked={todo.checked}
        onChange={handleChange}
        className="form-checkbox focus:outline-none"
      />
      <label htmlFor="todo" className="mx-2">
        <h1 className={"hover:cursor-text " + checkedStyling('text-tbrown-900 hover:text-tbrown-700')} onClick={handleClick} onBlur={handleBlur} >
          {todo.state === TodoState.Editing ? <EditTodo {...props} /> : todo.label}
        </h1>
        <h2 className={"text-left text-xs " + checkedStyling('text-tred-300')}>
          Due {todo.dueDate}
        </h2>
      </label>
      <div className="icon absolute right-4">{icon}</div>
    </div>
  )
}