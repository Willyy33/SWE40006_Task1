import Calculator from './components/Calculator'
import { useEffect } from 'react'

function App(): React.JSX.Element {
  useEffect(() => {
  window.api?.onUpdateAvailable(() => {
    alert('A new version is available! Proceed to update?')
  })

  window.api?.onUpdateDownloaded(() => {
    const proceed = confirm('Update downloaded. Restart now to install?')
    if (proceed) {
      window.api?.installUpdate()
    }
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

