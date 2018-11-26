import React from 'react'



export const NavContainer = ({ ...props }) => {
        return (
        <React.Fragment>

      <div className='main__wrapper__container' >

        <div class="wrapper">
            <div className='main__header' >
            <h3 className='main_header__container' >{'Schedule & Rates'}</h3>
            </div>
        <div class="card"
        onClick={() => props.history.push('/schedule')}
        
        ><img 
        src={require("../../../assets/images/HTMS/POP_6864.jpg")} alt='...'
        />
          <div class="info">
            <h3 className='hello' >{'Schedule & Rates'}</h3>
            
          </div>
        </div>
        </div>

        <div class="wrapper">
        <div className='main__header' >
            <h3 className='main_header__container' >{'Liveaboard'}</h3>
        </div>
        <div class="card"
        onClick={() => props.history.push('/trips/:Koh-Change-Liveaboard')}
        ><img src={require("../../../assets/images/boat2/1.JPG")} alt='...' />
          <div class="info">
            <h3 className='hello' >{'Liveaboard'}</h3>
        
          </div>
        </div>
        </div>

        <div class="wrapper">
        <div className='main__header' >
            <h3 className='main_header__container' >{'Day Trip'}</h3>
        </div>
        <div class="card"
        onClick={() => props.history.push('/trips/:day-trips')}
        ><img src={require("../../../assets/images/rock/POP_8268.JPG")} alt='...' />
          <div class="info">
            <h3 className='hello' >{'Day Trip'}</h3>
            
          </div>
        </div>
        </div>
        </div>
        </React.Fragment>
      )
}