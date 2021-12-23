import React from 'react'
import BackArrow from '../components/BackArrow'
import Checkbox from '../components/Checkbox'
import data from '../firebase'
import { localUncompletedCount } from '../recoil'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

export default function TodoList() {
  const id = useParams().id as string

  let checklist: Array<JSX.Element> = []

  for (let item in data[id]) {
    checklist.push(
      <Checkbox 
        key={item} 
        label={item}
        id={data[id][item]}
      />
    )
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <BackArrow />

      <h1 className="header mt-12">
        {id}
      </h1>

      <h2 className="subheader">
        {useRecoilValue(localUncompletedCount(id))} uncompleted tasks
      </h2>

      <div className="flex flex-col w-4/5 h-72 px-5 pt-3 pb-12 rounded-sm bg-tred-50 drop-shadow-md mt-8">
        {checklist}
      </div>
    </div>
  )
}