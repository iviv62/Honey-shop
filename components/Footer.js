import Image from 'next/image';
import logo from '../images/logo.png';
import LinkIcon from '../components/Icons/LinkIcon'
const Footer = () => {
    return (
        
        
        <footer className="flex flex-col bg-black h-auto  ">
            <div className="flex justify-around">

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
        </div>
            <div className="flex items-center justify-center w-full py-5">
            <LinkIcon name="fb" link="#" primaryColor="white" secondaryColor="yellow" />
            <LinkIcon name="insta" link="#" primaryColor="white" secondaryColor="yellow" />
            
            </div>
            
        </footer>
      
        
    )
}

export default Footer
