import '../src/styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Berzerk from './pages/Berzerk'
import PokerDegen from './pages/PokerDegen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/berzerk-agile-dev' element={<Berzerk/>}/>
        <Route path='/project/poker-degen' element={<PokerDegen/>}/>
      </Routes>
    </Router>
  )
}

export default App