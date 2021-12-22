import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/svg/logo.svg';
import './styles.scss';

const Header = () => {
    return (
        <header
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-duration={300}>
            <div className='content_box'>
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
            </div>
        </header>
    );
};

export default Header;
