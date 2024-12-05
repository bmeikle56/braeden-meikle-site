
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
// import { Journies } from './sections/journies.js'
import { VDivider } from './Vdiv.js'
// import { getUnread } from '../api.js'

function Body() {
  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <div id='fun' className='section'>
        <Fun/>
      </div>
      <VDivider/>
      <div id='portfolio' className='section'>
        <Portfolio/>
      </div>
      <VDivider/>
      <div id='articles' className='section' style={{height:'150vh'}}>
        <Articles/>
      </div>
      {/* <VDivider/>
      <div id='journies' style={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
        <Journies sessions={sessions}/>
      </div> */}
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