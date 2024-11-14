import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Navjsx'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="layout">
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App