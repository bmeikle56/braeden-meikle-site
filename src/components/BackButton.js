import { useNavigate } from 'react-router-dom'

function BackButton({ txt, route }) {
  const navigate = useNavigate()

  return (
    <button style={{
      display: 'flex',
      color: 'rgb(12,123,0)',
      fontSize: 12,
      background: 'black',
      border: 'none',
      padding: 25,
      textShadow: `0 0 6px rgb(12,123,0), 0 0 6px rgb(12,123,0), 0 0 6px rgb(12,123,0)`
    }}
    onClick={() => navigate(route)}
    >
      &lArr; {txt}
    </button>
  )
}

export default BackButton