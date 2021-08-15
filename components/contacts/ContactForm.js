import React,{useState} from 'react';
import { useFormFields } from "../../hooks/customHooks";
import {API_DOMAIN} from '../../constants/Api'

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false)
   
    const [hasFailed, setFailed] = useState(false)
    const [error, setError] = useState("");
    const [fields, handleFieldChange] = useFormFields({
        names: "",
        phone: "",
        email: "",
        message:""
      });
      
    const handleSubmit=(event)=> {
        event.preventDefault();
        if(phonenumber(fields.phone)){
            setIsLoading(true);
            postData(`${API_DOMAIN}api/contact-submissions/`,fields).then(data => {
                setIsLoading(false);
                if(data.phone){
                    setIsSent(true);
                    setFailed(false)
                }else{
                    setFailed(true)
                    setError("Съобщението не е изпратено! Опитайте по-късно.")
                }
              });
            
        }
       
      }
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Свържете се с нас.
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Попълнете формата за да ни изпратите съобщение!
                        </p>

                        

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            +359 895 999 000
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                info@abv.bg
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Имена</label>
                            <input required value={fields.names}  onChange={handleFieldChange} type="name" name="names" id="names" placeholder="Имена" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input required  value={fields.email} onChange={handleFieldChange} type="email" name="email" id="email" placeholder="Имейл" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">Number</label>
                            <input required value={fields.phone}  onChange={handleFieldChange} type="tel" name="tel" id='phone' placeholder="Телефонен номер" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="text" className="hidden">Message</label>
                            <textarea required value={fields.message}  onChange={handleFieldChange} id="message"  placeholder="Съобщение" className="w-100 h-52 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-yellow-500 focus:outline-none"/>
                        </div>
                        {isSent &&( <p class="text-green-500 text-md italic">Съобщението е изпратено успешно!</p>)}
                        {hasFailed &&( <p class="text-red-500 text-md italic">{error}</p>)}
                        <button type="submit" className="md:w-32 bg-yellow-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-black transition ease-in-out duration-300">
                            {isLoading?
                                (<div class=" flex justify-center items-center">
                                <div class="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5"></div>
                              </div> ):
                                "Изпрати"
                            
                            }
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactForm

function phonenumber(v) {
    let phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
    var phoneno2 = /^\d{10}$/;
    if ( v.match(phoneno) || v.match(phoneno2)){
        return true;
    }else {
       
        return false;
    }
}

async function postData(url ='', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
