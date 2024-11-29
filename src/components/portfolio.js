const geicoMeta = {
  alt: 'GEICO iOS App icon',
  clip: 'inset(9.08px 32.3px 8.4px 32.4px round 8px)',
  desc: 'GEICO iOS app',
  img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e6/5c/9a/e65c9a80-1eaa-606e-ca79-9a0921d0921f/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png',
  imgSq: {width: 100, height: 50},
  link: 'https://apps.apple.com/us/app/geico-mobile-car-insurance/id331763096',
  prefix: 'Contributed to the ',
  users: '(10M monthly users)'
}

const hiyaMeta = {
  alt: 'Hiya iOS App icon',
  clip: 'inset(7.98px 32.5px 8.3px 32.5px round 8px)',
  desc: 'Hiya iOS app',
  img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/40/68/8f/40688f33-758d-52d3-8285-03f632a7cd70/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/1200x600wa.png',
  imgSq: {width: 100, height: 50},
  link: 'https://apps.apple.com/us/app/hiya-spam-blocker-caller-id/id986999874',
  prefix: 'Contributed to the ',
  users: '(250K monthly users)'
}

const siteMeta = {
  alt: '---',
  clip: 'inset(7.98px 32.5px 8.3px 32.5px round 8px)',
  img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/40/68/8f/40688f33-758d-52d3-8285-03f632a7cd70/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/1200x600wa.png',
  imgSq: {width: 100, height: 50},
  prefix: 'Owner of this site',
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

  return (<div style={{paddingBottom: '45vh', display: 'grid', justifyContent: 'center'}}>
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
      <AppContributions/>
    </div>
  )
}

export { Portfolio }