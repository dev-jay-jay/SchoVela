import React from 'react'
import logo from './logo.jpeg'
import { useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll';


function Header() {

    const [clicked, setClicked] = useState('');

    const handleClick = () => {
        setClicked(!clicked);
      }

  return (
    <div>
        <header className='fixed z-50 shadow-md top-0 bg-black h-16 w-full 
        md:flex md:flex-row md:justify-evenly
        lg:flex lg:flex-row lg:justify-evenly'>
            <div className='flex flex-row items-center text-fontSize1'>
                <img 
                src={logo}
                alt='SchovelaLogo'
                className='w-width1 h-height1 rounded-3xl'
                />
                <p className='text-Ared font-Agbalumo text-2xl'>Schovela</p>
            </div>
            <nav className=''>
                <ul className={` ${ clicked ? 'text-center justify-center mt-0 mr-0 w-full bg-black' : 'hidden' }
                md:flex md:flex-row md:justify-evenly md:items-center md:z-50
                lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:z-50`}>
                    <li className='text-white mt-0 md:mt-5 md:ml-20 lg:mt-5 mr-20 text-fontSize1 font-Acme'>
                        <Link 
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li className='text-white mt-5 mr-20 text-fontSize1 font-Acme'>
                        <Link
                        to="Feature"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            FEATURE
                        </Link>
                    </li>
                    <li className='text-white mt-5 mr-20 lg:mr-40 text-fontSize1 font-Acme'>
                        <Link
                        to="Team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            TEAM
                        </Link>
                    </li>
                </ul>
            </nav>
            <button onClick={handleClick} className=' fixed right-5 top-5 block text-white text-4xl md:hidden lg:hidden'>
            {clicked ? <AiOutlineClose /> : <BiMenuAltRight />}
          </button>
        </header>
    </div>
  )
}

export default Header