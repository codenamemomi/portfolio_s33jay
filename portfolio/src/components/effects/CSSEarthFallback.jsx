import { motion } from 'framer-motion'

export default function CSSEarthFallback() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
      pointerEvents: 'none',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      overflow: 'hidden'
    }}>
      {/* Animated Stars */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}>
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: 'white',
              borderRadius: '50%'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Earth */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #1e40af, #2563eb, #1e3a8a, #0f172a)',
            boxShadow: `
              0 0 80px rgba(37, 99, 235, 0.3),
              inset 0 0 60px rgba(255, 255, 255, 0.1)
            `,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Cloud Patterns */}
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '-50%',
              width: '200%',
              height: '60%',
              background: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                radial-gradient(circle at 60% 70%, rgba(255,255,255,0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 40%, rgba(255,255,255,0.4) 0%, transparent 50%)
              `,
              filter: 'blur(8px)'
            }}
          />
          
          {/* Land Mass Effects */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '20%',
            width: '30%',
            height: '40%',
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '40%',
            filter: 'blur(10px)'
          }} />
          
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '60%',
            width: '25%',
            height: '35%',
            background: 'rgba(245, 158, 11, 0.1)',
            borderRadius: '30%',
            filter: 'blur(8px)'
          }} />
        </motion.div>

        {/* Orbit Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '50%'
          }}
        />
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '50%'
          }}
        />

        {/* Satellites */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-250px',
            left: '-5px',
            width: '10px',
            height: '10px',
            background: '#ef4444',
            borderRadius: '50%',
            boxShadow: '0 0 10px #ef4444'
          }} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-300px',
            left: '-5px',
            width: '8px',
            height: '8px',
            background: '#f59e0b',
            borderRadius: '50%',
            boxShadow: '0 0 8px #f59e0b'
          }} />
        </motion.div>
      </div>

      {/* Distant Galaxies */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(10px)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(15px)'
      }} />
    </div>
  )
}