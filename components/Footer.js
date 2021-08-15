import Image from 'next/image';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        
        
        <footer className="flex bg-black h-20 justify-around py-4 ">

            <div className="relative flex items-center h-17 pl-2 ">
                <Image
                className="hover:cursor-pointer"
                src={logo}
                alt="logo" />
            </div>

            <div className="flex items-center">
            <span className="text-white  text-xl">©2021 Всички права запазени</span>
            <span className="text-white ml-2 mr-2 text-xl">|</span>
            <span className="text-white text-xl hover:cursor-pointer hover:text-yellow-500 transition-colors duration-300"> Privacy Policy</span>
            </div>

            
        </footer>
      
        
    )
}

export default Footer
