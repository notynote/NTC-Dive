import React from 'react'



export const NavContainer = ({ ...props }) => {

  console.log(props.history)
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
        src={require("../../../assets/images/IMG_0800.JPG")} alt='...'
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
        ><img src={require("../../../assets/images/boats__image__1.JPG")} alt='...' />
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
        ><img src={require("../../../assets/images/koh-chang.jpeg")} alt='...' />
          <div class="info">
            <h3 className='hello' >{'Day Trip'}</h3>
            
          </div>
        </div>
        </div>
        </div>
        </React.Fragment>
      )
}