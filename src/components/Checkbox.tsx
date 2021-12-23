import React from 'react'
import { checkedStateWithID } from '../recoil'
import { useRecoilState } from 'recoil'

interface CheckboxProps {
  label: string,
  id: string
}

export default function Checkbox(props: CheckboxProps) {
  const [checked, setChecked] = useRecoilState(checkedStateWithID(props.id))

  const handleChange = () => setChecked(checked ? false : true)

  return (
    <div className="w-full">
      <input 
        name="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="form-checkbox"
      />
      <label htmlFor="checkbox" className={"mx-2 " + (checked ? 'line-through text-tgray-400' : 'none text-tbrown-900')}>{props.label}</label>
    </div>
  )
}