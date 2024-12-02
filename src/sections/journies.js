function Journies({ sessions }) {
  return (
    <div style={{paddingTop: '10vh', backgroundClip: 'content-box', width: '70vw', height: '70vh'}}>
      {sessions.map(session =>
        <Session session={session}/>
      )}
    </div>
  )
}

function Session({ session }) {
  function textFor(result) {
    let color, prefix
    if (result === 0) {
      color = 'rgb(190,190,190)'
      prefix = '  '
    } else {
      color = result > 0 ? 'rgb(0,192,0)' : 'rgb(192,0,0)'
      prefix = result > 0 ? '+ ' : '- '
    }

    return <p style={{width: '60px', color: color}}>{prefix}${result < 0 ? String(result).slice(1) : result}</p>
  }

  return (<div style={{height: '26px', paddingLeft: '20px', display: 'flex', gap: '8px'}}>
    {textFor(session.result)}
    <p style={{color: 'rgb(40,40,40)'}}>&mdash;</p>
    <p style={{width: '120px', textAlign: 'center', color: 'rgb(190,190,190)'}}>{session.stakes} @ {session.loc}</p>
    <p style={{color: 'rgb(40,40,40)'}}>&mdash;</p>
    <p style={{width: '50px', textAlign: 'center', color: 'rgb(190,190,190)'}}>{session.date}</p>
    <p style={{color: 'rgb(40,40,40)'}}>&mdash;</p>
    <p style={{paddingLeft: '5px', color: 'rgb(190,190,190)'}}>{session.dur}</p>
  </div>)
}

export { Journies }