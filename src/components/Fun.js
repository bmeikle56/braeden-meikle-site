
import { motion } from 'motion/react'
import { txtCol, darkGray, superDarkGray, onlineGreen, specialColor } from '../styles/colors.js'

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

  return <h1 id="title" style={style}>Braeden Meikle</h1> 
}

function FavoriteSong({ meta }) {
  return <div style={{textAlign:'center', display: 'flex', alignItems:'center', margin: '0 0 0 0'}}>
    <img src={meta.imgLink} style={{paddingLeft:'8px', paddingRight:'8px', width: meta.size.width, height: meta.size.height}} alt={meta.alt}/>
    <p style={{paddingRight:'5px', color: txtCol, marginLeft: '-10px'}}>{meta.song}</p>
    <BouncingLines/>
  </div>
}

function ActivityTracker() {
  const activity = [
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0]
  ]

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Pfp meta={pfpMeta}/>
      </div>
      <div style={{height: '72px', width:'2px', background: 'rgb(30,30,30)', borderRadius: '8px'}}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'grid', justifyContent: 'center', gap: '2px'}}>
          {activity.map((row, i) =>
              <div key={i} style={{display: 'flex', gap: '2px'}}>
              {row.map((day, j) => 
                <Activity key={j} day={day} index={(i+1) * (j+1)}/>
              )}
            </div>
          )}
        </div>
        <div style={{display: 'flex'}}>
          <pre style={{
            color: onlineGreen,
            textShadow: 'rgb(167, 167, 167) 0px 0px 8px',
            opacity: 0.3,
            fontSize: 12, margin: '0px 0px 0px 0px'
          }}>{"{ "}</pre>
          <pre style={{
            color: onlineGreen,
            textShadow: 'rgb(201, 201, 201) 0px 0px 8px',
            opacity: 0.6,
            fontSize: 12, margin: '0px 0px 0px 0px'
          }}>{"Seen today"}</pre>
          <pre style={{
            color: onlineGreen,
            textShadow: 'rgb(167, 167, 167) 0px 0px 8px',
            opacity: 0.3,
            fontSize: 12, margin: '0px 0px 0px 0px'
          }}>{" }"}</pre>
        </div>
      </div>
    </div>
  )
}

function Activity({ day, index }) {
  const activityStyle = {
    backgroundColor: day === 1 ? onlineGreen : superDarkGray, 
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

function FavoriteTeam() {
  return (
    <div style={{display: 'flex'}}>
      <img alt='Wizards old logo' src={`${process.env.PUBLIC_URL}/img/wizards.png`} style={{width: 35, height: 35}}/>
    </div>
  )
}

function Padding({ width }) {
  return <div style={{width: `${width}px`, height: '4px'}}/>
}
  
function Canvas() {
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


  const songMeta = {
    // song: 'Escape',
    // imgLink: 'https://i.scdn.co/image/ab67616d0000b273d8f57323c8f338a647193ad8',
    // alt: 'Escape (Remix) album cover',
    // size: {width: 25, height: 25},
    song: 'Freedom',
    imgLink: 'https://i.postimg.cc/m2LdpSd0/freedom.png',
    alt: 'Freedom by Oliver Heldens album cover',
    size: {width: 50, height: 25},
  }

  const funcMeta = {
    func: 'compactMap',
    link: 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'
  }

  return <div id='canvas' style={style}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <p style={{color: darkGray, marginRight: '-10px'}}>Listening to</p>
      <FavoriteSong meta={songMeta}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', width: '100%'}}>
      <p style={{color: darkGray}}>Transforming</p>
      <FavoriteFunction meta={funcMeta}/>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center', width: '100%'}}>
      <p style={{color: darkGray}}>Sadly rooting for</p>
      <div style={{margin: '0 15px 0 0'}}>
        <FavoriteTeam/>
      </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center', width: '100%'}}>
      <p style={{color: darkGray}}>Bluffing with</p>
      <div style={{margin: '0 15px 0 0'}}>
        <FavoritePokerHand/>
      </div>
    </div>
  </div> 
}

function Pfp({ meta }) {
  return (
      <img 
        src={meta.imgLink}
        style={{width: meta.width, height: meta.height, borderRadius:'10%'}} 
        alt={meta.alt}
      />
  )
}

const pfpMeta = {
  imgLink: 'https://i.postimg.cc/5y9YBjxF/IMG-6776.jpg',
  width: 69,
  height: 92,
  alt: 'Profile Picture'
}
  
function Fun() { 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '95vh'}}>
      <Title/>
      <div>
        <ActivityTracker/>
      </div>
      <Canvas/>
    </div>
  )
}

export { Fun }