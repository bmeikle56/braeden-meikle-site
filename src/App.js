import './styles.css';

function Body() {
  return (
    <body>
      <Title/>
      <EditTracker />
      <Canvas/>
      <VDivider/>
      <Footer/>
    </body>
  )
}

function Title() {
    return <h1 className='title'>Braeden Meikle</h1>
}

const lastEditDate = 'Tuesday, November 26'

function EditTracker() {
  return (
    <div className='edit-tracker'>
      <p className='last-seen'>Last seen:</p>
      <p className='date'>{lastEditDate}</p>
    </div>
  )
}

function Canvas() {
  return <div className='canvas'></div>
}

function VDivider() {
  return <div className='vdiv'></div>
}

function Footer() {
  return (
    <div className='footer'>
      <p className='footer-txt'>Created November 26, 2024</p>
      <p className='hdiv'>|</p>
      <span className='footer-txt' id='phone'></span>
      <p className='hdiv'>|</p>
      <span className='footer-txt' id='email'></span>
      <p className='hdiv'>|</p>
      <span className='footer-txt' id='linkedin'></span>
      <p className='hdiv'>|</p>
      <span className='footer-txt' id='github'></span>
    </div>
  )
}

function App() {
  return <Body/>
}

// Royal Flushes: 0
// Holes in one: 


// Poker tracker with red/green color coding
// D3 for the graph with animations as well maybe

export default App;