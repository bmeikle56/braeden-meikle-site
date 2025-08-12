import BackButton from '../components/BackButton'

function PokerDegen() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
    }}>
      <BackButton txt={'Projects'} route={'/projects'}/>
    </div>
  )
}

export default PokerDegen