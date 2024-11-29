import './styles.css'
import React from 'react'
import { 
  lastEditDate,
  location,
  pages, 
} from './data/consts.js'
import { Canvas } from './sections/fun.js'
import { AnimatedSidebar } from './nav/sidebar.js'
import { Portfolio } from './sections/portfolio.js'
import { Thoughts } from './sections/thoughts.js'
import { Journies } from './sections/journies.js'

function Body() {
  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <div id='fun' style={{height: '100vh'}}>
        <Title/>  
        <EditTracker/>
        <LocationTracker/>
        <Canvas/>
      </div>
      <VDivider/>
      <div id='portfolio' style={{height: '100vh'}}>
        <Portfolio/>
      </div>
      <VDivider/>
      <div id='thoughts' style={{height: '100vh'}}>
        <Thoughts/>
      </div>
      <VDivider/>
      <div id='journies' style={{height: '100vh'}}>
        <Journies/>
      </div>
      <Footer/>
    </body>
  )
}

function Title() { return <h1 className='title'>Braeden Meikle</h1> }

function EditTracker() {
  return (
    <div style={{textAlign:'center', paddingTop:'1vh'}}>
      <p className='tracker'>Last seen: {lastEditDate}</p>
    </div>
  )
}

function LocationTracker() {
  return (
    <div style={{textAlign:'center', paddingBottom:'10vh'}}>
      <p className='tracker'>&#128205; {location}</p>
    </div>
  )
}

function VDivider() { return <div className='vdiv'></div> }

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

export default function App() {
  return <Body/>
}