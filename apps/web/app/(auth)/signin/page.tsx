'use client'

import { signIn } from '@repo/auth/react'
import { Button } from '@repo/design-system/components/ui/button'
import { FiGithub } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"

function SignIn() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="p-6 rounded-lg bg-white shadow-lg flex flex-col space-y-4 text-center">
        <h1 className="text-2xl text-gray-800 font-light">Welcome to {''}
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-text-glow">
            Mistral
          </span>{' '} Internship project</h1>
        <p className="text-gray-500">Communicate with the Mistral AI Model easily</p>
        <div className="pt-4">
          <div className="inline-block space-x-4">
            <Button variant="outline" onClick={() => signIn('github')}>
              Sign in with Github
              <FiGithub className="inline-block" />
            </Button>
            <Button variant="outline" onClick={() => signIn('google')}>
              Sign in with Google
              <FcGoogle className="inline-block" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn