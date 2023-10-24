'use client'

import { useEffect, useState } from 'react'

import CourseSearch from './components/CourseSearch'
import Courses from './components/Courses'
import LoadingPage from './loading'
import Course from './type/course'

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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

  const GetSearchResults = (results: Course[]) => {
    setCourses(results)
  }

  return (
    <>
      <h1>Welcome To My Media</h1>
      <CourseSearch getSearchResults={GetSearchResults} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage
