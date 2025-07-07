import { motion } from 'motion/react'
import { txtCol, darkGray, superDarkGray, onlineGreen, specialColor } from '../styles/colors.js'

function Title() { 
  const style = {
    fontSize: '45px',
    paddingTop: '20px',
    paddingBottom: '8px',
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

function HealthBar() {
  function getRandomPercent() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Clamp percent between 0 and 100
  const clampedPercent = Math.max(0, Math.min(100, getRandomPercent()))

  return (
    <div
      style={{
        width: '64px',
        height: '8px',
        backgroundColor: 'black',
        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: `0 0 8px ${specialColor}`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${clampedPercent}%`,
          height: '100%',
          backgroundColor: specialColor,
          transition: 'width 0.3s ease-in-out',
          borderRadius: '10px 0 0 10px',
        }}
      />
    </div>
  )
}

// "Rank this (holdem/omaha) hand (1/6/q/j/....)(c/h/s/d) with an integer in the range 1-100 inclusive
// and give me a hex value to color the health bar"

function ActivityTracker() {
  const activity = [
    [0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0]
  ]

  function currentDayActivity() {
    return activity.flat()[currentDay() - 1]
  }

  function currentDay() {
    return new Date().getDate()
  }
  
  function onlineOfflineText() {
    const color = currentDayActivity() == 1 ? onlineGreen : darkGray
    const text = currentDayActivity() == 1 ? "Seen today" : "Offline"

    return (
      <div style={{display: 'flex'}}>
        <pre style={{
          color: color,
          textShadow: 'rgb(167, 167, 167) 0px 0px 8px',
          opacity: 0.3,
          fontSize: 12, margin: '0px 0px 0px 0px'
        }}>{"{ "}</pre>
        <pre style={{
          color: color,
          textShadow: 'rgb(201, 201, 201) 0px 0px 8px',
          opacity: 0.6,
          fontSize: 12, margin: '0px 0px 0px 0px'
        }}>{text}</pre>
        <pre style={{
          color: color,
          textShadow: 'rgb(167, 167, 167) 0px 0px 8px',
          opacity: 0.3,
          fontSize: 12, margin: '0px 0px 0px 0px'
        }}>{" }"}</pre>
      </div>
    )
  }

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
        {onlineOfflineText()}
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

// holdem hand of the day
// strength

// plo5 hand of the day
// strength

function HoldemHandOfTheDay() {
  // cards must be unique...
  let cards = new Set()
  while (cards.size < 2) {
    cards.add(getRandomCard())
  }
  cards = Array.from(cards)
  return (
    <Hand cards={cards}/>
  )
}

function OmahaHandOfTheDay() {
  // cards must be unique...
  let cards = new Set()
  while (cards.size < 5) {
    cards.add(getRandomCard())
  }
  cards = Array.from(cards)
  return (
    <Hand cards={cards}/>
  )
}

function getRandomCard() {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k', 'a']
  const suits = ['h', 'd', 'c', 's']
  const rank = ranks[Math.floor(Math.random() * ranks.length)]
  const suit = suits[Math.floor(Math.random() * suits.length)]
  return rank + suit
}

function Hand({ cards }) {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
      {cards.map((card) => {
        return <img alt={card} src={`${process.env.PUBLIC_URL}/img/cards/${card[0]}/${card[1]}.png`} style={{width: 50, height: 50}}/>
      })}
    </div>
  )
}

/*

async func parse(message: String) {
  guard await handshake() else { return }
  let 
}
*/

function Goals() {

  function Goal({ goal }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: 'fit-content',}}>
        <p style={{ color: specialColor, paddingRight: '6px', margin: '0px 0px 0px 0px' }}>&rArr;</p>
        <p style={{ color: darkGray, margin: '0px 0px 0px 0px' }}>{goal}</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <p style={{ color: darkGray }}>Goals</p>
      <GradientLine/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Goal goal={'Full stack dev'}/>
        <Goal goal={'Efficient + smooth UX'}/>
        <Goal goal={'Tame golf swing'}/>
      </div>
    </div>
  )
} 

const pfpMeta = {
  imgLink: 'https://i.postimg.cc/5y9YBjxF/IMG-6776.jpg',
  width: 69,
  height: 92,
  alt: 'Profile Picture'
}

function GradientLine() {
  return (
    <div
      style={{
        height: '1px',
        width: '300px',
        background: `linear-gradient(to right, black, #222, black)`,
        margin: '-5px 0 20px 0'
      }}
    />
  )
}
  
function Fun() { 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '95vh'}}>
      <Title/>
      <div>
        <ActivityTracker/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', marginBottom: '12px' }}>
            <HoldemHandOfTheDay/>
          </div>
          <OmahaHandOfTheDay/>
        </div>
      </div>
      <div style={{ position: 'absolute', margin: '277px 0 0 550px' }}>
        <HealthBar/>
      </div>
      <div style={{ position: 'absolute', margin: '339px 0 0 550px' }}>
        <HealthBar/>
      </div>
      <div style={{ position: 'absolute', margin: '150px 0 0 1050px' }}>
        <Goals/>
      </div>
      <Canvas/>
    </div>
  )
}

export { Fun }