import React, { SyntheticEvent, useState } from 'react'
import { TodoProps, TodoState } from './Todo'
import { getTodoList, replaceItemAtIndex } from '../recoil'
import { useRecoilState } from 'recoil'


export default function EditTodo(props: TodoProps) {
  const [todos, setTodos] = useRecoilState(getTodoList(props.parentID))

  const index = todos.findIndex(item => props.id === item.id)
  const todo  = todos[index]

  const [label, setLabel] = useState(todo.label)

  const handleSubmit = (event: SyntheticEvent) => {
    setTodos(replaceItemAtIndex(todos, index, {
      ...todo,
      label: label,
      state: TodoState.Default
    }));

    event.preventDefault();
  }

  const handleChange = (event: SyntheticEvent) => {
    setLabel((event.target as HTMLTextAreaElement).value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input autoFocus type="text" value={label} onChange={handleChange} />
    </form>
  )
}