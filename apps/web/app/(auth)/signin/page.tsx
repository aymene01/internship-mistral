// 'use client'

// import { signIn } from '@repo/auth/react'
// import { Button } from '@repo/design-system/components/ui/button'
// import { FiGithub } from "react-icons/fi"
// import { FcGoogle } from "react-icons/fc"

// function SignIn() {
//   return (
//     <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
//       <div className="p-6 rounded-lg bg-white shadow-lg flex flex-col space-y-4 text-center">
//         <h1 className="text-2xl text-gray-800 font-light">Welcome to {''}
//           <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-text-glow">
//             Mistral
//           </span>{' '} Internship project</h1>
//         <p className="text-gray-500">Communicate with the Mistral AI Model easily</p>
//         <div className="pt-4">
//           <div className="inline-block space-x-4">
//             <Button variant="outline" onClick={() => signIn('github')}>
//               Sign in with Github
//               <FiGithub className="inline-block" />
//             </Button>
//             <Button variant="outline" onClick={() => signIn('google')}>
//               Sign in with Google
//               <FcGoogle className="inline-block" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignIn

'use client'

import { signIn } from '@repo/auth/react'
import { Button } from '@repo/design-system/components/ui/button'
import { FiGithub } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import { motion } from 'framer-motion'

function SignIn() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-lg bg-white shadow-xl flex flex-col space-y-6 text-center max-w-md w-full"
      >
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-text-glow">
          Welcome to Mistral Internship Project
        </h1>
        <p className="text-gray-600">
          Communicate effortlessly with the Mistral AI Model
        </p>

        <div className="space-y-4">
          <Button 
            variant="outline" 
            onClick={() => signIn('github')}
            className="flex items-center justify-center w-full py-2 text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-100 transition duration-300"
          >
            <FiGithub className="mr-2 h-5 w-5" />
            Sign in with GitHub
          </Button>
          <Button 
            variant="outline" 
            onClick={() => signIn('google')}
            className="flex items-center justify-center w-full py-2 text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-100 transition duration-300"
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-gray-400 mt-4"
        >
          Created by a passionate software engineering student for Mistral AI
        </motion.p>
      </motion.div>
    </div>
  )
}

export default SignIn
