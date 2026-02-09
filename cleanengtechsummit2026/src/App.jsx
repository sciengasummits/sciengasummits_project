import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Tracks from './pages/Tracks'
import Speakers from './pages/Speakers'
import Venue from './pages/Venue'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import Register from './pages/Register'
import SubmitAbstract from './pages/SubmitAbstract'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/submit-abstract" element={<SubmitAbstract />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
