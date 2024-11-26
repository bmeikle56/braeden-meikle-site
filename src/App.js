import './styles.css';
import React, { Component } from "react";
import { motion } from "motion/react"
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

function TextStack() {
  return (
    <div>
      <p className='side-bar-txt'>Bio</p>
      <p className='side-bar-txt'>Thoughts</p>
      <p className='side-bar-txt'>Poker</p>
    </div>
  )
}

function Sidebar() {
  return (
    <div className='sidebar' >
      <TextStack/>
      <HDivider/>
    </div>
  )
}

function Title() { return <h1 className='title'>Braeden Meikle</h1> }

const lastEditDate = 'Tuesday, November 26'

function EditTracker() {
  return (
    <div className='edit-tracker'>
      <p className='last-seen'>Last seen:</p>
      <p className='date'>{lastEditDate}</p>
    </div>
  )
}

function Canvas() { return <div className='canvas'></div> }

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

// Royal Flushes: 0
// Holes in one: 


// Poker tracker with red/green color coding
// D3 for the graph with animations as well maybe

export default App;