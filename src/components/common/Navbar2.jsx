import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks2 } from '../../data/navlinks';
import logo from '../../images/Logo (1).svg';

const Navbar2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="container xl:px-4 px-1">
            <nav className="bg-white p-6 flex items-center justify-center flex-wrap">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <button
                        className="text-secondary-selective-yellow md:hidden"
                        onClick={handleMobileMenuToggle}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                <div className={`w-full md:flex md:items-center md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} ml-8`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 font-poppins items-center justify-center md:justify-start">
                        {NavLinks2.map((navItem) => (
                            <li key={navItem.id} className="text-black">
                                <Link to={navItem.path} className="hover:text-secondary-easter-purple">
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 items-center justify-center md:justify-start ml-8">
                        <Link to="/login" className="text-secondary-selective-yellow px-8 py-4 hover:text-black mb-2 md:mb-0">
                            Login
                        </Link>
                        <Link
                            to="/sign-up"
                            className="text-white bg-secondary-selective-yellow px-8 py-4 rounded-full hover:bg-secondary-selective-yellow hover:text-white focus:outline-none focus:ring-1 focus:ring-selective-yellow"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;
