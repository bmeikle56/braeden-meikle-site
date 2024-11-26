import './styles.css';
import React, { Component } from "react";
import { color, motion } from "motion/react"
// import { delay } from "motion"

function Body() {
  return (
    <body>
      <AnimatedSidebar/>
      <Title/>  
      <EditTracker/>
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

const sideBarBtnsConfig = [
  {title: 'Bio', className: 'side-bar-btn'},
  {title: 'Thoughts', className: 'side-bar-btn'},
  {title: 'Poker', className: 'side-bar-btn'},
]

const sideBarBtns = sideBarBtnsConfig.map(btn => <button 
  style={{
    color: 'lightgray',
    width: '80px',
    height: '50px',
    backgroundColor: 'transparent',
    border: 'none'
  }}>
  {btn.title}
</button>)

const sidebarStyle = {
  zIndex: '1',
  position: 'absolute',
  display:'flex'
}

const sideBarBtnStyle = {
  display: 'flex',
  color: 'gray',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',
  width: '120px'
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
const numHolesInOne = '1'
const numRoyalFlushes = '--' // em dash?
const favoriteProgrammingLanguage = 'Swift'
const favoriteFunction = 'compactMap'
const favoriteFunctionLink = 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'

function EditTracker() {
  return (
    <div style={{textAlign:'center', paddingTop:'20px', paddingBottom:'50px'}}>
      <p className='tracker'>Last seen: {lastEditDate}</p>
    </div>
  )
}

function FavoriteProgrammingLanguage() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite programming language:  </pre>
      <p>{favoriteProgrammingLanguage}</p>
    </div>
  )
}

function FavoriteFunction() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite function:  </pre>
      <a href={favoriteFunctionLink}>{favoriteFunction}</a>
    </div>
  )
}

function RoyalFlushTracker() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Royal flushes:  </pre>
      <p>{numRoyalFlushes}</p>
    </div>
  )
}

function HoleInOneTracker() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Hole-in-ones:  </pre>
      <p>{numHolesInOne}</p>
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

// Poker tracker with red/green color coding
// D3 for the graph with animations as well maybe

export default App;