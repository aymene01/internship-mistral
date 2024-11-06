import { Button } from '@repo/design-system/components/ui/button'
import Link from 'next/link'
import { FiAlertCircle } from 'react-icons/fi'

export default function LoginErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      <div className="max-w-md w-full text-center shadow-md rounded-lg p-8 bg-white">
        <div className="mb-5 text-red-600">
          <FiAlertCircle className="h-20 w-20 inline-block" />
        </div>
        <h1 className="mb-4 text-xl font-medium text-gray-900">Oops! Something went wrong.</h1>
        <p className="mb-6">
          We&apos;re having trouble logging you in. Please make sure you have the good credentials.
        </p>
        <div className="flex justify-center">
          <Link href="/signin">
           <Button className='bg-red-500 text-white'>
            Try Again
           </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm font-light text-gray-400">
          If you continue to experience problems, please contact our{' '}
          <a href="" className="text-blue-600 hover:underline">
            support team
          </a>
          .
        </p>
      </div>
    </div>
  )
}