import './styles.css';
import React /*, { useState }*/ from "react";
import { 
  bioMeta,
  lastEditDate,
  location,
  pages, 
} from './data/consts.js'
import { Canvas } from './components/canvas.js'
import { Bio } from './components/bio.js'
import { AnimatedSidebar } from './components/sidebar.js'
import { Portfolio } from './components/portfolio.js';

function Body() {
  return (
    <body>
      <AnimatedSidebar pages={pages}/>
      <div style={{height: '100vh'}}>
        <Title/>  
        <EditTracker/>
        <LocationTracker/>
        <Canvas/>
      </div>
      <VDivider/>
      <Bio meta={bioMeta}/>
      <Portfolio/>
      <VDivider/>
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
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  
  return <Body/>
}