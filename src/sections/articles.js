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

function SwiftArticle() {
  return (
    <div>
      <p style={{color: 'white'}}></p>
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
        <br></br><br></br>
        A common argument against force unwrapping is that it's riskier (it is) and therefore we can
        prevent crashes in a highly-scaled application where edge-cases are more likely to occur. 
        <br></br><br></br>
        If something went wrong and the default value is used, an element may be out of view. I refer 
        to this scenario as a 'soft crash'.
        <br></br><br></br>
        In these cases, isn't it more effective to crash the program? While violent, a forced crash 
        avoiding a corrupted application state is better for both the application and user. Really, it's
        a lesser of two evils choice. In a corrupted application state, users may be able to access 
        information they should not have access to or reach a more corrupted state.
        <br></br><br></br>
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