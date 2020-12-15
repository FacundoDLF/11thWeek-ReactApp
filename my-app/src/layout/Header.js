import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1> Customers CaldAR</h1>
        </header>
    )
}

const headerStyle = {
    background: 'rgb(8, 0, 0)',
    color: 'rgb(254, 254, 254)',
    textAlign: 'center',
    padding: '10px',
}

export default Header;