import './App.css'
import { Routes, Route } from 'react-router-dom'
import Splash from './pages/splash'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  )
}

export default App
