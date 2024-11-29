function Bio({ meta }) {
  return (
    <div style={{display:'grid', placeItems: 'center'}}>
      <Pfp meta={meta.pfpMeta}/>
      <div style={{paddingTop: '15px', width: '50vw'}}>
        <p style={{color:'white'}}>{meta.bio}</p>
      </div>
    </div>
  )
}

function Pfp({ meta }) {
  return <img 
    src={meta.imgLink}
    style={{width: meta.sqSize, height: meta.sqSize, objectFit:'cover', borderRadius:'50%'}} 
    alt={meta.alt}
  />
}

export { Bio }