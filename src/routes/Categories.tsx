import React from 'react'
import Category from '../components/Category'
import data from '../firebase'
import { globalUncompletedCount } from '../recoil'
import { useRecoilValue } from 'recoil'

export default function Categories() {
  let categories: Array<JSX.Element> = []

  for (let item in data)
    categories.push(<Category label={item} />)

  return (
    <div>
      <h1 className="header mt-12">
        todo
      </h1>

      <h2 className="subheader">
        {useRecoilValue(globalUncompletedCount())} uncompleted tasks
      </h2>

      <div className="grid grid-cols-2 mt-12 gap-2">
        <Category label="test 1" />
        <Category label="homework" />
        <Category label="daily" />
        <Category label="test4" />
        <Category label="google" />
        <Category label="test 6" />
      </div>
    </div>
  )
}