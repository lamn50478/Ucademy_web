import React from 'react'
import Heading from '../components/typography/Heading'
import CourseItem from '../components/course/CourseItem'
import createUser from '../lib/actions/user.actions'

const page = () => {
  const user =createUser({
    clerkId:"123",
    email_address:"huyhaong@gmail.com",
    username:"Huy Hoang",
    name:"Vit con"
  })
  return (
    <div>
    <Heading>Khám phá khóa học</Heading>
    <div className='grid grid-cols-3 gap-8 mt-8'>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>

    </div>
    </div>
  )
}

export default page