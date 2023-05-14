import './footer.css';

function Footer() {
    return(
        <footer>
            <div className='footer__container container'>
                <h1 className='footer__title'>Ahmad Irfan</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#project' className='footer__link'>Project</a>
                    </li>
                    <li>
                        <a href='#certificate' className='footer__link'>Certficiate</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href="https://www.instagram.com/ahmadirfan.dev/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/ahmadirfanmarufm" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    Dibuat dengan ❤️ oleh <a href='https://www.instagram.com/ahmadirfan.dev/' target='__blank' className='footer__copy-by'>Ahmad Irfan Ma'ruf Maulana</a>, dengan bantuan <a href='https://www.instagram.com/crypticalcoder/' target='__blank' className='footer__copy-help'>Crypticalcoder</a>
                    <hr className='footer__copy-line'/>
                    &#169; Ahmad Irfan. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;