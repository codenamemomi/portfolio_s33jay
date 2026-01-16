import SecurityInterface from './components/security/SecurityInterface'
import CapabilitiesPreview from './components/effects/CapabilitiesPreview'
import SpaceVoid from './components/effects/SpaceVoid'
import AgentIdentity from './components/sections/AgentIdentity'
import './index.css'

function App() {
  return (
    <div style={{
      width: '100vw',
      background: 'transparent', // Use transparent here to ensure SpaceVoid is visible
      position: 'relative',
      minHeight: '100vh'
    }}>
      {/* Global Cosmic Background - Handles its own background color */}
      <SpaceVoid />

      {/* Foreground Content */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 20 }}>
          <AgentIdentity />
        </div>
        <div style={{ height: '30vh' }} />
        <div style={{ position: 'relative', zIndex: 30 }}>
          <SecurityInterface />
        </div>
        <div style={{ height: '50vh' }} />
        <CapabilitiesPreview />
      </div>
    </div>
  )
}

export default App