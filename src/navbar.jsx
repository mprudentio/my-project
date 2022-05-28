import React,  { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn} 
from 'react-icons/fa'
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
    <div>
        <img src="./Logo.png" alt="Logo" style={{width:'50px'}}/>
    </div>

    {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='hover:border-b-2 hover:border-pink-600'><Link to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li className='hover:border-b-2 hover:border-pink-600'><Link to='about' smooth={true} duration={500}>
            About
          </Link></li>
            <li className='hover:border-b-2 hover:border-pink-600'><Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li className='hover:border-b-2 hover:border-pink-600'><Link to='work' smooth={true} duration={500}>
            Work
          </Link></li>
            <li className='hover:border-b-2 hover:border-pink-600'><Link to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
        </ul>


    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile Menu */}
        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        } >
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link></li>
            <li className='py-4 text-3xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
        </ul>

    {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/muhammad-prudentio-jawairul-falah-816279157/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto: muprudentio@gmail.com?subject = Feedback&body = Message'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1sWJrgJps078Fcnc-X4CI3PGtrnDay31A/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
        </div>

    </div>

  )
}

export default Navbar