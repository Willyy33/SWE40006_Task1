import Calculator from './components/Calculator'
import { useEffect } from 'react'

function App(): React.JSX.Element {
  useEffect(() => {
  // Listen for update available
  window.api?.onUpdateAvailable(() => {
    alert('A new version is available! The app will update on restart.')
  })

  window.api?.onUpdateDownloaded(() => {
    alert('Update downloaded. Click OK to restart and install.')
    window.api?.installUpdate()
  })
}, [])

  return (
    <>
      <div>
         <Calculator></Calculator>
      </div>
    </>
  )
}

export default App

