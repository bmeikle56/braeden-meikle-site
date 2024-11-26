import './styles.css';

function Background() {
  return (
    <body>
      <Title/>
      <Canvas/>
    </body>
  )
}

function Title() {
  return (
    <h1 className='title'>Braeden Meikle</h1>
  )
}

function Canvas() {
  return (
    <div className='canvas'>

    </div>
  )
}

function App() {
  return (
    <Background/>
  )
}

// Royal Flushes: 0
// Holes in one: 


// Poker tracker with red/green color coding
// D3 for the graph with animations as well maybe

export default App;