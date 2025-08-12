import ProjectButton from '../components/ProjectButton'
import BackButton from '../components/BackButton'

function Projects() {
  return (
    <div>
      <BackButton txt={'Home'} route={'/'}/>
        <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
      }}
      >
        
        <ProjectButton txt={'PokerDegen'} route={'/project/poker-degen'}/>
        <ProjectButton txt={'Berzerk'} route={'/project/berzerk-agile-dev'}/>
      </div>
    </div>
    
  )
}

export default Projects