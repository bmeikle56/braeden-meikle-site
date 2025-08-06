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
      <ProjectButton txt={'PokerDegen'} route={'/projects/poker-degen'}/>
      <ProjectButton txt={'Berzerk'} route={'/projects/berzerk-agile-dev'}/>
    </div>
  )
}

export default Projects