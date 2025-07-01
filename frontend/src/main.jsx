import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

// pages
import Landing from './pages/Landing.jsx'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Landing/>} />
          <Route path="home" element={<App/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
