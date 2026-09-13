import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [teamMembers, setTeamMembers] = useState([]) // Using Fetch API
  const [products, setProducts] = useState([]) // Using Axios
  const [loadingMembers, setLoadingMembers] = useState(true)
  const [loadingProducts, setLoadingProducts] = useState(true)

  // 1. Fetch API - Team Members Data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const teamNames = ['Aditya Kulkarni', 'Ananya Deshmukh', 'Vikramaditya Rao', 'Ishita Sengupta']
        const engineeringTeam = data.slice(0, 4).map((user, index) => ({
          id: user.id,
          name: teamNames[index],
          role: ['Cloud Architect', 'Frontend Engineer', 'API Specialist', 'Data Engineer'][index],
          email: user.email,
        }))
        setTeamMembers(engineeringTeam)
        setLoadingMembers(false)
      })
      .catch((error) => console.error('Error with Fetch API:', error))
  }, [])

  // 2. Axios - Featured Products Data
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=4')
      .then((response) => {
        setProducts(response.data.products)
        setLoadingProducts(false)
      })
      .catch((error) => console.error('Error with Axios:', error))
  }, [])

  return (
    <div className="app">
      <h1>REST API Integration Dashboard</h1>
      <p className="subtitle">Consuming REST APIs using Fetch API and Axios</p>

      <section className="api-section">
        <h2>Engineering Team (Retrieved via Fetch API)</h2>
        {loadingMembers ? (
          <p className="loading">Loading team members...</p>
        ) : (
          <div className="card-container">
            {teamMembers.map((member) => (
              <div className="card" key={member.id}>
                <h3>{member.name}</h3>
                <p><strong>Role:</strong> {member.role}</p>
                <p><strong>Email:</strong> {member.email}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="api-section">
        <h2>Featured Products (Retrieved via Axios)</h2>
        {loadingProducts ? (
          <p className="loading">Loading products...</p>
        ) : (
          <div className="card-container">
            {products.map((item) => (
              <div className="card" key={item.id}>
                <h3>{item.title}</h3>
                <p className="price">₹{(item.price * 80).toFixed(0)}</p>
                <p><strong>Category:</strong> {item.category}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default App