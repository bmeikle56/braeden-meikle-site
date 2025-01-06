
import { darkGray, losingRed, txtCol, superDarkGray, winningGreen } from '../styles/colors'
import { motion } from 'motion/react'
import { capFirst } from './Sidebar'
import * as d3 from 'd3'
import useD3 from 'hook-use-d3'

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
        <p style={{color: txtCol}}>{meta.bio}</p>
      </motion.div>
    </div>
  )
}

function ListVDiv() {
  return <div className='list-vdiv'/>
}

function ListTitle({ title }) {
  return <p style={{textAlign:'center', color: txtCol}}>{title}</p>
}

function Goals() {
  const goals = ['full stack dev', 'better teacher', 'scale', 'fun']

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 3.5 }} 
    style={{backgroundColor: superDarkGray, padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Goals'}/>
        <ListVDiv/>
      </div>
      {goals.map(goal =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <p style={{color: txtCol}}>&rArr;</p>
          <p style={{color: txtCol, paddingLeft: '7px'}}>{capFirst(goal)}</p>
        </div>
      )}
    </motion.div>
  )
}

function Applications({ geicoMeta, hiyaMeta, siteMeta }) {
  const contributions = [geicoMeta, hiyaMeta, siteMeta]

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 2 }} 
    style={{backgroundColor: superDarkGray, padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Applications'}/>
        <ListVDiv/>
      </div>
      {contributions.map(meta => 
        <div className='app-entry'>
          <img alt={meta.alt} src={meta.img} style={{paddingTop: meta.imgVOffset, position: 'absolute', margin: `0 0 0 ${-85+meta.imgHOffset}px`, clipPath: meta.clip, borderRadius:'20px', width: meta.imgRect.width, height: meta.imgRect.height}}/>
          <pre style={{margin: '0 0 0 -5px', color: txtCol, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>{meta.prefix}</pre>
          <p style={{color: txtCol, paddingRight: 15}}>{meta.desc}</p>
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
    style={{backgroundColor: superDarkGray, padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Interests'}/>
        <ListVDiv/>
      </div>
      {interests.map((interest, i) =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <img alt={`${capFirst(interest)} icon`} src={`${process.env.PUBLIC_URL}/img/${interest}.png`} style={{width: imgSq, height: imgSq}}/>
          <p style={{color: txtCol, paddingLeft: '7px'}}>{capFirst(interest)}</p>
        </div>
      )}
    </motion.div>
  )
}

function Teams() {
  const teams = [
    {team: 'commanders', imgSize: {width: '23px', height: '23px'}, leftAlign: '', imgPad: '8px'},
    {team: 'capitals', imgSize: {width: '35px', height: '35px'}, leftAlign: '7px', imgPad: '3px'},
    {team: 'yellowjackets', imgSize: {width: '45px', height: '30px'}, leftAlign: '12px', imgPad: '0px'},
    {team: 'wizards', imgSize: {width: '28px', height: '28px'}, leftAlign: '5px', imgPad: '8px'}
  ]
  const imgSize = '23px'

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8, ease: 'easeOut', delay: 3 }} 
    style={{backgroundColor: superDarkGray, padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Teams'}/>
        <ListVDiv/>
      </div>
      {teams.map((meta, i) =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <img alt={`${capFirst(meta.team)} icon`} src={`${process.env.PUBLIC_URL}/img/${meta.team}.png`} style={{margin: `0 0 0 -${meta.leftAlign}`, width: meta.imgSize.width, height: imgSize.height}}/>
          <p style={{color: txtCol, paddingLeft: `${meta.imgPad}`}}>{capFirst(meta.team)}</p>
        </div>
      )}
    </motion.div>
  )
}

function PokerJourney({ sessions }) { 
  let runningTotal = 0
  let didUseD3 = false

  const d3ref = useD3((svg) => {
    if (didUseD3) { return }
    didUseD3 = true // trick to avoid weird double-rendering bug
    const xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, 400])

    const yScale = d3.scaleLinear()
        .domain([500, -500])
        .range([0, 300])

    svg.append('g')
        .attr('transform', `translate(30,${200})`)
        .style('color', darkGray)
        .call(d3.axisBottom(xScale).tickSize(0).tickFormat(''))

    svg.append('g')
        .attr('transform', `translate(${30},50)`)
        .style('color', darkGray)
        .call(d3.axisLeft(yScale).tickSize(0).tickFormat(''))

    // We copy the sessions var so this is not appended to the reference used elsewhere
    let sessionsCopy = sessions
    sessionsCopy.unshift({result: 0, stakes: '', loc: '', date: '', dur: ''})

    /* Position to represent result of session */
    function Plot({ sessions }) {

      // Define horizontal config for graph
      // Not a good approach, but it's the easiest and laziest
      let startGraphX = -30, separation = 6

      for (let i in [...Array(sessionsCopy.length)]) {
        if (Number(i) === sessionsCopy.length - 1) { break }

        const origin = {x: 230, y: 50}

        const p1 = {x: xScale(startGraphX + separation * Number(i)) + origin.x, y: yScale(runningTotal) + origin.y}
        runningTotal += Number(sessionsCopy[Number(i)+1].result)
        const p2 = {x: xScale(startGraphX + separation * (Number(i) + 1)) + origin.x, y: yScale(runningTotal) + origin.y}

        function DrawLine({ p1, p2, color }) {    
          const line = d3.line()
            .x(d => d.x)
            .y(d => d.y)
          
          svg.append('path')
            .datum([p1, p2])
            .attr('d', line)
            .attr('stroke', color)
            .attr('fill', 'none')
            .attr('stroke-width', 2)
        }

        DrawLine({ p1, p2, color: txtCol })
      }
    }
    Plot({ sessions: sessionsCopy })
  }, [])

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 7.5
    }}
    className='poker-graph'
    >
      <svg ref={d3ref} style={{ color: txtCol, height: 460, width: 460 }}></svg>
    </motion.div>
  )
}

function PokerSessions({ sessions }) {
  return (
    <div style={{paddingTop: '10vh', backgroundClip: 'content-box', paddingRight: '100px', height: '20vh'}}>
      {sessions.map((session, i) =>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 4.5 + (0.25*i)
      }}
      >
        <Session session={session}/>
      </motion.div>
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
      color = result > 0 ? winningGreen : losingRed
      prefix = result > 0 ? '+ ' : '- '
    }

    return <p style={{width: '60px', color: color}}>{prefix}${result < 0 ? String(result).slice(1) : result}</p>
  }

  return (<div style={{textAlign:'center', height: '26px', paddingLeft: '20px', display: 'flex', gap: '8px'}}>
    {textFor(session.result)}
    <p style={{color: darkGray}}>&mdash;</p>
    <p style={{width: '190px', color: txtCol}}>{session.stakes} @ {session.loc}</p>
    <p style={{color: darkGray}}>&mdash;</p>
    <p style={{width: '50px', color: txtCol}}>{session.date}</p>
    <p style={{width: '15px', marginLeft: '20px', color: darkGray}}>&mdash;</p>
    <p style={{paddingLeft: '5px', color: txtCol}}>{session.dur}</p>
  </div>)
}



function Portfolio({ meta }) {
  return (
    <div>
      <Bio meta={meta.bioMeta}/>
      <div className='portfolio'>
        <Applications geicoMeta={meta.geicoMeta} hiyaMeta={meta.hiyaMeta} siteMeta={meta.siteMeta}/>
        <Interests/>
        <Teams/>
        <Goals/>
      </div>
      <div className='poker-journey' style={{display:'flex', justifyContent:'center'}}>
        <PokerSessions sessions={meta.sessions}/>
        <PokerJourney sessions={meta.sessions}/>
      </div>
    </div>
  )
}

export { Portfolio }