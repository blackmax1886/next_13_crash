import Link from 'next/link'
import React from 'react'

import Course from '../type/course'

const Courses = async ({ courses }: { courses: Course[] }) => {
  return (
    <div className="courses">
      {courses.map((course: Course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses
