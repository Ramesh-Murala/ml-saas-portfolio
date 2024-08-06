const API_BASE = 'http://localhost:8000/api/rag'

export const queryKnowledgeBase = async (query) => {
  const res = await fetch(`${API_BASE}/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, top_k: 3 })
  })
  if (!res.ok) throw new Error('API error')
  return res.json()
}
