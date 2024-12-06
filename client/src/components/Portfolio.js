
import { 
  bioMeta,
  geicoMeta,
  hiyaMeta,
  siteMeta
} from '../data/consts'
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
          <img alt={`${capFirst(interest)} icon`} src={`${process.env.PUBLIC_URL}/img/${interest}.png`} style={{width: imgSq, height: imgSq}}/>
          <p style={{color: 'gray', paddingLeft: '7px'}}>{capFirst(interest)}</p>
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
    style={{backgroundColor: 'rgb(10,10,10)', padding: '10px 25px 10px 25px', borderRadius: '20px', width: '200px', display: 'grid', justifyContent: 'center'}}>
      <div style={{display:'inline-block'}}>
        <ListTitle title={'Teams'}/>
        <ListVDiv/>
      </div>
      {teams.map((meta, i) =>
        <div style={{display: 'flex', alignItems:'center'}}>
          <img alt={`${capFirst(meta.team)} icon`} src={`${process.env.PUBLIC_URL}/img/${meta.team}.png`} style={{margin: `0 0 0 -${meta.leftAlign}`, width: meta.imgSize.width, height: imgSize.height}}/>
          <p style={{color: 'gray', paddingLeft: `${meta.imgPad}`}}>{capFirst(meta.team)}</p>
        </div>
      )}
    </motion.div>
  )
}

function PokerJourney() { 
  let runningTotal = 0
  let didUseD3 = false

  const d3ref = useD3((svg) => {
    if (didUseD3) { return }
    didUseD3 = true
    const xScale = d3.scaleLinear()
        .domain([0, 100]) // measure past 100 days
        .range([0, 400])

    const yScale = d3.scaleLinear()
        .domain([500, -500]) // measure net changes +-500
        .range([0, 300])

    // add x-axis
    svg.append('g')
        .attr('transform', `translate(30,${200})`)
        .style('color', 'rgb(40,40,40)')
        .call(d3.axisBottom(xScale).tickSize(0).tickFormat(''))

    // Add y-axis
    svg.append('g')
        .attr('transform', `translate(${30},50)`)
        .style('color', 'rgb(40,40,40)')
        .call(d3.axisLeft(yScale).tickSize(0).tickFormat(''))

    /* Position to represent result of session */
    function Plot({ sessions }) {
      sessions.unshift({result: 0, stakes: '', loc: '', date: '', daysAgo: -20, dur: ''})
      for (let i in [...Array(sessions.length)]) {
        if (Number(i) === sessions.length-1) { break }

        const origin = {x: 230, y: 50}

        /* both are 0      --> white */
        /* one +, one -    --> split */
        /* both +          --> green */
        /* both +          --> red */

        let color

        let p1 = {x: xScale(Number(sessions[Number(i)].daysAgo)) + origin.x, y: yScale(runningTotal) + origin.y}
        runningTotal += Number(sessions[Number(i)+1].result)
        let p2 = {x: xScale(Number(sessions[Number(i)+1].daysAgo)) + origin.x, y: yScale(runningTotal) + origin.y}

        if (Number(sessions[Number(i)].result === 0)
            && Number(sessions[Number(i)+1].result === 0)) {
          color = 'gray' // 'white'
          Draw({ p1, p2, color })
        } else if (Number(sessions[Number(i)].result) > 0 && Number(sessions[Number(i)+1].result) > 0) {
          color = 'gray' // 'green'
          Draw({ p1, p2, color })
        } else if (Number(sessions[Number(i)].result) < 0 && Number(sessions[Number(i)+1].result) < 0) {
          color = 'gray' // 'red'
          Draw({ p1, p2, color })
        } else {
          // split... TODO
          color = 'gray'
          Draw({ p1, p2, color })
        }

        function Draw({ p1, p2, color }) {    
          console.log('draw')      
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
      }
    }
    Plot({ sessions: sessions })
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
      <svg ref={d3ref} style={{ color:'white', height: 460, width: 460 }}></svg>
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
    <p style={{width: '15px', marginLeft: '35px', color: 'rgb(40,40,40)'}}>&mdash;</p>
    <p style={{paddingLeft: '5px', color: 'rgb(190,190,190)'}}>{session.dur}</p>
  </div>)
}

const sessions = [
  {result: 143, stakes: '$1/$3', loc: 'MGM', date: '2024/11/22', daysAgo: -15, dur: '2.5 hrs'},
  {result: 31, stakes: '$1/$3', loc: 'MGM', date: '2024/11/27', daysAgo: -10, dur: '4 hrs'},
  {result: -476, stakes: '$1/$3', loc: 'MGM', date: '2024/11/29', daysAgo: -5, dur: '5.5 hrs'},
  {result: 125, stakes: '$0.25/$0.5', loc: 'PokerBros', date: '2024/12/06', daysAgo: 0, dur: '1.5 hrs'},
]

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
      <div className='poker-journey' style={{display:'flex', justifyContent:'center'}}>
        <PokerSessions sessions={sessions}/>
        <PokerJourney sessions={sessions}/>
      </div>
    </div>
  )
}

export { Portfolio }