import { specialColor } from '../styles/colors'
import { useNavigate } from 'react-router-dom'

function ProjectButton({ txt, route }) {
  const navigate = useNavigate()

  return (
    <button style={{
      width: 200,
      height: 80,
      border: `2px solid ${specialColor}`
    }}
    onClick={() => navigate(route)}
    >
      {txt}
    </button>
  )
}

export default ProjectButton