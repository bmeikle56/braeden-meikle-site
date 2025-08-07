import { specialColor } from '../styles/colors'
import { useNavigate } from 'react-router-dom'

function ProjectButton({ txt, route }) {
  const navigate = useNavigate()

  return (
    <button style={{
      width: 180,
      height: 80,
      border: 'none',
      background: 'black',
      boxShadow: `0 0 12px ${specialColor}`,
      borderRadius: 16
    }}
    onClick={() => navigate(route)}
    >
      <pre style={{
        color: specialColor,
        fontSize: 16
      }}>{txt}</pre>
    </button>
  )
}

export default ProjectButton