
import { specialColor } from '../styles/colors'

function VDivider() { 
  const vdivStyle = {
    background: `linear-gradient(to right, black, ${specialColor}, black)`,
    height: '1.4px'
  }

  return (
    <div style={{padding: '30px 0 30px 0'}}>
      <div style={vdivStyle}></div> 
    </div>
  )
}

export { VDivider }