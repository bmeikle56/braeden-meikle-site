import './styles.css';
import React, { useState } from "react";
import { motion } from "motion/react"
import { 
  lastEditDate,
  location,
  favFunc,
  favFuncLink,
  favPLang,
  favSongImgLink,
  pages 
} from './consts.js'

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

function FavoriteSong({ imgLink, song, alt, size}) {
  return <div style={{textAlign:'center', paddingTop:'20px'}}>
    <p className='tracker'>Favorite song: </p>
    <img src={imgLink}> alt={alt} style={{width:size.width, heigth:size.height}}</img>
    <p className='tracker'>{song}</p>
  </div>
}

function AnimatedSidebar({ pages }) {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <Sidebar pages={pages}/>
    </motion.div>
  )
}

function capFirst(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const sideBarBtnStyle = {
  color: 'lightgray',
  width: '80px',
  height: '80px',
  backgroundColor: 'transparent',
  border: 'none'
}

const sidebarStyle = {
  backgroundColor:'black',
  paddingTop:'25vh',
  zIndex: '1',
  position: 'absolute',
  display:'flex',
}

const sideBarBtnDivStyle = {
  display: 'flex',
  color: 'gray',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',
  width: '120px',
}

function Sidebar({ pages }) {
  return (
    <div style={sidebarStyle}>
      <div style={sideBarBtnDivStyle}>{pages.map(page => 
        <button style={sideBarBtnStyle}>
          {capFirst(page)}
        </button>)}</div>
      <HDivider/>
    </div>
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

function FavoriteProgrammingLanguage() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite programming language:  </pre>
      <p style={{color:'white'}}>{favPLang}</p>
    </div>
  )
}

function FavoriteFunction() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite function:  </pre>
      <a href={favFuncLink} target='_blank'>{favFunc}</a>
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

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return <Body/>
}