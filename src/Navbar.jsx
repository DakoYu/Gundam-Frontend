import { useState } from 'react';
import { ReactComponent as MenuIcon } from './assets/img/menu-1.svg';
import { ReactComponent as CloseIcon } from './assets/img/menu-2.svg';
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const menuHandler = () => {
        setClicked(!clicked);
    }

    return (
        <header>
            <nav className='navbar'>
                <div className='mobile' onClick={menuHandler}>
                    {!clicked ? 
                        <MenuIcon className='menu-icon'/> :
                        <CloseIcon className='menu-icon'/>
                    }
                </div>
                <ul className={clicked ? 'options active' : 'options'}>
                    <li><a href='/'>Home</a></li>
                    <li>
                        <a href='/gundam'>Showcase</a>
                        <ul className='submenu'>
                            <li><a href='/gundam?grade=hg'>High Grade</a></li>
                            <li><a href='/gundam?grade=rg'>Real Grade</a></li>
                            <li><a href='/gundam?grade=mg'>Master Grade</a></li>
                            <li><a href='/gundam?grade=pg'>Perfect Grade</a></li>
                        </ul>
                    </li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;