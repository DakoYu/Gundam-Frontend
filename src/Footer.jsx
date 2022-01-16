import { useState } from 'react';
import Login from './components/User/Login';
import './Footer.css';

const Footer = () => {
    const [state, setState] = useState(false);

    const openModal = () => {
        setState(true)
    }

    const closeModal = () => {
        setState(false);
    }

    return (
        <footer>
            <h1>let's connect</h1>
            <ul>
                <li><a href='https://www.linkedin.com/in/dako-yu-8b03a5218/' target='_blank' rel='noopener noreferrer'><i className="uil uil-linkedin"></i> LinkedIn</a></li>
                <li><a href='https://www.instagram.com/dakotec/' target='_blank' rel='noopener noreferrer'><i className="uil uil-instagram"></i> Instagram</a></li>
                <li><a href='/' target='_blank' rel='noopener noreferrer'><i className="uil uil-discord"></i> Discord</a></li>
                <li><a href='/'><i className="uil uil-home"></i> Home</a></li>
                <li onClick={openModal}><i className="uil uil-plus-circle"></i> Add</li>
            </ul>
            <Login 
                state={state}
                closeModal={closeModal}
                openModal={openModal}
            />
        </footer>
    )
}

export default Footer;