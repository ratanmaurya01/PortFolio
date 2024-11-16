import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

function Contact() {
    return (
        <div>
            <div className='bg-black text-white py-20' id='contact'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                    
                    {/* Divider */}
                    <div className='w-full border-t-2 border-gray-600 rounded-full my-8'></div>
                    
                    <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                        <div className='flex-1'>
                            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                            <p>I'm open to discuss web development projects or opportunities.</p>
                            <div className='mb-4'>
                                <FaEnvelope className='inline-block text-green-600 mr-2' />
                                <a href="mailto:xyz@gmail.com" className='hover:underline'>mauryaratan42@gmail.com</a>
                            </div>
                            <div className='mb-4'>
                                <FaPhone className='inline-block text-green-600 mr-2' />
                                <span>+923443432432</span>
                            </div>
                            <div className='mb-4'>
                                <FaMapMarkedAlt className='inline-block text-green-600 mr-2' />
                                <span>Jaipur India</span>
                            </div>
                        </div>
                        <div className='flex-1 w-full'>
                            <form action="" className='space-y-4'>
                                <div>
                                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                                    <input type="text"
                                        className='w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                        placeholder='Enter your name'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className='block mb-2'>Email</label>
                                    <input type="email"
                                        className='w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className='block mb-2'>Message</label>
                                    <textarea
                                        className='w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                        rows='5'
                                        placeholder='Enter your message'
                                    ></textarea>
                                </div>
                                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
