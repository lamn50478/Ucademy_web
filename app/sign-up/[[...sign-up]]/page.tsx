import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className="min-h-screen p-10 flex justify-center items-center">
          <SignUp/>
      </div>
  )
}