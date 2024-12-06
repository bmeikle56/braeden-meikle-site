
import { markRead } from '../api.js'

const articles = [
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
]

function ConsumerByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: 'gray'}}>
    Consumers always want the simplest access to the services and applications they 
    consume — why interact with something if you don’t have to? This seems intuitive, 
    because it is.
    In my life — possibly due to my fixation on iPhones — notifications and widgets 
    are the best avenues for metadata. The mobile phone is highly accessible and you 
    read notifications and tap widgets before you unlock your phone. I see both tools 
    as ways for consumers to engage with applications but “do less”. The cheapest way 
    to get the most information.
    I like to think of this as the limit of tolerated consumer work tends toward zero 
    as time progresses. Naturally, companies develop faster, simpler processes over 
    time due to innovation from competitors and changing markets. If you as a consumer 
    are able to send a text message to your friend from your mind, why would you then 
    want to open your phone, tap a messaging app, type a message, fix typos, and tap 
    send?
    I wonder what the next breakthrough will be?
    </p>
  </div>
  )
}

function AIByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: 'gray'}}>
    As we close out 2024, I’d never expected to be this in awe of AI. Originally 
    annoyed with companies’ inundation of the word ‘AI’. Over the past year, I’ve 
    matured and embraced the SWE lifestyle and through this transformation, AI’s 
    appeal has captured me and I’m more fascinated than ever. Maybe I’ve subconsciously 
    become what I consume, and aggressive marketing has achieved its goal of winning 
    over its toughest customer.

    I took my first AI class in my Fall 2022 semester, mostly unenthused. My thoughts in 
    class then were (and sometimes still are!) more concerned with coding elegance than 
    what was presented in front of me.
    Sometimes I can’t help but wonder, will companies disparage my software repertoire? 
    Do I need to switch careers? How can I catch up to others? How did I get so far 
    behind? Over time, these passive thoughts slowly corrode my confidence.

    I’m ready to go into 2025 with a fresh mindset, a stronger appetite for learning than 
    ever, and we’ll see what happens? 
    </p>
  </div>
  )
}

function QuestionByte() {
  return (
    <div>
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: 'gray'}}>
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
    <p style={{lineHeight: 1.3, whiteSpace:'pre-wrap', textWrap: 'wrap', color: 'gray'}}>
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
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: 'gray'}}>
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
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: 'gray'}}>
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
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: 'gray'}}>
        Force unwrapping an optional is better than null coalescing where the latter is app-breaking. 
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
        A common argument against force unwrapping with<InCcode code={` ! `}/>is that it's riskier (it is) and therefore we can
        prevent crashes in a highly-scaled application where edge-cases are more likely to occur. 
        <BBr/><BBr/><BBr/><BBr/>
        The alternative: the default value is used and the app reaches a corrupted state. I refer to 
        this scenario as a 'soft crash'.
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

function Articles({ unreadList }) {
  
  const contentMaxHeight = '800px'

  function displayContent(index) {
    // toggle chevron animation
    const chevrons = document.getElementsByClassName('chevron')
    chevrons[index].classList.toggle('rotate')

    // drop down content (animated)
    const panels = document.getElementsByClassName('panel')
    panels[index].style.maxHeight = panels[index].style.maxHeight === contentMaxHeight ? '0px' : contentMaxHeight
    panels[index].classList.toggle('drop')

    // hide new badge once article is clicked for the first time
    const newBadges = document.getElementsByClassName('new-badge')
    newBadges[index].classList.toggle('fade')
    newBadges[index].style.opacity = 0
    markRead(index)
  }

  return (
    <div className='byte-div' style={{padding:'50px 0 0 150px', width: '70vw', gap: '10px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {articles.map((article, index) => <div className='byte'>
        <button className='drop-down' onClick={() => displayContent(index)}>
        <p style={{
          color: 'rgb(160,160,160)',
          textShadow: '0px 0px 10px rgb(46, 190, 238), 0px 0px 10px rgb(46, 190, 238), 0px 0px 10px rgb(46, 190, 238)',
          paddingRight: '15px'
          }}>byte</p>
          <p style={{color: 'gray'}}>{article.title}</p>
          <div style={{marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center'}}>
            <p className='new-badge' style={{opacity: unreadList[index] === 0 ? 0 : 1, color: 'rgb(0,255,0)', fontSize:'10px'}}>New</p>
            <span className='chevron' style={{margin:'-2px 0 0 0'}}>&rsaquo;</span>
          </div>
        </button>
        <div class='panel'>
          {<article.content/>}
        </div>
      </div>)}
    </div>
  )
}

export { Articles }