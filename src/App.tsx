import { useState } from 'react'
import './App.css'

function App() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="apology-container">
      <div className="heart-container">
        <div className="heart"></div>
      </div>
      
      <h1 className="title">Hey Sindhu, I'm Sorry 💝</h1>
      
      <div className="message-box">
        <p className="message">
          Dear Sindhu,
          <br />
          I know I might have made things a bit awkward,
          <br />
          but I really enjoy spending time with you.
        </p>
        
        <button 
          className="cute-button"
          onClick={() => setShowMessage(!showMessage)}
        >
          {showMessage ? 'Hide Message' : 'Click for a Special Message'}
        </button>

        {showMessage && (
          <div className="special-message">
            <p>Sindhu, are you a magician? Because whenever I look at you, everyone else disappears ✨</p>
          </div>
        )}
      </div>

      <div className="floating-hearts">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="floating-heart" style={{ animationDelay: `${i * 0.5}s` }}>❤️</div>
        ))}
      </div>
    </div>
  )
}

export default App
