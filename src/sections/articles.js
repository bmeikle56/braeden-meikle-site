const articles = [
  {
    title: 'Swift is the best programming language',
    content: SwiftArticle
  },
  {
    title: 'Crashing the program is better than defaults',
    content: NilArticle
  }
]

/* Colored code component */ 
function Ccode({ code, color }) { return <p style={{fontFamily: 'andale mono, monospace', color:color}}>{code}</p> }

/* Big break component */
function BBr() { return <div><br></br></div> }

function SwiftArticle() {
  return (
    <div>
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: 'white'}}>
        Features I like:
        <BBr/>
        1) default function via protocol declaration + extension
        Let's suppose several unrelated classes need access to a function. In Swift, we can 
        declare a protocol with one function, extend the protocol and implement the function
        (following Interface Segregation Principle), and have those classes implement the 
        protocol, gaining access to the function. While Swift allows functions to be placed in
        the file outside of a struct/class/protocol, the benefit of this approach is that the 
        function is only available to implementing classes (only the ones that need it) and it's
        explicitly clear where this function is coming from.
        <BBr/>
        2) special early exit syntax
        <div style={{display: 'flex', gap: '6px'}}>
          <Ccode code={'guard'} color={'rgb(255,0,123)'}/>
          <Ccode code={'let'} color={'rgb(255,0,123)'}/>
          <Ccode code={'firstName'} color={'rgb(255,255,255)'}/>
          <Ccode code={'='} color={'rgb(255,255,255)'}/>
          <div style={{display: 'flex'}}>
            <Ccode code={'fetchOnlineUsers'} color={'rgb(0,240,0)'}/>
            <Ccode code={'()?.'} color={'rgb(255,255,255)'}/>
            <Ccode code={'name'} color={'rgb(0,240,0)'}/>
          </div>
          <Ccode code={'else'} color={'rgb(255,0,123)'}/>
          <Ccode code={'{'} color={'rgb(255,255,255)'}/>
          <Ccode code={'return'} color={'rgb(255,0,123)'}/>
          <Ccode code={'}'} color={'rgb(255,255,255)'}/>
        </div>
        3) elegant optional handling
        <BBr/>
        4) multi-paradigm nature
        <BBr/>
        Although many languages are adopting multi-paradigm forms as they evolve, Swift takes
      </p>
    </div>
  )
}

function NilArticle() {
  return (
    <div>
      <p style={{lineHeight: 1.3, textWrap: 'wrap', color: 'white'}}>
        Force unwrapping an optional is better than null coalescing where the latter is app-breaking. 
        Some shallow online digging may lead you to&nbsp;
        <a href='https://forums.swift.org/t/moving-toward-deprecating-force-unwrap-from-swift/43455' 
        target='_blank' className='article' rel='noreferrer'>
          articles suggesting the deprecation of the operator
        </a>
        . It becomes almost subconscious to utilize null coalescing operators in languages with optionals
        (Swift, Kotlin, Dart, C#, Rust, etc) where you need to bridge an optional to a non-optional field.
        While satisfying the compiler, if these default values were used in production, the user experience
        may be completely compromised. 
        <BBr/>
        A common argument against force unwrapping is that it's riskier (it is) and therefore we can
        prevent crashes in a highly-scaled application where edge-cases are more likely to occur. 
        <BBr/>
        If something went wrong and the default value is used, an element may be out of view. I refer 
        to this scenario as a 'soft crash'.
        <BBr/>
        In these cases, isn't it more effective to crash the program? While violent, a forced crash 
        avoiding a corrupted application state is better for both the application and user. Really, it's
        a lesser of two evils choice. In a corrupted application state, users may be able to access 
        information they should not have access to or reach a more corrupted state.
        <BBr/>
        Crashing is easier to catch in development, and if it reaches production, easier to patch
        as long as the application is deployed with a crash-logging service (i.e. Firebase).
      </p>
    </div>
  )
}

function Articles() {
  const contentMaxHeight = '500px'

  function displayContent(index) {
    // toggle chevron animation
    const chevrons = document.getElementsByClassName('chevron')
    chevrons[index].classList.toggle('rotate')

    // drop down content (animated)
    const panels = document.getElementsByClassName('panel')
    panels[index].style.maxHeight = panels[index].style.maxHeight === contentMaxHeight ? '0px' : contentMaxHeight
    panels[index].classList.toggle('drop')
  }

  return (
    <div style={{gap: '10px', paddingTop: '80px', display: 'grid', justifyContent: 'center'}}>
      {articles.map((article, index) => <div>
        <button className='drop-down' onClick={() => displayContent(index)}>
          <p>{article.title}</p>
          <span className='chevron' style={{marginLeft:'auto'}}>&rsaquo;</span>
        </button>
        <div class='panel'>
          {<article.content/>}
        </div>
      </div>)}
    </div>
  )
}

export { Articles }