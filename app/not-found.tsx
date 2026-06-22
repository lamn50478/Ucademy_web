import Link from 'next/link'
import React from 'react'

// const PageNotFound = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
//       <h1 className="font-bold text-7xl text-gray-800">404</h1>
//       <h2 className="text-xl text-gray-600 mt-2 mb-5">Page Not Found</h2>
//       <Link href="/" className="underline flex items-center gap-2">Trang chủ</Link>
      
//     </div>
//   )
// }
const IconLeftArrow=(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
)
const PageNotFound = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
      <h1 className="font-bold text-7xl text-gray-800">404</h1>
      <h2 className="text-xl  mt-2 mb-5">Page Not Found</h2>
      <Link href="/" className="underline text-xl text-gray-600 flex items-center gap-2 hover:text-primary">
      {IconLeftArrow}

      Trang chủ</Link>
    </div>
  )
}
export default PageNotFound