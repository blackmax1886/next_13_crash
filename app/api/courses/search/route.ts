import { NextResponse } from 'next/server'

import courses from '../data.json'

import Course from '@/app/type/course'

export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  if (!query) {
    return NextResponse.json(courses)
  }
  const filteredCourses = courses.filter((course: Course) => {
    return course.title.toLowerCase().includes(query?.toLowerCase())
  })
  return NextResponse.json(filteredCourses)
}
