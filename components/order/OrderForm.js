import React,{useState} from 'react';
import { useFormFields } from "../../hooks/customHooks";
import {API_DOMAIN} from '../../constants/Api';
import {phonenumberValidator} from '../../hooks/validators';
import {postData} from '../../hooks/requests'

const OrderForm = ({product_title}) => {
    const [fields, handleFieldChange] = useFormFields({
        names: "",
        phone: "",
        message:"",
        product_title:product_title
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false)
    const [hasFailed, setFailed] = useState(false)
    const [error, setError] = useState("");
    
    const handleSubmit=(event)=> {
        event.preventDefault();
        if(phonenumberValidator(fields.phone)){
            setIsLoading(true);   
            postData(`${API_DOMAIN}api/orders/`,fields).then(data => {
                setIsLoading(false);
                if(data.phone){
                    setIsSent(true);
                    setFailed(false)
                }else{
                    setFailed(true)
                    setError("Поръчката е неуспешна. Опитайпе по-късно или използвайте телефона за връзка")
                }
              });
            
        }else{
            setFailed(true)
            setError("Невалиден номер!")
        }
        }   
    


    return (
        <div className="leading-loose">
            <form onSubmit={handleSubmit} className="max-w-3xl min-w-[400px] m-4 p-10 bg-white rounded ">
                <p className="text-gray-800 font-medium text-lg">Изпратете ни вашия телефонен номер и ние ще ви се обадим да потвърдим поръчката ви.</p>
                <div className="mt-2">
                    <label  className="hidden block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                    <input value={fields.names}  onChange={handleFieldChange} id="names" className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "  name="cus_name" type="text"  placeholder="Имена" aria-label="Name" />
                </div>
                <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">Phone</label>
                    <input required value={fields.phone}  onChange={handleFieldChange} id="phone" className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "  type="text"  placeholder="Телефон" aria-label="Email" />
                </div>
                <div className="mt-2">
    
                <input hidden id="product_title" value={product_title} className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "  type="text"   />
                </div>
                <div className="flex flex-col mt-2">
                <label htmlFor="text" className="hidden">Message</label>
                <textarea value={fields.message}  onChange={handleFieldChange} id="message"  placeholder="Съобщение" className="w-full mt-2 py-3 px-3 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none "/>
                </div>
                
                
                <div className="mt-4">
                {isSent &&( <p class="text-green-500 text-md italic">Поръчката ви е успешна. Очаквайте обаждане в рамките на 24 часа, за да потвърдим поръчката</p>)}
                {hasFailed &&( <p class="text-red-500 text-md italic">{error}</p>)}
                <button type="submit" className="md:w-32 bg-yellow-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-black transition ease-in-out duration-300">
                    {isLoading?
                        (<div class=" flex justify-center items-center">
                        <div class="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5"></div>
                      </div> ):
                        "Submit"
                    
                    }
                </button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm
