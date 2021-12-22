import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/svg/logo.svg';
import './styles.scss';

const Header = () => {
    return (
        <header>
            <div className='content_box'>
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
                <input className='search_input' placeholder='Search' />
            </div>
        </header>
    );
};

export default Header;
