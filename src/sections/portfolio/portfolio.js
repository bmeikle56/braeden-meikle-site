import { 
  bioMeta,
  geicoMeta,
  hiyaMeta,
  siteMeta
} from '../../data/consts'
import './portfolio.css';
import { motion } from 'motion/react'
import { capFirst } from '../../nav/sidebar'

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
  return <p style={{textAlign:'center', color: 'gray'}}>{title}</p>
}

function Interests() {
  const interests = ['running', 'poker', 'coding', 'tennis']
  const imgSq = '23px'

  return (
    <div style={{width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Interests'}/>
        <ListVDiv/>
      </div>
      {interests.map((interest, i) =>
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut', delay: (i * 0.6) + 1 }} 
        style={{display: 'flex', alignItems:'center'}}
        >
          <img alt={`${capFirst(interest)} icon`} src={`./${interest}.png`} style={{width: imgSq, height: imgSq}}/>
          <p style={{color: 'gray', paddingLeft: '7px'}}>{capFirst(interest)}</p>
        </motion.div>
      )}
    </div>
  )
}

function Teams() {
  const teams = [
    {team: 'Commanders', imgSize: {width: '23px', height: '23px'}, leftAlign: '', imgPad: '8px'},
    {team: 'Capitals', imgSize: {width: '35px', height: '35px'}, leftAlign: '7px', imgPad: '3px'},
    {team: 'Yellowjackets', imgSize: {width: '45px', height: '30px'}, leftAlign: '12px', imgPad: '0px'},
    {team: 'Wizards', imgSize: {width: '28px', height: '28px'}, leftAlign: '5px', imgPad: '8px'}
  ]
  const imgSize = '23px'

  return (
    <div style={{width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Teams'}/>
        <ListVDiv/>
      </div>
      {teams.map((meta, i) =>
        <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut', delay: (i * 0.6) + 1 }} 
        style={{display: 'flex', alignItems:'center'}}
        >
          <img alt={`${capFirst(meta.team)} icon`} src={`./${meta.team}.png`} style={{margin: `0 0 0 -${meta.leftAlign}`, width: meta.imgSize.width, height: imgSize.height}}/>
          <p style={{color: 'gray', paddingLeft: `${meta.imgPad}`}}>{capFirst(meta.team)}</p>
        </motion.div>
      )}
    </div>
  )
}

function Applications() { //rgb(83,195,189)
  const contributions = [geicoMeta, hiyaMeta, siteMeta]

  return (
    <div style={{width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Applications'}/>
        <ListVDiv/>
      </div>
      {contributions.map((meta, index) => 
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, ease: 'easeOut', delay: (index * 0.6) + 1 }} 
        className='app-entry'>
          <img alt={meta.alt} src={meta.img} style={{paddingTop: meta.imgVOffset, position: 'absolute', margin: `0 0 0 ${-85+meta.imgHOffset}px`, clipPath: meta.clip, borderRadius:'20px', width: meta.imgRect.width, height: meta.imgRect.height}}/>
          <pre style={{margin: '0 0 0 -5px', color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.prefix}</pre>
          <p style={{color: 'gray', paddingRight: 15}}>{meta.desc}</p>
          {meta.link != null ? 
            <a target='_blank' rel='noreferrer' className='app-store' href={meta.link} style={{marginLeft:'auto', paddingRight: 14}}>&rArr;</a> : <div></div>
          }
        </motion.div>)}
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
      <div className='portfolio'>
        <Applications/>
        <Interests/>
        <Teams/>
      </div>
    </div>
  )
}

export { Portfolio }