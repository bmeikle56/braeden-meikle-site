import './styles.css';
import React from "react";
import { motion } from "motion/react"

function Body() {
  return (
    <body>
      <AnimatedSidebar/>
      <Title/>  
      <EditTracker/>
      <LocationTracker/>
      <Canvas/>
      <VDivider/>
      <Footer/>
    </body>
  )
}

function AnimatedSidebar() {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <Sidebar/>
    </motion.div>
  )
}

function capFirst(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const pages = ['bio', 'portfolio', 'thoughts', 'journies']

// for bio, consider:
/*
- profile pic (circle)
- tennis, golf, GT, Potomac, fortnite, poker, chess (favorite move f4) 
*/

// for portfolio, consider:
/*
- author of (Java game) -> here's the zip file
- author of BCS app -> here's the app on the app/play store
- contributed to [GEICO iOS app](link) and [Hiya iOS app](link)
*/

// for thoughts, consider:
/*
- why Swift is one of the best languages
- the importance of a computer science/college degree
- force-unwrapping is actually better than nil-coalescing?
- software engineers should be aggressive & predictable, not passive & reactive
- changing opinions over time is a sign of maturity
*/

// for poker/journies, consider
/*
// place results in CSV, then consume and transform data
// Poker tracker with red/green color coding
// D3 for the graph with animations as well
*/

// maybe a golf course rankings page as well?

const sideBarBtns = pages.map(page => <button 
  style={{
    color: 'lightgray',
    width: '80px',
    height: '80px',
    backgroundColor: 'transparent',
    border: 'none'
  }}>
  {capFirst(page)}
</button>)

const sidebarStyle = {
  backgroundColor:'black',
  paddingTop:'25vh',
  zIndex: '1',
  position: 'absolute',
  display:'flex',
}

const sideBarBtnStyle = {
  display: 'flex',
  color: 'gray',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',
  width: '120px',
}

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <div style={sideBarBtnStyle}>{sideBarBtns}</div>
      <HDivider/>
    </div>
  )
}

function Title() { return <h1 className='title'>Braeden Meikle</h1> }

const lastEditDate = 'Tuesday, November 26'
const location = 'Atlanta, GA'
const favoriteProgrammingLanguage = 'Swift'
const favoriteFunction = 'compactMap'
const favoriteFunctionLink = 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'

function EditTracker() {
  return (
    <div style={{textAlign:'center', paddingTop:'20px'}}>
      <p className='tracker'>Last seen: {lastEditDate}</p>
    </div>
  )
}

function LocationTracker() {
  return (
    <div style={{textAlign:'center', paddingBottom:'50px'}}>
      <p className='tracker'>&#128205; {location}</p>
    </div>
  )
}

function FavoriteProgrammingLanguage() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite programming language:  </pre>
      <p style={{color:'white'}}>{favoriteProgrammingLanguage}</p>
    </div>
  )
}

function FavoriteFunction() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite function:  </pre>
      <a href={favoriteFunctionLink} target='_blank'>{favoriteFunction}</a>
    </div>
  )
}

function RoyalFlushTracker() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Royal flushes:  </pre>
      <p style={{color:'white'}}>&mdash;</p>
    </div>
  )
}

function HoleInOneTracker() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Hole-in-ones:  </pre>
      <p style={{color:'white'}}>&#9971;</p>
    </div>
  )
}

function Canvas() { 
  return (
    <div className='canvas'>
      <FavoriteProgrammingLanguage/>
      <FavoriteFunction/>
      <HoleInOneTracker/>
      <RoyalFlushTracker/>
    </div> 
  )
}

function HDivider() { return <div className='side-bar-hdiv'></div> }
function VDivider() { return <div className='footer-vdiv'></div> }

function Footer() {
  return (
    <div className='footer'>
      <p className='footer-txt'>Created November 26, 2024</p>
      <p className='footer-hdiv'>|</p>
      <span className='footer-txt' id='phone'></span>
      <p className='footer-hdiv'>|</p>
      <span className='footer-txt' id='email'></span>
      <p className='footer-hdiv'>|</p>
      <span className='footer-txt' id='linkedin'></span>
      <p className='footer-hdiv'>|</p>
      <span className='footer-txt' id='github'></span>
    </div>
  )
}

function App() {
  return <Body/>
}

export default App;