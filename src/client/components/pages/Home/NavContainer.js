import React from 'react'



export const NavContainer = () => (
    <React.Fragment>

<div className='main__wrapper__container' >

    <div class="wrapper">
        <div className='main__header' >
        <h3 className='main_header__container' >{'Schedule & Rates'}</h3>
        </div>
    <div class="card"><img src={require("../../../assets/images/IMG_0800.JPG")} alt='...' />
      <div class="info">
        <h3 className='hello' >{'Schedule & Rates'}</h3>
        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      </div>
    </div>
    </div>

    <div class="wrapper">
    <div className='main__header' >
        <h3 className='main_header__container' >{'Vessel'}</h3>
    </div>
    <div class="card"><img src={require("../../../assets/images/boats__image__1.JPG")} alt='...' />
      <div class="info">
        <h3 className='hello' >{'Vessel'}</h3>
        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      </div>
    </div>
    </div>

    <div class="wrapper">
    <div className='main__header' >
        <h3 className='main_header__container' >{'Destinations'}</h3>
    </div>
    <div class="card"><img src={require("../../../assets/images/koh-chang.jpeg")} alt='...' />
      <div class="info">
        <h3 className='hello' >{'Destinations'}</h3>
        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      </div>
    </div>
    </div>
    </div>
    </React.Fragment>
)