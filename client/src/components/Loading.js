
function Loading() {
  return (
    <body style={{height:'100vh', display:'flex', justifyContent:'center', placeItems:'center'}}>
      <div style={{
        display: 'flex',
        justifyContent:'center',
      }}>
        <pre id='loading' className='meta-anim'></pre>
      </div>
    </body>
  )
}

setInterval(() => {
  document.getElementById('loading').textContent = [...Array(8)].map(_ => Math.round(Math.random())).join('')
}, 100)

export { Loading }