'use client'

import { useState } from 'react'
import { Button } from "@repo/design-system/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@repo/design-system/components/ui/dialog"
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Brain, Zap, Code, Palette } from 'lucide-react'

type WelcomeDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function WelcomeDialog({ isOpen, onOpenChange }: WelcomeDialogProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = 4

  const steps = [
    {
      title: "Welcome to Mistral Chat",
      description: "Embark on an AI-powered journey with Mistral Chat, showcasing cutting-edge technology and innovative design.",
      icon: <Sparkles/>,
    },
    {
      title: "AI-Driven Conversations",
      description: "Experience seamless interactions powered by advanced language models, bringing intelligence to every chat.",
      icon: <Brain/>,
    },
    {
      title: "Modern Web Development",
      description: "Built with React and Next.js, this application demonstrates best practices in frontend development.",
      icon: <Code/>,
    },
    {
      title: "Sleek UI/UX Design",
      description: "Enjoy a visually appealing interface crafted with Tailwind CSS, prioritizing user experience and aesthetics.",
      icon: <Palette/>,
    },
  ]

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-text-shimmer">
            Mistral Chat
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Showcasing innovation in AI and web development
          </DialogDescription>
        </DialogHeader>
        <div className="py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-3 rounded-full mr-4">
                  {steps[currentStep].icon}
                </div>
                <h3 className="text-xl font-semibold">{steps[currentStep].title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{steps[currentStep].description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentStep ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-700 transition-all duration-300"
            >
              {currentStep < totalSteps - 1 ? 'Next' : 'Get Started'}
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
          <p className="text-xs text-gray-400 mb-2 sm:mb-0">
            Created by a passionate software engineering student
          </p>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Skip Introduction
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}