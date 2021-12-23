import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'

export default function BackArrow() {
  return (
    <Link to="/">
      <p className="icon absolute text-2xl top-12 left-6"><BsArrowLeftCircle /></p>
    </Link>
  )
}