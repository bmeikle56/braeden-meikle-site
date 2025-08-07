import { specialColor } from '../styles/colors'
import { useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()

  return (
    <button style={{
      display: 'flex',
      color: specialColor,
      fontSize: 12,
      background: 'black',
      border: 'none',
      padding: 25,
      textShadow: `0 0 6px white, 0 0 6px white`
    }}
    onClick={() => navigate('/projects')}
    >
      &lArr; Projects
    </button>
  )
}

export default BackButton