'use client'

import { useEffect, useState } from 'react'

import Courses from './components/Courses'
import LoadingPage from './loading'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome To My Media</h1>
      <Courses courses={courses} />
    </>
  )
}

export default HomePage
