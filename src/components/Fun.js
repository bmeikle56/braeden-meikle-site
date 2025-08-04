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
  return <div style={{display: 'flex', width: '100%', justifyContent:'flex-start', alignItems:'center'}}>
    <img src={meta.imgLink} style={{width: meta.size.width, height: meta.size.height, padding: meta.imgPadding}} alt={meta.alt}/>
    <p style={{color: txtCol}}>{meta.song}</p>
    <div style={{display: 'flex', width: '100%', justifyContent:'flex-end', paddingRight: 30}}>
      <BouncingLines/>
    </div>
    
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

function ActivityTracker() {
  const activity = [
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
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
    backgroundColor: 'rgb(195, 0, 255)'
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
  
function FavoriteFunction() {
  const meta = {
    func: 'compactMap',
    link: 'https://developer.apple.com/documentation/swift/sequence/compactmap(_:)'
  }

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

function FavoriteTeams() {
  return (
    <div style={{display: 'flex', gap: 16}}>
      <img alt='Wizards old logo' src={`${process.env.PUBLIC_URL}/img/wizards.png`} style={{width: 35, height: 35}}/>
      <img alt='Georgia Tech Yellowjackets' src={`${process.env.PUBLIC_URL}/img/yellowjackets.png`} style={{width: 55, height: 35, marginRight: -10}}/>
    </div>
  )
}

function FavoriteFoods() {
  return (
    <div style={{display: 'flex', gap: 30, paddingTop: 5, paddingBottom: 5}}>
      <img alt='White chocolate' src={`${process.env.PUBLIC_URL}/img/white-chocolate.png`} style={{width: 35, height: 35}}/>
      <img alt='Coffee cup' src={`${process.env.PUBLIC_URL}/img/coffee-cup.png`} style={{width: 35, height: 35}}/>
    </div>
  )
}

function FavoriteSongs() {
  const songMetas = [
    {
      song: 'Escape',
      imgLink: 'https://i.scdn.co/image/ab67616d0000b273d8f57323c8f338a647193ad8',
      alt: 'Escape (Remix) album cover',
      size: {width: 25, height: 25},
      imgPadding: '0 18px 0 25px'
    },
    {
      song: 'Freedom',
      imgLink: 'https://i.postimg.cc/m2LdpSd0/freedom.png',
      alt: 'Freedom by Oliver Heldens album cover',
      size: {width: 50, height: 25},
      imgPadding: '0 0 0 15px'
    }
  ]

  return (<div style={{display: 'flex', flexDirection:'column', width: '100%'}}>
    {songMetas.map((songMeta) => {
      return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 40}}>
        <FavoriteSong meta={songMeta}/>
      </div>
    })}
  </div>)
}
  
function Cell({ content }) {
  return <div id='cell' style={{
    backgroundColor: 'black',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '180px',
    padding: '18px 0 18px 0',
    boxShadow: `0px 0px 12px ${specialColor}`,
    flexDirection: 'column'
  }}>
    {content}
  </div> 
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

function Pfp({ meta }) {
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
        return <div style={{width: 50, height: 50}}>
          <div style={{background: specialColor, boxShadow: `0px 0px 8px ${specialColor}`, borderRadius: 3, width: 40, height: 52, zIndex: 0, marginTop: 20}}/>
          <img alt={card} src={`${process.env.PUBLIC_URL}/img/cards/${card[0]}/${card[1]}.png`} style={{width: 50, height: 50, zIndex: 1, marginTop: -51, marginBottom: 25, marginLeft: -5}}/>
        </div>
      })}
    </div>
  )
}

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: 8, paddingBottom: 8}}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Goal goal={'Full stack dev'}/>
        <Goal goal={'Fast + smooth UX'}/>
      </div>
    </div>
  )
} 

function Apps() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <div style={{ display: 'flex', gap: '8px' }}>
          <img src={'https://i.postimg.cc/tTFHs75q/geico.jpg'} style={{paddingLeft:'8px', paddingRight:'8px', width: 40, height: 40}} alt={'GEICO iOS app'}/>
          <img src={'https://i.postimg.cc/hvgRTgy9/hiya.jpg'} style={{paddingLeft:'8px', paddingRight:'8px', width: 40, height: 40}} alt={'Hiya iOS app'}/>
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
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
      {/* <RunButton/>
      <div style={{position: 'absolute', margin: '250px 0 0 70px' }}>
        <ColoredCode txt={'func launchSite() async {'}/>
        <ColoredCode txt={'  let anim: Platform = isMobile ? .mobile : .web'}/>
        <ColoredCode txt={'  try {'}/>
        <ColoredCode txt={'    let data = try await fetchData()'}/>
        <ColoredCode txt={'    if let user = data.body?.user {'}/>
        <ColoredCode txt={'      logger.log("\(user) visiting site")'}/>
        <ColoredCode txt={'    }'}/>
        <ColoredCode txt={'    presentUI(with: data)'}/>
        <ColoredCode txt={'  } catch let error {'}/>
        <ColoredCode txt={'    logger.error("Error launching site: \(error.message)")'}/>
        <ColoredCode txt={'  }'}/>
        <ColoredCode txt={'}'}/>
      </div> */}
      <div style={{display:'flex', justifyContent: 'center', gap: 20, paddingTop: 80}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
          <Cell content={<FavoriteSongs/>}/>
          <Cell content={<FavoriteFoods/>}/>
          <Cell content={<FavoriteFunction/>}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
          <Cell content={<Apps/>}/>
          <Cell content={<Goals/>}/>
          <Cell content={<FavoriteTeams/>}/>
        </div>
      </div>
    </div>
  )
}

export { Fun }