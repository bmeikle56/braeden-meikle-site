const defContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
  anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
  laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
`

const thoughts = [
  {
    title: 'Swift is the best programming language',
    content: defContent
  },
  {
    title: 'Crashing the program is better than defaults',
    content: defContent
  },
  {
    title: 'A modern programming language design',
    content: defContent
  }
]

// function SwiftArticle() {
//   return (
//     <div>
//       <p>Force unwrapping an optional is better than null coalescing where the later is app-breaking.
//         If 
//       </p>
//     </div>
//   )
// }

function Thoughts() {
  const contentMaxHeight = '500px'

  function displayContent(index) {
    const panels = document.getElementsByClassName('panel')
    const chevrons = document.getElementsByClassName('chevron')
    chevrons[index].classList.toggle('rotate')
    panels[index].style.maxHeight = panels[index].style.maxHeight === contentMaxHeight ? '0px' : contentMaxHeight
    panels[index].classList.toggle('drop')
  }

  return (
    <div style={{gap: '10px', paddingTop: '80px', display: 'grid', justifyContent: 'center'}}>
      {thoughts.map((thought, index) => <div>
        <button className='drop-down' onClick={() => displayContent(index)}>
          <p>{thought.title}</p>
          <span className='chevron' style={{marginLeft:'auto'}}>&rsaquo;</span>
        </button>
        <div class='panel'>
          <p style={{color: 'white'}}>{thought.content}</p>
          {/* <p style={{color: 'white'}}>{thought.content}</p> */}
          {/* <SwiftArticle/> */}
        </div>
      </div>)}
    </div>
  )
}

export { Thoughts }