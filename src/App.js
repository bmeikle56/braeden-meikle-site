import '../src/styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Projects from '../src/pages/Projects'
import Berzerk from '../src/pages/Berzerk'
import PokerDegen from '../src/pages/PokerDegen'

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