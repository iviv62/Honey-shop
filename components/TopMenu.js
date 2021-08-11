import Image from 'next/image';
import logo from '../images/logo.png';
import { Icon } from 'react-icons-kit';
import {phone} from 'react-icons-kit/fa/phone';
import React,{useRef,useState} from 'react';
import Link from 'next/link'

const TopMenu = () => {
    const [active ,setActive] = useState(false);
    

    return (
    
        <header className="flex bg-black pt-2 items-center justify-around shadow-md  ">
       <Link href="/">
            <div className="relative flex items-center h-[50px]  pl-2 ">
                <Image
                className="hover:cursor-pointer"
                objectFit="contain"
                src={logo}
                alt="logo" />
            </div>
        </Link>
        <div className="text-lg text-white flex items-center">

            <div className="text-yellow-500 animate-pulse ">
                <Icon size={34} icon={phone}/>
            </div>
            +359 895 999 000
        </div>
        {/*Menu*/}
        <div className="flex space-x-8 pr-4 xl:flex md:flex sm:hidden xs:hidden">
            <Link href="/" ><a className="text-white text-lg hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 xl:block md:block sm:hidden xs:hidden">Home</a></Link>
            <Link href="/products"><a className="text-white text-lg hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 xl:block md:block sm:hidden xs:hidden">Products</a></Link>
            <Link href="/about"><a className="text-white text-lg hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 xl:block md:block sm:hidden xs:hidden">About Us</a></Link>
            <Link href="/blog"><a className="text-white text-lg hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 xl:block md:block sm:hidden xs:hidden">Blog</a></Link>
            <Link href="/ordering"><a className="text-white text-lg hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 xl:block md:block sm:hidden xs:hidden">Ordering</a></Link>
            <Link href="/contact"><a className="text-white text-lg hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300 xl:block md:block sm:hidden xs:hidden">Contacts</a></Link>              
        </div>
        {/*End Menu*/}

        <svg onClick={()=>{setActive(!active)}}  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer xl:hidden md:hidden sm:block xs:block h-20 "  
                viewBox="0 0 50 50" enableBackground="new 0 0 50 50" >
            <path className="fill-current text-yellow-500" d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"/>
            <path className="fill-current text-yellow-500" d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"/>
            <path className="fill-current text-yellow-500" d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"/>
        </svg>

         {/*Mobile Menu*/}
         <div className={` absolute top-[87px]  right-0 duration-500 ease-in-out text-black font-semibold flex flex-row self-end z-50 bg-yellow-500 opacity-90 w-[300px]  ${active?"visible opacity-100":"invisible opacity-0"}`} >
         <div className={`flex flex-col text-center transition-all duration-500 ease-in-out ${active?"visible opacity-100":"invisible opacity-0"}`} >
         
           <div  className="w-[300px]  hover:bg-black text-white  duration-500 ease-in-out cursor-pointer  "><Link href="/"><a>Home</a></Link></div>
           <div  className="w-[300px]  hover:bg-black text-white  duration-500 ease-in-out cursor-pointer  "><Link href="/products"><a>Products</a></Link></div>
           <div  className="w-[300px]  hover:bg-black text-white  duration-500 ease-in-out cursor-pointer  "><Link href="/about"><a>About Us</a></Link></div>
           <div  className="w-[300px]  hover:bg-black text-white  duration-500 ease-in-out cursor-pointer  "><Link href="/blog"><a>Blog</a></Link></div>
           <div  className="w-[300px]  hover:bg-black text-white  duration-500 ease-in-out cursor-pointer  "><Link href="/ordering"><a>Ordering</a></Link></div>
           <div  className="w-[300px]  hover:bg-black text-white  duration-500 ease-in-out cursor-pointer  "><Link href="/contact"><a>Contacts</a></Link></div>
         </div>
         </div>
        
          {/*End Menu*/}
        </header>
    )
}

export default TopMenu
