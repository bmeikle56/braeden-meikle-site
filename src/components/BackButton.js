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
    }}
    onClick={() => navigate('/projects')}
    >
      &lArr; Projects
    </button>
  )
}

export default BackButton