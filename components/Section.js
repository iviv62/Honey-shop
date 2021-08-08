import Image from 'next/image';
import bee from '../images/bee.png';
import beehive from '../images/beehive.png';
import honeycomb from '../images/honeycomb.png' 

const Section = () => {
    return (
        <div className="flex justify-center mt-4 mb-4 flex-wrap py-20 ">


            <div className="flex flex-col items-center max-w-sm">
                <Image
                className="mb-2"
            
                objectFit="contain"
                src={bee}
                alt="Bee" />
                <h3>BEEE</h3>
                <p className="text-center">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet</p>
            </div>

            <div className="flex flex-col items-center max-w-sm">
            <Image
            className="mb-2"
        
            objectFit="contain"
            src={honeycomb}
            alt="Bee" />
            <h3>BEEE</h3>
            <p className="text-center">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet</p>
        </div>

        <div className="flex flex-col items-center max-w-sm">
        <Image
        className="mb-2"
    
        objectFit="contain"
        src={beehive}
        alt="Bee" />
        <h3>BEEE</h3>
        <p className="text-center">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet</p>
    </div>
                
        </div>
    )
}

export default Section
