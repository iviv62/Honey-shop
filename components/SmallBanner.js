import Image from 'next/image';
import truck from '../images/delivery_icon.png';

const SmallBanner = () => {
    return (
        <div 
        className="h-28 flex justify-center space-x-10 items-center mt-10"
        style={{ backgroundImage: `url('background.png')` }} >
            

            <div className="text-white text-5xl font-bold flex flex-col">
            Безплатна доставка
            <span className="text-white text-sm font-bold">При закупуване на стоки над 55 лв.</span>  
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
