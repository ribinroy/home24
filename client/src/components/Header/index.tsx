import React from 'react';
import './styles.scss';

const Header = () => {
    return (
        <header>
            <div className='content_box'>
                <div className='logo'>home24</div>
                <input className='search_input' placeholder='Search' />
            </div>
        </header>
    );
};

export default Header;
