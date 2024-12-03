import { 
  bioMeta,
  geicoMeta,
  hiyaMeta,
  siteMeta
} from '../data/consts'
import { motion } from 'motion/react'
import { capFirst } from '../nav/sidebar'

function Pfp({ meta }) {
  return <img 
    src={meta.imgLink}
    style={{width: meta.sqSize, height: meta.sqSize, objectFit:'cover', borderRadius:'50%'}} 
    alt={meta.alt}
  />
}

function Bio({ meta }) {
  return (
    <div style={{paddingTop: '5vh', paddingBottom: '2vh', display:'grid', placeItems: 'center'}}>
      <Pfp meta={meta.pfpMeta}/>
      <div className='bio'>
        <p style={{color:'white'}}>{meta.bio}</p>
      </div>
    </div>
  )
}

/*
Gradient list V Divider
Transitions from black to gray towards the center of the line, then
transitions to black as it reaches the other end (bell curve but for grayness)
*/
function ListVDiv() {
  return <div className='list-vdiv'/>
}

function ListTitle({ title }) {
  return <p style={{textAlign:'center', color: 'rgb(160,160,160)'}}>{title}</p>
}

function Interests() {
  const interests = ['running', 'poker', 'coding', 'tennis']
  const imgSq = '23px'

  return (
    <div style={{width: '200px', display: 'grid', justifyContent: 'center'}}>
      <ListTitle title={'Interests'}/>
      <ListVDiv/>
      {interests.map((interest, i) =>
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut', delay: (i * 0.6) + 1 }} 
        style={{display: 'flex', alignItems:'center'}}
        >
          <img alt={`${capFirst(interest)} icon`} src={`./${interest}.png`} style={{width: imgSq, height: imgSq}}/>
          <p style={{color: 'white', paddingLeft: '5px'}}>{capFirst(interest)}</p>
        </motion.div>
      )}
    </div>
  )
}

function Teams() {
  const teams = [
    {team: 'Commanders', imgSize: {width: '23px', height: '23px'}},
    {team: 'Capitals', imgSize: {width: '35px', height: '35px'}},
    {team: 'Yellowjackets', imgSize: {width: '43px', height: '23px'}},
    {team: 'Wizards', imgSize: {width: '28px', height: '28px'}}
  ]
  const imgSize = '23px'

  return (
    <div style={{width: '200px', display: 'grid', justifyContent: 'center'}}>
      <ListTitle title={'Teams'}/>
      <ListVDiv/>
      {teams.map((meta, i) =>
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut', delay: (i * 0.6) + 1 }} 
        style={{display: 'flex', alignItems:'center'}}
        >
          <img alt={`${capFirst(meta.team)} icon`} src={`./${meta.team}.png`} style={{width: meta.imgSize.width, height: imgSize.height}}/>
          <p style={{color: 'white', paddingLeft: '5px'}}>{capFirst(meta.team)}</p>
        </motion.div>
      )}
    </div>
  )
}

function AppContributions() {
  const contributions = [geicoMeta, hiyaMeta, siteMeta]

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'grid', gap:'15px', justifyContent: 'center', width: '70vh', backgroundClip: 'content-box'}}>
        <ListTitle title={'Applications'}/>
        <ListVDiv/>
        {contributions.map((meta, index) => 
          <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: (index * 0.6) + 1 }} 
          className='app-entry'>
            <img alt={meta.alt} src={meta.img} style={{zIndex: '1', paddingTop: meta.imgVOffset, position: 'absolute', margin: `0 0 0 ${-85+meta.imgHOffset}px`, clipPath: meta.clip, borderRadius:'20px', width: meta.imgRect.width, height: meta.imgRect.height}}/>
            <div style={{width: 8, height: 8, backgroundColor: 'white', borderRadius: '50%'}}></div>
            <pre style={{margin: '0 0 0 15px', color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.prefix}</pre>
            {meta.link == null ? 
              <p style={{color: 'rgb(83,195,189)', paddingRight: 4}}>{meta.desc}</p> :
              <a target='_blank' rel='noreferrer' className='app-store' href={meta.link} style={{paddingRight: 4}}>{meta.desc}</a>
            }
          </motion.div>)}
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <Bio meta={bioMeta}/>
      </motion.div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <AppContributions/>
        <Interests/>
        <Teams/>
      </div>
    </div>
  )
}

export { Portfolio }