import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IconClock, IconEyes, IconStar } from '../icons';

const courseInfor=[{
  title:"3000",
  icon:(className?:string)=> <IconEyes  className={className}></IconEyes>
},{
  title:"5.0",
  icon:(className?:string)=><IconStar className={className}></IconStar>
},
{
  title:"30h25p",
  icon:(className?:string)=><IconClock className={className}></IconClock>

}
]
const CourseItem = () => {
  return (
    <div className="bg-white border dark:bg-grayDarker  dark:border-opacity-10 border-gray-200 p-4 rounded-2xl">
      <Link href="#" className='block h-[180px] relative '>
          <Image
          src="https://images.unsplash.com/photo-1781112981218-db02b34ce0ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8
          "
          alt="image"
          width={300}
          height={200}
          className='w-full h-full object-cover rounded-lg'
          sizes="@media (min-width:640px) 300px , 100vw"
          priority
          />
           <span
       className='rounded-full px-3 py-1 inline-block absolute top-3 right-3 z-10 text-white dark:text-grayDark font-medium bg-green-500 text-xs'>
        New</span>
      </Link>
      <div className="pt-3">
         <h3 className='font-bold text-lg mb-5'>Khoá học NextJS - xây dựng E-learning system</h3>

          <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
            {courseInfor.map((item,index)=>(
                 <div className="flex items-center gap-2" key={index}> 
                    {item.icon("size-5")} 
                     <span>{item.title}</span>
                  </div>

            ))}
              <span className='font-bold text-primary ml-auto text-base'>799.000</span>
            </div>
               
          </div>

         
  
       <Link href="#"
          className='flex justify-center items-center w-full mt-3 rounded-lg text-white font-semibold h-10 bg-primary'
       >Xem chi tiết</Link>
      </div>
  )
}

export default CourseItem;