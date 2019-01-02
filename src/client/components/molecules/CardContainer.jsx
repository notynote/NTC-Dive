import React from 'react';


export const CardContainer = ({ title, onClick, img  }) => (
<div class="wrapper">
    <div className='main__header'>
        <h3 className='main_header__container'>{title}</h3>
    </div>
    <div class="card" onClick={onClick}

        ><img src={img} alt='...' />
        <div class="info">
            <h3 className='hello'>{title}</h3>
        </div>
    </div>
</div>
)