import { 
  bioMeta,
  geicoMeta,
  hiyaMeta,
  siteMeta
} from "../data/consts"

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
    paddingLeft: '150px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '50vw'
  }

  const contributions = [geicoMeta, hiyaMeta, siteMeta]

  return (<div style={{display: 'grid', justifyContent: 'center'}}>
    {contributions.map((meta) => <div style={appEntryStyle}>
      <img alt={meta.alt} src={meta.img} style={{margin: '0 -12px 0 0', clipPath: meta.clip, borderRadius:'20px', width: meta.imgSq.width, height: meta.imgSq.height}}/>
      <div style={{width: 8, height: 8, backgroundColor: 'white', borderRadius: '50%'}}></div>
      <pre style={{margin: '0 0 0 19px', color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.prefix}</pre>
      <a target='_blank' rel="noreferrer" className='app-store' href={meta.link} style={{paddingRight: 4}}>{meta.desc}</a>
      <p style={{color: 'white', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.users}</p>
    </div>)}
  </div>)
}

function Portfolio() {
  return (
    <div>
      <Bio meta={bioMeta}/>
      <AppContributions/>
    </div>
  )
}

export { Portfolio }