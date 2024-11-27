import './styles.css';
import React, { useState } from "react";
import { 
  lastEditDate,
  location,
  pages, 
} from './consts.js'
import { Canvas } from './components/canvas.js'
import { AnimatedSidebar } from './components/sidebar.js'

function Body() {
  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <Title/>  
      <EditTracker/>
      <LocationTracker/>
      <Canvas/>
      <VDivider/>
      <Footer/>
    </body>
  )
}

function Title() { return <h1 className='title'>Braeden Meikle</h1> }

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

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return <Body/>
}