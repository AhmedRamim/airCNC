import React from 'react';
import Container from '../Container';
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Search from './Search';
import MenuDropdown from './MenuDropdown';
const Navbar = () => {
    return (
        <div className='fixed bg-white z-10 shadow-sm w-full'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <div>
                            <Link to='/'><img className='hidden md:block' src={logo} alt="airCNC" width={100} height={100} /></Link>
                        </div>
                        <div><Search></Search></div>
                        <div><MenuDropdown></MenuDropdown></div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;