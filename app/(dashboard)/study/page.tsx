import { CourseGrid } from '@/app/components/Common'
import CourseItem from '@/app/components/course/CourseItem'
import Heading from '@/app/components/typography/Heading'
import React from 'react'

const page = () => {
  return (
    <div>
    <Heading>Khu vực học tập của bạn</Heading>
    <CourseGrid>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      </CourseGrid>

    </div>
    
  )
}

export default page