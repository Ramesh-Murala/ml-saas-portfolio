import { useState } from 'react'
import { queryKnowledgeBase } from '../services/api.js'

const useRAG = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const askQuery = async (query) => {
    setMessages(prev => [...prev, { role: 'user', content: query }])
    setLoading(true)
    try {
      const data = await queryKnowledgeBase(query)
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error fetching response.' }])
    } finally {
      setLoading(false)
    }
  }

  return { messages, loading, askQuery }
}

export default useRAG
