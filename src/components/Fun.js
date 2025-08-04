import { motion } from 'motion/react'
import { darkGray, superDarkGray, onlineGreen, specialColor } from '../styles/colors.js'
import Cells from './Cells.js'

function Title() { 
  const style = {
    fontSize: '28px',
    paddingTop: '60px',
    paddingBottom: '8px',
    textAlign: 'center',
    background: specialColor,
    backgroundClip: 'text',
    textShadow: 'rgb(128, 128, 128) 0px 0px 25px',
    color: 'transparent',
  }

  return <pre id="title" style={style}>braeden meikle</pre> 
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
        width: '48px',
        height: '6px',
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

function ActivityTracker() {
  const activity = [
    [0,0,1,0,0,0,0,0,0,0],
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
        <Pfp/>
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

{/* <div style={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', width: '100%'}}>
      <p style={{color: darkGray}}>Transforming</p>
      <FavoriteFunction meta={funcMeta}/>
    </div>}
    {/* <div style={{display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center', width: '100%'}}>
      <p style={{color: darkGray}}>Bluffing with</p>
      <div style={{margin: '0 15px 0 0'}}>
        <FavoritePokerHand/>
      </div>
    </div> */}

function Pfp() {
  const meta = {
    imgLink: 'https://i.postimg.cc/5y9YBjxF/IMG-6776.jpg',
    width: 57,
    height: 76,
    alt: 'Profile Picture'
  }

  return (
      <img 
        src={meta.imgLink}
        style={{width: meta.width, height: meta.height, borderRadius:'10%'}} 
        alt={meta.alt}
      />
  )
}

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
  // cards must be unique
  const cards = new Set()
  while (cards.size < 5) {
    cards.add(getRandomCard())
  }

  const rankOrder = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5', '4', '3', '2']

  // cards sorked by rank, left highest
  const sortedCards = Array.from(cards).sort((a, b) => {
    const rankA = a[0]
    const rankB = b[0]
    return rankOrder.indexOf(rankA) - rankOrder.indexOf(rankB)
  })

  return <Hand cards={sortedCards} />
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
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 5, width: 220}}>
      {cards.map((card) => {
        return <div style={{width: 50, height: 50}}>
          <div style={{background: specialColor, boxShadow: `0px 0px 8px ${specialColor}`, borderRadius: 3, width: 36, height: 48, zIndex: 0, marginTop: 22}}/>
          <img alt={card} src={`${process.env.PUBLIC_URL}/img/cards/${card[0]}/${card[1]}.png`} style={{width: 46, height: 46, zIndex: 1, marginTop: -47, marginBottom: 25, marginLeft: -5}}/>
        </div>
      })}
    </div>
  )
}
  
function Fun() { 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '95vh', opacity: 0.6}}>
      <Title/>
      <div>
        <ActivityTracker/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'fit-content' }}>
          {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', marginBottom: '12px' }}>
            <HoldemHandOfTheDay/>
          </div> */}
          <OmahaHandOfTheDay/>
        </div>
      </div>
      {/* <div style={{ position: 'absolute', margin: '255px 0 0 550px' }}>
        <HealthBar/>
      </div> */}
      <div style={{ position: 'absolute', margin: '278px 0 0 580px' }}>
        <HealthBar/>
      </div>
      <Cells/>
    </div>
  )
}

export { Fun }