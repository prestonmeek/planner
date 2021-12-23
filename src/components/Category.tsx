import React from 'react'
import { Link } from 'react-router-dom'
import { BiExpandAlt } from 'react-icons/bi'
import { localUncompletedCount } from '../recoil'
import { useRecoilValue } from 'recoil'

interface CategoryProps {
  label: string
}

export default function Category(props: CategoryProps) {
  // pt-4 w-60 h-36 rounded bg-tred-100 drop-shadow-md hover:scale-110 hover:z-10 transition-all
  return (
    <Link to={"todo/" + props.label} className="category bg-tred-100">
      <p className="absolute right-1 top-1 text-tbrown-900"><BiExpandAlt /></p>
      <p className="text-center text-xl font-bold text-tbrown-800 mt-1">{props.label}</p>
      <p className="text-center mt-16 text-sm text-tred-300">{useRecoilValue(localUncompletedCount(props.label))} uncompleted tasks</p>
    </Link>
  )
}