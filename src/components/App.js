
import '../styles/global.css'
import React from 'react'
import { 
  pages,
} from '../data/consts.js'
import { Fun } from './Fun.js'
import { AnimatedSidebar } from './Sidebar.js'
import { Footer } from './Footer.js'
import { Portfolio } from './Portfolio.js'
import { Articles } from './Articles.js'
import { VDivider } from './Vdiv.js'
// import { getUnread } from '../api.js' // we'll want to call this API before loading the body

function Body() {
  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <div id='fun'>
        <Fun/>
      </div>
      <VDivider/>
      <div id='portfolio'>
        <Portfolio/>
      </div>
      <VDivider/>
      <div id='articles'>
        <Articles/>
      </div>
      <VDivider/>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Footer/>
      </div>
    </body>
  )
}

export default function App() {
  return <Body/>
}