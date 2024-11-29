import './styles.css'
import React from 'react'
import { 
  pages
} from './data/consts.js'
import { Fun } from './sections/fun.js'
import { AnimatedSidebar } from './nav/sidebar.js'
import { Portfolio } from './sections/portfolio.js'
import { Thoughts } from './sections/thoughts.js'
import { Journies } from './sections/journies.js'

function Body() {
  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <div id='fun' style={{height: '100vh'}}>
        <Fun/>
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