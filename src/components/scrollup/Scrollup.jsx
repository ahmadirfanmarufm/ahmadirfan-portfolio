import React, { useState } from 'react';
import './scrollup.css';

function Scrollup() {
    const [showScroll, setShowScroll] = useState(false);
    document.addEventListener('scroll', () => {
        if(window.scrollY >= 560) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    });

    return(
        <a href='#' className={showScroll === true ? 'scrollup show-scroll' : 'scrollup'}>
            <i className='uil uil-arrow-up scrollup__icon'></i>
        </a>
    );
}

export default Scrollup;