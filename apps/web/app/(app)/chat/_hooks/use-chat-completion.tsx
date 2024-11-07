import { useState } from 'react'
import { Mistral } from "@mistralai/mistralai"

type GetChatCompletion = {
  content: string
}

export function useChatCompletion(mistral: Mistral) {
  const [loading, setLoading] = useState(false)

  const getChatCompletion = async ({ content }: GetChatCompletion) => {
    setLoading(true)
    try {
      const response = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: [
          {
            content,
            role: "user",
          },
        ],
      })

      if (!response?.choices) {
        return "No comprendo"
      }

      return response.choices[0].message.content
    } finally {
      setLoading(false)
    }
  }

  return { loading, getChatCompletion }
}