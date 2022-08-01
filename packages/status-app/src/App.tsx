import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFound'
import StatusPage from './pages/StatusPage'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='/:id' element={<StatusPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
