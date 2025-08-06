import ProjectButton from '../components/ProjectButton'

function Projects() {
  return (
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
  )
}

export default Projects