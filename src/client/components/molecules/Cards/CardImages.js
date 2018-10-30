import React from 'react'


export const CardImages = ({ img, text, children }) => (
    <div style={{ width: '400px' }}>
    <div className="hovereffect">
        <img className="figure__img" src={`${img}`} alt="..." />
        <div className="overlay">
          <h2>{text}</h2>
            {children}
        </div>
      </div>
    </div>
)