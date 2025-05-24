
import { motion } from 'motion/react'
import { txtCol, specialColor } from '../styles/colors.js'

function Title() { 
  const style = {
    fontSize: '45px',
    paddingTop: '8vh',
    paddingBottom: '8vh',
    textAlign: 'center',
    background: specialColor,
    backgroundClip: 'text',
    textShadow: 'rgb(128, 128, 128) 0px 0px 25px',
    color: 'transparent',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  }

  return <h1 style={style}>Braeden Meikle</h1> 
}

function FavoriteSong({ meta }) {
  return <div style={{textAlign:'center', display: 'flex', alignItems:'center', margin: '0 0 0 0'}}>
    <img src={meta.imgLink} style={{paddingLeft:'8px', paddingRight:'8px', width: meta.size.width, height: meta.size.height}} alt={meta.alt}/>
    <p className='tracker' style={{paddingRight:'5px', color: txtCol}}>{meta.song}</p>
    <BouncingLines/>
  </div>
}

function ActivityTracker({ activity }) {
  return (
    <div style={{display: 'grid', justifyContent: 'center', gap: '2px', marginBottom: '-80px'}}>
      {activity.map((row, i) =>
        <div key={i} style={{display: 'flex', gap: '2px'}}>
        {row.map((day, j) => 
          <Activity key={j} day={day} index={(i+1) * (j+1)}/>
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
    <div style={{display: 'flex', width: '10px', paddingTop:'4px', justifyContent:'space-between'}}>
      {[...Array(3)].map((_, i) => <div key={i}>
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
    backgroundColor: txtCol
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

function MetaAnim({ meta }) {
  const boundaries = [
    {
      position: 'absolute',
      zIndex: '3',
      margin: `${Math.floor((Math.random() * 500) - 50)}px 0 0 ${Math.floor((Math.random() * 110) - 50)}px`
    },
    {
      position: 'absolute',
      zIndex: '2',
      marginLeft:'auto',
      margin: `${Math.floor((Math.random() * 500) - 50)}px 0 0 ${Math.floor((Math.random() * 10) + 55)}vw`
    }
  ]
  const delays = [8,16]

  return boundaries.map((boundary, i) => <MetaAnimFact 
    meta={meta[Math.round(Math.random() * 3)]} 
    delay={delays[i]} 
    style={boundary}/>
  )
}

function MetaAnimFact({ meta, delay, style }) {
  return (
    <div style={style}>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0,0.9,0] }}
      transition={{ 
        repeatType: 'reverse',
        repeat: Infinity,
        delay: delay,
        duration: 6,
        repeatDelay: 20
      }}
      >
        <pre className='meta-anim'>
          {JSON.stringify(meta, null, 2)}
        </pre>
      </motion.div>
    </div>
  )
}

function WhatImDoing() {
  return <div style={{display:'flex', justifyContent: 'center'}}>
    <p style={{color: specialColor}}>&rArr;</p>
  </div>
}
  
function FavoriteFunction({ meta }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
      <a href={meta.link} rel='noreferrer' target='_blank' className='func'>{meta.func}</a>
    </div>
  )
}
  
function FavoritePokerHand() {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
      <img alt='Jack of Diamonds' src={`${process.env.PUBLIC_URL}/img/jack-of-diamonds.png`} style={{width: 35, height: 35}}/>
      <img alt='Deuce of Diamonds' src={`${process.env.PUBLIC_URL}/img/two-of-diamonds.png`} style={{width: 35, height: 35}}/>
    </div>
  )
}
  
function Canvas({ meta }) {
  const style = {
    backgroundColor: 'rgb(17, 17, 17)',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '320px',
    padding: '30px 0 30px 0',
    boxShadow: `0px 0px 30px rgb(38, 38, 38), 0px 0px 30px ${specialColor}`,
    flexDirection: 'column'
  }

  function Padding({ width }) {
    return <div style={{width: `${width}px`, height: '4px'}}/>
  }

  return <div style={style}>
    <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
      <Padding width={80}/>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <p className='tracker'>Song</p>
        <FavoriteSong meta={meta.favSongMeta}/>
      </div>
      <Padding width={80}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
      <Padding width={80}/>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <p className='tracker'>Function</p>
        <FavoriteFunction meta={meta.favFuncMeta}/>
      </div>
      <Padding width={80}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
      <Padding width={80}/>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <p className='tracker'>Hand</p>
        <div style={{margin: '0 15px 0 0'}}>
          <FavoritePokerHand/>
        </div>
      </div> 
      <Padding width={80}/>
    </div>
  </div> 
}

// function BinarySnake() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: [0,0.9,0] }}
//       style={{
//         color: 'white',
//         zIndex: 2,
//         margin: `${Math.floor((Math.random() * 100) + 450)}px 0px 0px ${Math.floor((Math.random() * 450) + 500)}px`,
//         position: 'absolute'
//       }}
//       transition={{
//         repeatType: 'reverse',
//         repeat: Infinity,
//         delay: 18,
//         duration: 3,
//         repeatDelay: 40
//       }}
//     >
//       <pre className='meta-anim'>{[...Array(8)].map(_ => Math.round(Math.random()))}</pre>
//     </motion.div>
//   )
// }
  
function Fun({ meta }) { 
  // const metaAnimStyle = {
  //   display: 'inline-block', 
  //   marginLeft: '200px', 
  //   padding:'9px 8px 9px 14px', 
  //   position: 'absolute', 
  //   zIndex: '2', 
  //   justifyContent:'center', 
  //   fontSize:'12px',
  // }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '95vh'}}>
      <Title/>
      {/* <div style={metaAnimStyle}>
        <MetaAnim meta={meta.animMeta}/>
      </div> */}
      <ActivityTracker activity={meta.activity}/>
      <Canvas meta={meta}/>
    </div>
  )
}

export { Fun }