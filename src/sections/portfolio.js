import { 
  bioMeta,
  geicoMeta,
  hiyaMeta,
  siteMeta
} from '../data/consts'
import { motion } from 'motion/react'

function Pfp({ meta }) {
  return <img 
    src={meta.imgLink}
    style={{width: meta.sqSize, height: meta.sqSize, objectFit:'cover', borderRadius:'50%'}} 
    alt={meta.alt}
  />
}

function Bio({ meta }) {
  return (
    <div style={{paddingTop: '15vh', paddingBottom: '2vh', display:'grid', placeItems: 'center'}}>
      <Pfp meta={meta.pfpMeta}/>
      <div style={{paddingTop: '15px', width: '50vw'}}>
        <p style={{color:'white'}}>{meta.bio}</p>
      </div>
    </div>
  )
}

function AppContributions() {
  const appEntryStyle = {
    display: 'flex', 
    alignItems: 'center',
    width: '29.5vw',
    height: '60px',
    paddingLeft: '80px',
    backgroundColor: 'rgb(17,17,17)', 
    borderRadius:'15px'
  }

  const contributions = [geicoMeta, hiyaMeta, siteMeta]

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'grid', gap:'15px', justifyContent: 'center', width: '70vh',backgroundClip: 'content-box'}}>
        {contributions.map((meta, index) => 
          <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut', delay: (index * 0.6) + 1 }} 
          style={appEntryStyle}>
            <img alt={meta.alt} src={meta.img} style={{zIndex: '1', paddingTop: meta.imgVOffset, position: 'absolute', margin: `0 0 0 ${-90+meta.imgHOffset}px`, clipPath: meta.clip, borderRadius:'20px', width: meta.imgRect.width, height: meta.imgRect.height}}/>
            <div style={{width: 8, height: 8, backgroundColor: 'white', borderRadius: '50%'}}></div>
            <pre style={{margin: '0 0 0 19px', color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.prefix}</pre>
            <a target='_blank' rel="noreferrer" className='app-store' href={meta.link} style={{paddingRight: 4}}>{meta.desc}</a>
            <p style={{marginLeft: 'auto', paddingRight: '15px', color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.users}</p>
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
      <AppContributions/>
    </div>
  )
}

export { Portfolio }