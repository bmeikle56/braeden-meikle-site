import { 
    favPLang,
    favFuncMeta,
    favSongMeta
} from '../consts.js'
import '../styles.css';
import { motion } from 'motion/react'

function FavoriteSong({ meta }) {
  return <div style={{textAlign:'center', display: 'flex', alignItems:'center'}}>
    <p className='tracker'>Favorite song:</p>
    <img src={meta.imgLink} style={{paddingLeft:'8px', paddingRight:'8px', width: meta.size.width, height: meta.size.height}} alt={meta.alt}/>
    <p className='tracker' style={{paddingRight:'5px', color:'white'}}>{meta.song}</p>
    <BouncingLines/>
  </div>
}

function BouncingLines() {
  const animProps = {
    //y: [-5, 5, -5],
    // height: [10, 20, 10],
    height: ['50%', '100%', '50%'],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  }
  const barStyle = {
    backgroundColor: 'white', 
    width: '1.5px'
  }
  return (
    <div style={{width: '12px', height: '16px', display: 'flex', justifyContent: 'space-between'}}>
      {[...Array(3)].map(i => <motion.div style={barStyle} animate={animProps}/>)}
    </div>
  )
}
  
function FavoriteFunction({ meta }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite function:  </pre>
      <a href={meta.link} target='_blank'>{meta.func}</a>
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
    <div className='canvas' style={{}}>
      <FavoriteSong meta={favSongMeta}/>
      <FavoriteFunction meta={favFuncMeta}/>
      <HoleInOneTracker/>
      <RoyalFlushTracker/>
    </div> 
  )
}

export { Canvas }