import React from 'react';
import './styles.scss';

const Loader = () => {
    return (
        <div className='loader'>
            <div class='lds-ripple'>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
