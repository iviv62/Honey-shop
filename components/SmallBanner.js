import Image from 'next/image';
import truck from '../images/delivery_icon.png';

const SmallBanner = () => {
    return (
        <div 
        className="h-28 flex justify-center space-x-10 items-center my-10"
        style={{ backgroundImage: `url('background.png')` }} >
            

            <div className="text-white text-5xl font-bold">
            Free Delivery
                
            </div>
            <div className="relative flex items-center h-17 pl-2 ">
                    <Image
                    className="hover:cursor-pointer"
                    src={truck}
                    alt="free delivery" />
            </div>

        </div>
    )
}

export default SmallBanner
