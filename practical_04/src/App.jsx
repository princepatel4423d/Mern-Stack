import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Bharat Tourism Portal</h1>
      <p>
        Explore the vibrant heritage, iconic monuments, and diverse cultural landscapes across India.
      </p>
      <p>
        Navigate seamlessly using the menu above to discover famous monuments, prominent regions, and platform details.
      </p>
    </div>
  )
}

function Monuments() {
  const monumentsList = [
    { name: 'Red Fort', state: 'Delhi' },
    { name: 'Meenakshi Temple', state: 'Tamil Nadu' },
    { name: 'Victoria Memorial', state: 'West Bengal' },
  ]

  return (
    <div className="page">
      <h1>Heritage Monuments</h1>

      <div className="card-container">
        {monumentsList.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>State: {item.state}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Regions() {
  return (
    <div className="page">
      <h1>Popular Destinations</h1>

      <div className="card-container">
        <div className="card">
          <h3>Delhi</h3>
          <p>Capital territory showcasing centuries of rich dynastic history and modern monuments.</p>
        </div>

        <div className="card">
          <h3>Tamil Nadu</h3>
          <p>Cradle of Dravidian architecture, grand temple towers, and classical arts.</p>
        </div>

        <div className="card">
          <h3>West Bengal</h3>
          <p>Cultural hub known for colonial architecture, literature, and living traditions.</p>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>About This Portal</h1>

      <p>
        This Single Page Application (SPA) is built using React and React Router for seamless navigation without full page reload.
      </p>

      <p>
        It showcases declarative routing, NavLink active state management, and clean modular component architecture.
      </p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h2>Bharat Tourism Portal</h2>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/monuments">Monuments</NavLink>
            <NavLink to="/regions">Regions</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monuments" element={<Monuments />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App