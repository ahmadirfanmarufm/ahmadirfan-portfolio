import React, { useEffect, useState } from 'react';
import './header.css'

function Header() {
    const [toggle, showMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const navbarHeight = document.querySelector('.nav').offsetHeight;
        const sections = document.querySelectorAll('section');
        const sectionsPositions = [];
        
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - navbarHeight;
          sectionsPositions.push(sectionTop);
        });
        
        const currentSectionIndex = sectionsPositions.findIndex(
          (position) => position > currentScrollPos
        );
        const activeIndex = currentSectionIndex === -1 ? sections.length - 1 : currentSectionIndex - 1;
        
        setActiveItem(sections[activeIndex].getAttribute('id'));
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return(
        <header className='header'>
            <nav className='nav container'>
                <a href='#' className='nav__logo'>Ahmad Irfan</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#' className={activeItem === 'home' ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className={activeItem === 'about' ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-user nav__icon'></i> About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' className={activeItem === 'skills' ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-file-alt nav__icon'></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#certificate' className={activeItem === 'certificate' ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-award-alt nav__icon'></i> Certificate
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#project' className={activeItem === 'project' ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-scenery nav__icon'></i> Project 
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' className={activeItem === 'contact' ? 'nav__link active-link' : 'nav__link'}>
                                <i className='uil uil-comment-message nav__icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(!toggle)}></i>
                </div>

                <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
                    <i className='uil uil-align-justify'>
                </i></div>
            </nav>
        </header>
    )
}

export default Header;