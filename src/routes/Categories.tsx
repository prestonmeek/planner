import React, { useEffect } from 'react'
import Category from '../components/Category'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getCategories, globalUncompletedCount } from '../recoil'

export default function Categories() {
  const [categories, setCategories] = useRecoilState(getCategories())

  return (
    <div>
      <h1 className="header mt-12">
        todo
      </h1>

      <h2 className="subheader">
        {useRecoilValue(globalUncompletedCount())} uncompleted tasks
      </h2>

      <div className="grid grid-cols-2 mt-12 gap-2">
        {categories.map(item => <Category key={item} id={item} />)}
      </div>
    </div>
  )
}