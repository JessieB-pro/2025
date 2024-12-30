import './App.css'
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route, Navigate } from 'react-router-dom'
import Enigmes from './components/Enigmes'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Navigate to="/enigmes" replace />} />
        <Route path='/enigmes' element={<Enigmes />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default App
