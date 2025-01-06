
import { txtCol } from '../styles/colors'

const bytes = [
  {
    title: 'Swift is the best',
    content: SwiftByte
  },
  {
    title: 'Force unwrapping is underrated',
    content: NilByte
  },
  {
    title: `Fun simplification of programming`,
    content: ProgrammingByte
  },
  {
    title: `My philosophy`,
    content: PhilosophyByte
  },
  {
    title: `The right way to ask questions`,
    content: QuestionByte
  },
  {
    title: `Artificial Intelligence come up`,
    content: AIByte
  },
  {
    title: `Consumer tendency`,
    content: ConsumerByte
  },
  {
    title: `Agile reimagined`,
    content: AgileByte
  },
  {
    title: `Software lifecycle`,
    content: ChangeByte
  },
  {
    title: `Testing the right way`,
    content: TestByte
  },
]

function TestByte() {
  return (
    <div>
      <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
      In the test cases, no servers should ever be hit - services should always 
      be mocked. The simple fragility of a server is enough defense: if a server 
      is down, the code fails, but that doesn’t make sense. The tests become reduced 
      to micro shrodinger’s cats. I propose that there be an environment where test 
      servers are hit for about 2 weeks before code hits production. This way, we pass 
      the initial tests in the codebase where services were mocked, and now we are 
      actually hitting test-designated servers. This most closely simulates 
      production - the only difference being the exact set of computers sending responses. 
      </p>
    </div>
  )
}

function ChangeByte() {
  return (
    <div>
      <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
        The phrase 'it's too go to be true' is commonly used to dissuade consumers
        from falling for a scam. In software, the adage has the opposite meaning of 
        encouragement and excitement: if something's 'too good to be true', a better
        design's been conceived and improvements can be made.
        <BBr/><BBr/><BBr/><BBr/>
        Engineers often build code on top of legacy systems and adopt current,
        ubiquitous industry practices and models in hopes of developing a system for 
        their company. But the thought process quickly becomes, how to adopt a structure 
        to solve a problem? Instead, the correct approach is how to solve a problem? 
        A matured thought process is likely to conclude that the best solution is 
        something askew to industry standards.
        <BBr/><BBr/><BBr/><BBr/>
        To defend my postulate, industry standards are always evolving. If nobody 
        poses the question of change, nothing changes. The industry is filled with 
        hungry, bright minds who always find ways to improve existing technologies and 
        practices. Yes, not all changes turn out to be positive.
        <BBr/><BBr/><BBr/><BBr/>
        Change is a tool for people seeking to improve their lives. Change and 
        complacency are orthogonal. Nobody is fully complacent with everything in 
        their lives, so naturally, change will never cease to exist.
      </p>
    </div>
  )
}

function AgileByte() {
  return (
    <div>
      <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
        <BLi txt={'Remove standups'}/>
        A brief meeting where a team meets and everyone says they are doing what
        they're doing. How does that help anyone? It doesn't and it's disruptive - 
        causing engineers to pause work to attend the meeting. Standups are a gimmick 
        in industry that exists solely because the status quo persists until someone 
        challenges it. A better replacement is more effective communication, and meetings 
        only when necessary. If you have a question or blocker, just go message or meeting
        with the person you need to talk to. If that happens to be your manager or
        teammate, then why does everyone else need to be on the call? Using standups
        to keep the team aligned? Then drop asynchronous updates in a channel and expect
        your team to read them!
        <BLi txt={'Eliminate sprints'}/>
        How does a sprint benefit the software development process? Each task is of 
        different length, some are easy, others hard (we can categorize a task with a 
        'point' value). It's hard for me to find an argument for sprints that makes sense.
        Software should not be thought of as a sprint, because it's a marathon. Sprints
        are about delivering half-baked software at a pace that suits the business
        and product owners, but not the customers. 
        <BLi txt={'Ticket rework'}/>
        I think the ticket system needs a rework. Why should tickets be classified by size
        as epics, features, and user stories. Forcing certain tasks of different or 
        unknown difficulties/lengths into predefined constraints is wrong. What if, like
        the composition pattern, each ticket is a 'task', and each 'task' has 0 or more 
        children. This would more effectively align engineers with upper management goals.
        Another point of note - task points are subjective and meaningless, let's remove those.
        <BBr/><BBr/><BBr/><BBr/>
        The current agile concepts - sprints, standups, and construction of tasks - are
        both archaic and only practice in concept. The software industry moves fast, so why 
        was Agile left behind? Let's change that.
        <BBr/><BBr/><BBr/><BBr/>
        The core pillars of Agile are still important and always will be. Yes, individuals
        are more important than processes. Yes, customers collaboration is important. Yes,
        working software is more important than documents and diagrams. And yes, a dynamic
        plan expecting and responding to change is necessary. Why can't we follow these
        and strip away the extra scaffolding?
      </p>
    </div>
  )
}

function ConsumerByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
    Consumers always want the simplest access to the services and applications they 
    consume — why interact with something if you don’t have to? This seems intuitive, 
    because it is.
    <BBr/><BBr/><BBr/><BBr/>
    In my life — possibly due to my fixation on iPhones — notifications and widgets 
    are the best avenues for metadata. The mobile phone is the most accessible and 
    information dense tool available. The average use reads notifications and taps
    widgets before unlock their phone. I see both tools - notifications and widgets - 
    as ways for consumers to engage with applications but “do less”. The cheapest way 
    to get the most information.
    <BBr/><BBr/><BBr/><BBr/>
    I like to think of this as the limit of tolerated consumer work tends toward zero 
    as time progresses. Naturally, companies develop faster, simpler processes over 
    time due to innovation from competitors and changing markets. If you as a consumer 
    are able to send a text message to your friend from your mind, why would you then 
    want to open your phone, tap a messaging app, type a message, fix typos, and tap 
    send?
    <BBr/><BBr/><BBr/><BBr/>
    I wonder what the next breakthrough will be? How can we improve notifications and
    widgets, and how can we reduce customer friction even more?
    </p>
  </div>
  )
}

function AIByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
    As 2024 comes to a close, I’d never expected to be this in awe of AI. Artificial
    Intelligence has enjoyed exponential popularity as the technology continues to 
    get stronger. OpenAI's introduction of ChatGPT had a profound impact on every
    industry. It is evident in companies’ inundation of the word ‘AI’ in advertisements.
    <BBr/><BBr/><BBr/><BBr/>
    Consumers tend to develop a distaste for new products, terms, and culture they perceive
    to be forced upon their lives. That has generally been the case for me over the
    past two years since. In 2024, I began my career as a software engineer, slowly
    beginning to to embrace bits and pieces of the SWE lifestyle and immerse myself
    within the vast online community. Through this transformation, AI’s appeal has 
    captured me, and I’m more fascinated than ever. Maybe I’ve subconsciously 
    become what I consume, and aggressive marketing has achieved its goal of winning 
    over its toughest customer.
    <BBr/><BBr/><BBr/><BBr/>
    We are embarking on a period of uncertainty, where companies and recruiters 
    aren't sure what the future holds with reservations about the strength of AI. 
    To me it feels like an inescapable Schrödinger's Cat society where AI is both more
    powerful and less powerful than perceived. What I mean is that it's easy to find
    cases where AI overperforms and underperforms.
    <BBr/><BBr/><BBr/><BBr/>
    This uncertainty is palpable, especially as a new-grad junior engineer.
    Sometimes I can’t help but wonder, will companies disparage my software repertoire? 
    Do I need to switch careers? How can I catch up to others? How did I get so far 
    behind? Over time, these passive thoughts slowly corrode my confidence.
    <BBr/><BBr/><BBr/><BBr/>
    I’m ready to go into 2025 with a fresh mindset, a stronger appetite for learning than 
    ever, and we’ll see what happens?
    </p>
  </div>
  )
}

function QuestionByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
      People tend to categorize questions into binary qualities of either 'good' or 'bad'. 
      The secret to more strongly reinforcing knowledge is asking 'bad' questions that strike
      at the core of your learning and knowledge. Challenging a widely-accepted concept or
      practice online or to a peer sometimes leads to a seemingly obvious conclusion that
      the current idea isn't best. 
    </p>
  </div>
  )
}

function PhilosophyByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: txtCol}}>
    <BLi txt={`Easy To Change (ETC)`}/>
      A core concept of software is software
      rot (aka technical debt) tends toward infinity. Fundamentally, if a program 
      or application is hard to change, it's worth trends toward zero over time.
      <BLi txt={`Keep It Simple, Stupid (KISS)`}/>
      Abstraction is a blessing and a curse. Early programmers bestoyed a responsibility
      on us when they described these patterns and tools. Use carefully, as abstraction
      can greatly increase development time when done well but can decrease development
      time when done poorly. Finding the right balance between abstraction and 
      localization requires a special feel. Sometimes, KISS may mean violating Don't 
      Repeat Yourself (DRY).
      <BLi txt={`Ya Aren't Gonna Need It (YAGNI)`}/>
      Until you actually need something, don't implement it. This is essentially a 
      prioritization of work concern: there's always a feature, performance optimization,
      software rot, or equivalent piece of work more important than optimizing for a
      feature you may never use.
    </p>
  </div>
  )
}

function ProgrammingByte() {
  return (
    <div>
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: txtCol}}>
        <div style={{display:'flex', justifyContent:'center'}}><InCcode code={`0010`}/></div>
        <BBr/><BBr/>
        {`\n`}Programming begins where electricity is categorized to two buckets, 
        on/off, semantically equivalent to binary.
        <BBr/><BBr/><BBr/><div style={{display:'flex', justifyContent:'center'}}>&dArr;</div><BBr/><BBr/><BBr/>
        <div style={{display:'flex', justifyContent:'center'}}><InCcode code={`0x3CCF19`}/></div>
        <BBr/><BBr/>
        Hexadecimal is just more info with less ink. If we expand the set of elements a bit can represent from {`{0, 1}`} to {`{0, 1, .. , 9, A, B, .. F}`},
        we can make 1 element represents 4 elements (bits). 
        <BBr/><BBr/><BBr/><div style={{display:'flex', justifyContent:'center'}}>&dArr;</div><BBr/><BBr/><BBr/>
        <div style={{display:'flex', justifyContent:'center'}}><InCcode code={`void*malloc(size_t size)`}/></div>
        <BBr/><BBr/>
        Using the same logic, Strings are more with less! If we say every 2 bytes (2 * 4 bits) is a character, boom
        now we have strings
        <BBr/><BBr/><BBr/><div style={{display:'flex', justifyContent:'center'}}>&dArr;</div><BBr/><BBr/><BBr/>
        <div style={{display:'flex', justifyContent:'center'}}><InCcode code={`if(!ptr) {\n   printf("no memory");\n   exit(0);\n}`}/></div>
        <BBr/><BBr/>
        Now we can add some fancy white-space formatting and tell everyone to use this exact protocol when coding. Now we
        make a compiler and we're done!
        <BBr/><BBr/><BBr/><BBr/><BBr/><BBr/>
        At its most raw state, programming is binary and a bunch of well-defined protocols.
      </p>
    </div>
  )
}

/* Big break component */
function BBr() { return <div style={{height: '4px'}}><br></br></div> }

/* Inline colored code component */
function InCcode({ code }) {
  return <pre style={{margin:'auto', display:'inline-block', color: 'rgb(255,0,123)', fontSize:'14px'}}>{code}</pre>
}

function BLi({ txt }) { return <p style={{lineHeight:'0.5', fontWeight:'bold'}}>&rArr; {txt}</p> }

function SwiftByte() {
  return (
    <div>
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: txtCol}}>
        Features I like:
        <BBr/>
        <BLi txt={'default functions'}/>
        <BBr/>
        <InCcode code={`protocol `}/>+<InCcode code={` extension `}/>
        solves the multi-inheritance problem
        <BBr/>
        <BLi txt={'special early exit syntax'}/>
        <InCcode code={`guard let key = req?.key else { return } `}/>
        is just infinitely more intuitive/readable than if statements
        <BBr/>
        <BLi txt={'elegant optional handling'}/>
        <InCcode code={`prof.tas?.map { $0.acc?.desposit(5) } `}/>
        just look how elegant that is
        <BBr/>
        <BLi txt={'multi-paradigm nature'}/>
        <BBr/>
        Pros of OOP + functional programming with no cons
        <BBr/>
        <BLi txt={'no boilerplate'}/>
        Seldom use <InCcode code={` import `}/>+<InCcode code={` ; `}/> and evolving syntactic sugar
        <BLi txt={'access modifiers'}/>
        Explicit access modifiers are better than arbitrary string formatting (plus a variety)
        <BLi txt={'typing'}/>
        Peak<InCcode code={` Swift `}/>feels like dynamic vars checked at compile
        <BLi txt={'good async syntax'}/>
        Succinct APIs + easy bridge to sync: <InCcode code={` Task { ... } `}/>
      </p>
    </div>
  )
}

function NilByte() {
  return (
    <div>
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: txtCol}}>
        Force unwrapping an optional (<InCcode code={` ! `}/>) is better than 
        null coalescing (<InCcode code={` ?? `}/>) where the latter is app-breaking. 
        Some shallow online digging may lead you to&nbsp;
        <a href='https://forums.swift.org/t/moving-toward-deprecating-force-unwrap-from-swift/43455' 
        target='_blank' className='article' rel='noreferrer'>
          articles suggesting the deprecation of the operator
        </a>
        .
        <BBr/><BBr/><BBr/><BBr/>
        It becomes almost subconscious to use null coalescing operators in languages with optionals 
        bridging an optional to a non-optional. The default values satisfy the compiler but create an 
        explicity allowed corrupted state fallback. A corrupted state is where the user experience 
        may be completely compromised. 
        <BBr/><BBr/><BBr/><BBr/>
        A common argument against force unwrapping with<InCcode code={` ! `}/>is that it's riskier (it is) 
        and therefore we can prevent crashes in a highly-scaled application where edge-cases are more 
        likely to occur. The alternative: the default value is used and the app reaches a corrupted state. 
        I refer to this scenario as a 'soft crash'.
        <BBr/><BBr/><BBr/><BBr/>
        While violent, a forced crash as opposed to a soft crash is mutually better for the application
        and user. Really, it's a safer of two evils choice. In a corrupted application state, users 
        may be able to access information they should not have access to or harm the system.
        <BBr/><BBr/><BBr/><BBr/>
        Crashing is easier to catch in development, and if it reaches production, easier to patch
        as long as the application is deployed with a crash-logging service (i.e. Firebase).
      </p>
    </div>
  )
}

function Bytes({ unreadList }) {
  
  const contentMaxHeight = '1000px'

  function displayContent(index) {
    // toggle chevron animation
    const chevrons = document.getElementsByClassName('chevron')
    chevrons[index].classList.toggle('rotate')

    // drop down content (animated)
    const panels = document.getElementsByClassName('panel')
    panels[index].style.maxHeight = panels[index].style.maxHeight === contentMaxHeight ? '0px' : contentMaxHeight
    panels[index].classList.toggle('drop')

    // hide new badge once byte is clicked for the first time
    const newBadges = document.getElementsByClassName('new-badge')
    newBadges[index].classList.toggle('fade')
    newBadges[index].style.opacity = 0
    // markRead(index) // when the backend becomes responsive, we can turn this back on
  }

  return (
    <div className='byte-div' style={{padding:'50px 0 0 150px', width: '70vw', gap: '10px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {bytes.map((byte, index) => <div className='byte'>
        <button className='drop-down' onClick={() => displayContent(index)}>
        <p style={{
          color: 'rgb(160,160,160)',
          textShadow: '0px 0px 10px rgb(46, 190, 238), 0px 0px 10px rgb(46, 190, 238), 0px 0px 10px rgb(46, 190, 238)',
          paddingRight: '15px'
          }}>byte</p>
          <p style={{color: txtCol}}>{byte.title}</p>
          <div style={{marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center'}}>
            <p className='new-badge' style={{opacity: unreadList[index] === 0 ? 0 : 1, color: 'rgb(0,255,0)', fontSize:'10px'}}>New</p>
            <span className='chevron' style={{margin:'-2px 0 0 0'}}>&rsaquo;</span>
          </div>
        </button>
        <div class='panel'>
          {<byte.content/>}
        </div>
      </div>)}
    </div>
  )
}

export { Bytes }