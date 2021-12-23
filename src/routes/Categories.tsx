import React from 'react'
import Category from '../components/Category'
import { useRecoilValue } from 'recoil'
import { getCategories, globalUncompletedCount } from '../recoil'

export default function Categories() {
  let categories: Array<JSX.Element> = []


  useRecoilValue(getCategories()).forEach((item: string) => {
    categories.push(<Category key={item} id={item} />)
  })

  return (
    <div>
      <h1 className="header mt-12">
        todo
      </h1>

      <h2 className="subheader">
        {useRecoilValue(globalUncompletedCount())} uncompleted tasks
      </h2>

      <div className="grid grid-cols-2 mt-12 gap-2">
        {categories}
      </div>
    </div>
  )
}