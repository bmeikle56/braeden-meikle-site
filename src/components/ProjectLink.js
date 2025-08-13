
function ProjectLink({ txt, link }) {
  return (
    <a href={link} rel='noreferrer' target='_blank' className='func' style={{display: 'flex', justifyContent: 'flex-start', width: '160px'}}>
      <pre style={{
        color: 'rgb(12,123,0)',
        textShadow: `0 0 5px rgb(12,123,0), 0 0 12px rgb(12,123,0), 0 0 15px rgb(12,123,0)`,
        fontSize: 16
      }}>{txt}</pre>
    </a>
  )
}

export default ProjectLink