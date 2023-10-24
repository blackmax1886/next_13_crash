'use client'

import React, { useState } from 'react'

import Course from '../type/course'

type courseSearchProps = {
  getSearchResults: (courses: Course[]) => void
}

const CourseSearch = ({ getSearchResults }: courseSearchProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch(`/api/courses/search?query=${query}`)
    const courses = await res.json()
    getSearchResults(courses)
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  )
}

export default CourseSearch
