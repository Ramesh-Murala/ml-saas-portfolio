import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button.jsx'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Enterprise Knowledge Assistant</h1>
      <p>Search your company's internal knowledge base instantly using RAG.</p>
      <Link to="/chat">
        <Button>Go to Chat</Button>
      </Link>
    </div>
  )
}

export default Home
