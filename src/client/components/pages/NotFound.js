import React from 'react'
import { LinkButton } from '../atoms/Buttons/LinkButton'
export const NotFound = () => (
    <div className='notfound_container' >
        <h2>Not Found</h2>
            <LinkButton links='/' text='Return Home' backgroundColor="#e91e63"/>
    </div>
)