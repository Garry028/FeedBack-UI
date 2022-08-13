import React from 'react';
import PropTypes from 'prop-types';


const headerStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

const Header = () => {
    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>Feedback UI</h2>
            </div>
        </header>

    )
}


Header.protoTypes = {
    text: PropTypes.string
}

export default Header