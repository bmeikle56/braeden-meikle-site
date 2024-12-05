
import { 
  bioMeta,
  geicoMeta,
  hiyaMeta,
  siteMeta
} from '../data/consts'
import { motion } from 'motion/react'
import { capFirst } from './Sidebar'

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
      <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }} 
      >
        <Pfp meta={meta.pfpMeta}/>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }} 
      className='bio'>
        <p style={{color:'gray'}}>{meta.bio}</p>
      </motion.div>
    </div>
  )
}

function ListVDiv() {
  return <div className='list-vdiv'/>
}

function ListTitle({ title }) {
  return <p style={{textAlign:'center', color: 'gray'}}>{title}</p>
}

function Goals() {
  const goals = ['full stack dev', 'better teacher', 'scale', 'fun']

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 3.5 }} 
    style={{backgroundColor: 'rgb(10,10,10)', padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Goals'}/>
        <ListVDiv/>
      </div>
      {goals.map(goal =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <p style={{color: 'gray'}}>&rArr;</p>
          <p style={{color: 'gray', paddingLeft: '7px'}}>{capFirst(goal)}</p>
        </div>
      )}
    </motion.div>
  )
}

function Applications() {
  const contributions = [geicoMeta, hiyaMeta, siteMeta]

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 2 }} 
    style={{backgroundColor: 'rgb(10,10,10)', padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Applications'}/>
        <ListVDiv/>
      </div>
      {contributions.map(meta => 
        <div className='app-entry'>
          <img alt={meta.alt} src={meta.img} style={{paddingTop: meta.imgVOffset, position: 'absolute', margin: `0 0 0 ${-85+meta.imgHOffset}px`, clipPath: meta.clip, borderRadius:'20px', width: meta.imgRect.width, height: meta.imgRect.height}}/>
          <pre style={{margin: '0 0 0 -5px', color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.prefix}</pre>
          <p style={{color: 'gray', paddingRight: 15}}>{meta.desc}</p>
          {meta.link != null ? 
            <a target='_blank' rel='noreferrer' className='app-store' href={meta.link} style={{marginLeft:'auto', paddingRight: 14}}>&rArr;</a> : <div></div>
          }
        </div>)}
    </motion.div>
  )
}

function Interests() {
  const interests = ['running', 'poker', 'coding', 'tennis']
  const imgSq = '23px'

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 2.5 }} 
    style={{backgroundColor: 'rgb(10,10,10)', padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Interests'}/>
        <ListVDiv/>
      </div>
      {interests.map((interest, i) =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <img alt={`${capFirst(interest)} icon`} src={`./img/${interest}.png`} style={{width: imgSq, height: imgSq}}/>
          <p style={{color: 'gray', paddingLeft: '7px'}}>{capFirst(interest)}</p>
        </div>
      )}
    </motion.div>
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
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 3 }} 
    style={{backgroundColor: 'rgb(10,10,10)', padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Teams'}/>
        <ListVDiv/>
      </div>
      {teams.map((meta, i) =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <img alt={`${capFirst(meta.team)} icon`} src={`./img/${meta.team}.png`} style={{margin: `0 0 0 -${meta.leftAlign}`, width: meta.imgSize.width, height: imgSize.height}}/>
          <p style={{color: 'gray', paddingLeft: `${meta.imgPad}`}}>{capFirst(meta.team)}</p>
        </div>
      )}
    </motion.div>
  )
}

function Portfolio() {
  return (
    <div>
      <Bio meta={bioMeta}/>
      <div className='portfolio'>
        <Applications/>
        <Interests/>
        <Teams/>
        <Goals/>
      </div>
    </div>
  )
}

export { Portfolio }