import React from 'react'
import EditTodo from './EditTodo'
import { getTodoList, replaceItemAtIndex } from '../recoil'
import { useRecoilState } from 'recoil'
import { HiOutlineCog } from 'react-icons/hi'

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

  const handleChange = () => {
    setTodos(replaceItemAtIndex(todos, index, {
      ...todo,
      checked: !todo.checked
    }));
  }

  const checkedStyling = (color: string) => {
    if (todo.checked)
      return 'line-through text-tgray-400'
    else
      return 'none ' + color
  }

  const handleDoubleClick = () => {
    // If the Todo is not currently being edited, set it to editing mode
    if (todos[index].state === TodoState.Default) {
      setTodos(replaceItemAtIndex(todos, index, {
        ...todo,
        state: TodoState.Editing
      }));
    }
  }

  return (
    <div className="todo">
      <input 
        name="todo"
        type="checkbox"
        checked={todo.checked}
        onChange={handleChange}
        className="form-checkbox"
      />
      <label htmlFor="todo" className="mx-2">
        <h1 className={"hover:cursor-text " + checkedStyling('text-tbrown-900 hover:text-tbrown-700')} onDoubleClick={handleDoubleClick}>
          {todo.state === TodoState.Editing ? <EditTodo {...props} /> : todo.label}
        </h1>
        <h2 className={"text-left text-xs " + checkedStyling('text-tred-300')}>
          Due {todo.dueDate}
        </h2>
      </label>
      <p className="icon absolute right-4"><HiOutlineCog /></p>
    </div>
  )
}