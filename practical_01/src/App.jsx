import './App.css'

function MonumentCard({ name, state, builtBy, era }) {
  return (
    <div className="monument-card">
      <h2>{name}</h2>
      <p><strong>State:</strong> {state}</p>
      <p><strong>Built By:</strong> {builtBy}</p>
      <p><strong>Era:</strong> {era}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Historical Monuments of India</h1>

      <div className="card-container">
        <MonumentCard
          name="Qutub Minar"
          state="Delhi"
          builtBy="Qutb-ud-din Aibak"
          era="Delhi Sultanate"
        />

        <MonumentCard
          name="Konark Sun Temple"
          state="Odisha"
          builtBy="King Narasimhadeva I"
          era="Eastern Ganga Dynasty"
        />

        <MonumentCard
          name="Mysore Palace"
          state="Karnataka"
          builtBy="Maharaja Krishnaraja Wadiyar IV"
          era="Wadiyar Dynasty"
        />
      </div>
    </div>
  )
}

export default App