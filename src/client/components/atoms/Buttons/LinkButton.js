import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export const LinkButton = ({ text, backgroundColor, links }) => (
    <Link className='link__btn' to={`${links}`}
    style={{ backgroundColor: `${backgroundColor}` }}>
          {text}
    </Link>
)

LinkButton.propTypes = {
    text: PropTypes.string.isRequired,
    links: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
}