import {validateEmail} from '../hooks/validators';
import {useState} from 'react'
import {postData} from '../hooks/requests';

const SubscriptionCard = () => {
    const [email, setEmail] =  useState("");
    const [success , setSuccess] = useState(false)
    const handleClick= () => {
        if(validateEmail(email)){
            setSuccess(true)
        }
    }
    return (
        
          
        <div className="w-full  bg-gray-500  " style={{backgroundImage: `url('background.png')`}}>
        {
        <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
          <div className=" m-0  p-0  text-4xl  text-white  antialiased  text-center">Абонирайте се за нашия блог</div>
          <div className=" m-0  p-0  text-xl  text-white  antialiased  text-center">Получавайте известия за наша публикация!</div>
          <div className={` mt-3  flex  flex-row  flex-wrap ${success?"hidden":"" }`}>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" className=" text-gray-600  w-2/3  p-2  rounded-l-lg" placeholder="Ivan@abv.bg"/>
            <button onClick={handleClick} className={` p-2  w-1/3  bg-black  rounded-r-lg  text-white hover:bg-yellow-600 transition-colors duration-500 } `  } type="button">Абонирай се</button>
          </div>
          {success && ( <span className="text-2xl  pt-20 text-center text-red-900 transition-all duration-500">Успешно сe абонирахте за нашия блог! </span>) }
            
        </div>}
      </div>
    )
}

export default SubscriptionCard
