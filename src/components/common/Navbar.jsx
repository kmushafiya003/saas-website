import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks1 } from '../../data/navlinks';
import logo from '../../images/Logo.svg';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleDropdownToggle = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="container px-1 xl:px-4">
            <nav className="flex-wrap flex items-center justify-center p-6 bg-white">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[150px] h-[40px]"
                    />
                    <button
                        className="text-secondary-soft-blue md:hidden"
                        onClick={handleMobileMenuToggle}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                <div className={`w-full md:flex md:items-center md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-8 md:space-y-0 font-poppins md:justify-start ml-8 md:ml-16">
                        {NavLinks1.map((navItem) => (
                            <li key={navItem.id} className="relative text-black">
                                {navItem.isDropDown ? (
                                    <div className="relative flex flex-col items-center md:items-start">
                                        <span
                                            className="flex items-center cursor-pointer"
                                            onClick={() => handleDropdownToggle(navItem.id)}
                                        >
                                            {navItem.link[0].title}
                                            <svg
                                                className="w-4 h-4 ml-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                        {openDropdown === navItem.id && (
                                            <div
                                                className="mt-2 text-white rounded shadow-lg bg-secondary-soft-blue md:absolute md:mt-0"
                                                style={{ top: '100%', zIndex: 10 }}
                                            >
                                                {navItem.link.map((subLink, index) => (
                                                    <Link
                                                        key={index}
                                                        to={subLink.path}
                                                        className="block px-4 py-2 text-white hover:text-black"
                                                    >
                                                        {subLink.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link to={navItem.path} className="hover:text-secondary-easter-purple">{navItem.title}</Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col items-center justify-center mt-4 md:mt-0 font-poppins md:flex-row md:space-x-4 md:justify-start md:ml-8">
                        <Link to="/login" className="px-4 py-2 mb-2 rounded text-secondary-soft-blue md:mb-0 md:mr-2">
                            Login
                        </Link>
                        <Link to="/sign-up" className="px-4 py-2 border rounded-lg text-secondary-soft-blue border-secondary-soft-blue hover:bg-secondary-soft-blue hover:text-white">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
