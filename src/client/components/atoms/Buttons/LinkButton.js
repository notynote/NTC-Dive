import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


export const LinkButton = ({ text, backgroundColor, links }) => (
    <Link className='hover_link' to={`${links}`}
    style={{ backgroundColor: `${backgroundColor}` }}>
          <span>{text}</span>
    </Link>
)

LinkButton.propTypes = {
    text: PropTypes.object.isRequired,
    links: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
}