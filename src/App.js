import './styles.css'
import React from 'react'
import { 
  pages,
  sessions
} from './data/consts.js'
import { Fun } from './sections/fun.js'
import { AnimatedSidebar } from './nav/sidebar.js'
import { Footer } from './sections/footer.js'
import { Portfolio } from './sections/portfolio.js'
import { Articles } from './sections/articles.js'
import { Journies } from './sections/journies.js'
import { VDivider } from './sections/vdiv.js'

console.log(sessions)

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
      <div id='articles' style={{height: '100vh'}}>
        <Articles/>
      </div>
      <VDivider/>
      <div id='journies' style={{height: '100vh', display: 'flex', justifyContent: 'center'}}>
        <Journies sessions={sessions}/>
      </div>
      <VDivider/>
      <Footer/>
    </body>
  )
}

export default function App() {
  return <Body/>
}