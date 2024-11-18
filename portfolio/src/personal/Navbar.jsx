import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);
    
    const closeMenu = () => setIsOpen(false);  // Function to close the menu

    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-between items-center'>
                <div className='text-2xl font-bold'>RSTAR</div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                        </svg>
                    </button>
                </div>
                <div className='hidden md:flex space-x-6 items-center'>
                    {['Home', 'About', 'Services', 'Project', 'Contact'].map((text) => (
                        <a key={text} href={`#${text.toLowerCase()}`} className='hover:text-gray-400'>{text}</a>
                    ))}
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col items-center mt-2 space-y-2 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-8'}`}>
                {['Home', 'About', 'Services', 'Project', 'Contact'].map((text) => (
                    <a key={text} href={`#${text.toLowerCase()}`} onClick={closeMenu} className='hover:text-gray-400'>{text}</a>
                ))}
             
                <button
                    onClick={closeMenu}  // Close the menu when clicked
                    className='transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full'
                    style={{ background: 'linear-gradient(to right, orange, pink)' }}
                >
                    Connect Me
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
