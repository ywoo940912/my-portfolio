import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import Resume from '../assets/Resume.pdf'
import {Link} from "react-scroll"
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {
    return(    
    <div className=" w-full h-[70px] flex  justify-between items-center border-double border-b-4 border-gray-500 px-4 bg-[#495579]">
    <div>
        <img src={Logo} alt='Logo image' style={{ width: '65px'}} />

        {/* social Icons */}
    </div>

    <div>        
    <ul className="flex">   
            <li className="ml-[-30px] ">
                <a href="https://github.com/ywoo940912" target = "_blank">
                    <FaGithub color="white" size={30}/>
                </a>
            </li>
            <li className="ml-[-80px] ">
                <a href="https://www.linkedin.com/in/yeonkuk-woo-790278138/" target = "_blank">
                    <FaLinkedin color="white"  size={30}/>
                </a>
            </li>
            <li className="ml-[-85px] ">
                <a href= {Resume} target = "_blank">
                    <BsFillPersonLinesFill color="white" size={30}/>
                </a>
            </li>
        </ul>
    </div>

        {/* Links*/
              <div className='hidden lg:flex fixed flex-col bottom-[20px] left-0'>
        <ul>
          <li className='w-[120px] h-[60px] flex items-center ml-[-100px] my-[10px] hover:ml-[-30px] duration-300 rounded-br-lg  bg-[#354259]'>
            <a
              className='flex justify-between items-center ml-[50px] w-full italic font-bold text-gray-300'
              href='/'
            >
        <Link to="main" smooth={true} duration={500}>
          Main
        </Link>
            </a>
          </li>
          <li className='w-[120px] h-[60px] flex items-center ml-[-100px] my-[10px] hover:ml-[-30px] duration-300 rounded-br-lg bg-pink-600'>
            <a
              className='flex justify-between items-center w-full ml-[40px] italic font-bold text-gray-300'
              href='/'
            >
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
            </a>
          </li>
          <li className='w-[120px] h-[60px] flex tems-center ml-[-100px] my-[10px] hover:ml-[-30px] duration-300 rounded-br-lg bg-[#227C70]'>
            <a
              className='flex justify-between items-center ml-[50px] w-full italic font-bold text-gray-300'
              href='/'
            >
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
            </a>
          </li>
          <li className='w-[120px] h-[60px] flex items-center ml-[-100px] my-[10px] hover:ml-[-30px] duration-300 rounded-br-lg bg-[#B99B6B]'>
            <a
              className='flex justify-between items-center ml-[40px] w-full italic font-bold text-gray-300'
              href='/'
            >
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
            </a>
          </li>
        </ul>
      </div> 
        }


    </div>
    )
}