import { 
  location,
  favFuncMeta,
  favSongMeta
} from '../data/consts.js'
import '../styles.css';
import { motion } from 'motion/react'

function Title() { return <h1 className='title'>Braeden Meikle</h1> }

/* Edits/day for the month of December */
const activity = [
  [1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0]
]

function FavoriteSong({ meta }) {
  return <div style={{textAlign:'center', display: 'flex', alignItems:'center'}}>
    <p className='tracker'>Favorite song:</p>
    <img src={meta.imgLink} style={{paddingLeft:'8px', paddingRight:'8px', width: meta.size.width, height: meta.size.height}} alt={meta.alt}/>
    <p className='tracker' style={{paddingRight:'5px', color:'white'}}>{meta.song}</p>
    <BouncingLines/>
  </div>
}

function LocationTracker() {
  return (
    <div style={{textAlign:'center', paddingBottom:'4vh'}}>
      <p className='tracker'>&#128205; {location}</p>
    </div>
  )
}

function ActivityTracker() {
  return (
    <div style={{display: 'grid', justifyContent: 'center', gap: '2px', paddingBottom:'8vh'}}>
      {activity.map((row, i) =>
        <div style={{display: 'flex', gap: '2px'}}>
        {row.map((day, j) => 
          <Activity day={day} index={(i+1) * (j+1)}/>
        )}
      </div>
      )}
    </div>
  )
}

function Activity({ day, index }) {
  const activityStyle = {
    backgroundColor: day === 1 ? 'rgb(0,192,0)' : 'rgb(50,50,50)', 
    width: '10px', 
    height: '10px', 
    borderRadius: '3px'
  }

  return <motion.div 
    style={activityStyle}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
      duration: 0.2, 
      delay: (day * 2) + (0.06 * index)
    }}
  ></motion.div>
}

function BouncingLines() {
  const heights = [
    [`${50}%`, `${80}%`, `${50}%`], 
    [`${54}%`, `${90}%`, `${54}%`], 
    [`${43}%`, `${82}%`, `${43}%`]
  ]

  const durs = [0.5, 0.7, 0.9]

  return (
    <div style={{display: 'flex', width: '10px', justifyContent:'space-between'}}>
      {[...Array(3)].map((_, i) => <div>
        <div style={{scale: '-1 -1'}}>
          <BouncingLine height={heights[i]} dur={durs[i]}/>
        </div>
        <BouncingLine height={heights[i]} dur={durs[i]}/>
      </div>)}
    </div>
  )
}

function BouncingLine({ height, dur }) {
  const barStyle = {
    width: '1px',
    backgroundColor: 'rgb(180,0,180)'

    /* Would like but causes image rasterization issues when animated... */
    // borderBottomRightRadius: '1px',
    // borderBottomLeftRadius: '1px',
  }

  return (
    <div style={{height: '8px', display: 'flex', justifyContent: 'space-between'}}>
      {<motion.div style={barStyle} animate={{
        height: height,
        transition: {
          duration: dur,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop'
        },
      }}/>}
    </div>
  )
}
  
function FavoriteFunction({ meta }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
      <pre className='tracker'>Favorite function:  </pre>
      <a href={meta.link} rel="noreferrer" target='_blank' class='func'>{meta.func}</a>
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

const canvasStyle = {
  backgroundColor: 'rgb(17, 17, 17)',
  borderRadius: '40px',
  margin: 'auto',
  width: '400px',
  paddingTop: '30px',
  paddingBottom: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 0px 30px rgb(38, 38, 38)'
}

function Canvas() {
  return <div style={canvasStyle}>
    <FavoriteSong meta={favSongMeta}/>
    <FavoriteFunction meta={favFuncMeta}/>
    <HoleInOneTracker/>
    <RoyalFlushTracker/>
  </div> 
}
  
function Fun() { 
  return (
    <div>
      <Title/>
      <LocationTracker/>
      <ActivityTracker/>
      <Canvas/>
    </div>
  )
}

export { Fun }