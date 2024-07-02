import React from 'react'
import { Link } from 'react-router-dom'

const MainLayout = ({ children }) => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ padding: '1rem', background: '#f0f0f0', display: 'flex', gap: '1rem' }}>
        <strong>Enterprise RAG</strong>
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
      </header>
      <main style={{ padding: '2rem' }}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
