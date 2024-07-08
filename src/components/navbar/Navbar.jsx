import React, { useState } from 'react';
import logo from '../../assets/images/header-logo.svg';
import burgerMenu from '../../assets/icons/hamburger.svg';

const NavItems = () => {
    const navitems = ['home', 'about us', 'products', 'contact us'];

    return (
        navitems.map((item, idx) => (
            <li
                key={idx}
                className={`cursor-pointer capitalize text-lg text-gray-500 hover:text-gray-800 duration-300`}
            >
                {item}
            </li>
        ))
    )
}

const Navbar = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='py-8 absolute top-0 w-full z-20'>
            <nav>
                <div className="container mx-auto flex justify-between items-center font-montserrat px-8">
                    <div className="w-32">
                        <img src={logo} alt="logo" className='w-full' />
                    </div>
                    <ul className='lg:flex hidden items-center gap-14'>
                        <NavItems />
                    </ul>
                    <div className="lg:flex hidden items-center gap-3 text-lg font-medium">
                        <span>Sign in</span>
                        /
                        <span>Explore now</span>
                    </div>
                    <img src={burgerMenu} className='lg:hidden block w-8' alt="menu" onClick={handleToggleMobileMenu} />
                </div>

                {/* Mobile Menu */}
                <ul className={`flex flex-col gap-4 relative items-center py-8 lg:hidden px-8 mt-4 bg-white h-full duration-500 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <NavItems />
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;
