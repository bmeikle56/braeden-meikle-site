import { useNavigate } from 'react-router-dom'

function ProjectButton({ txt, route }) {
  const navigate = useNavigate()

  return (
    <button style={{
      width: 140,
      height: 50,
      border: 'none',
      background: 'black',
      boxShadow: '0 0 12px rgb(12,123,0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16
    }}
    onClick={() => navigate(route)}
    >
      <pre style={{
        color: 'rgb(12,123,0)',
        fontSize: 16
      }}>{txt}</pre>
    </button>
  )
}

export default ProjectButton