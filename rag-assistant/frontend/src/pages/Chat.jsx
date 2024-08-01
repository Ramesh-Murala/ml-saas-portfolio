import React, { useState } from 'react'
import useRAG from '../hooks/useRAG.js'
import Input from '../components/common/Input.jsx'
import Button from '../components/common/Button.jsx'
import Loader from '../components/common/Loader.jsx'

const Chat = () => {
  const [input, setInput] = useState('')
  const { messages, loading, askQuery } = useRAG()

  const handleSend = () => {
    if (!input.trim()) return
    askQuery(input)
    setInput('')
  }

  return (
    <div>
      <h2>Chat with Knowledge Base</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', minHeight: '300px', marginBottom: '1rem' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: '0.5rem 0', textAlign: m.role === 'user' ? 'right' : 'left' }}>
            <span style={{ background: m.role === 'user' ? '#e3f2fd' : '#f5f5f5', padding: '0.5rem', borderRadius: '4px', display: 'inline-block' }}>
              <strong>{m.role}: </strong> {m.content}
            </span>
          </div>
        ))}
        {loading && <Loader />}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
        <Button onClick={handleSend} disabled={loading}>Send</Button>
      </div>
    </div>
  )
}

export default Chat
