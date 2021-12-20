import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
    return (
        <header>
            <div className='content_box'>
                <Link to='/'>
                    <div className='logo'>home24</div>
                </Link>
                <input className='search_input' placeholder='Search' />
            </div>
        </header>
    );
};

export default Header;
