import React from 'react'


export const CardImages = ({ img, text, children }) => (
    <div className='con_hover-effect'>
    <div className="hovereffect">
        <img className="img-responsive" src={`${img}`} alt="..." />
        <div className="overlay">
          <h2>{text}</h2>
            {children}
        </div>
      </div>
    </div>
)