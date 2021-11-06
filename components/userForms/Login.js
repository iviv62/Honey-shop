import {useState,useEffect} from 'react';
import {API_DOMAIN} from '../../constants/Api'
const Login = () => {



    const [csrfToken, setscrf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    useEffect(() => {

        fetch(`${API_DOMAIN}api/csrf/`, {
          credentials: "include",
        })
        .then((res) => {
          let csrfToken = res.headers.get("X-CSRFToken")
          setscrf(csrfToken);
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])

      function handleSubmit(e) {
        e.preventDefault();
        fetch(`${API_DOMAIN}api/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          credentials: "include",
          body: JSON.stringify({email: email, password: password}),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Connecting problem');
          }
        })
        .then((data) => {
          console.log(data);
         
          
        })
        .catch((err) => {
          console.log(err);
          setError("Username or password Incorrect");
        });
        
      }


    return (
        <div className="flex flex-col max-w-[400px] justify-center bg-gray-100 px-16 py-16 ">
                        <div className="text-gray-500 text-center mb-3 font-bold"><small>Вписване</small></div>
                        <form onSubmit={handleSubmit}>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Имейл</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Имейл" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Парола</label>
                                <input onChange={(e)=>setPassword(e.target.value)}  type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Парола" />
                            </div>
                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5" /><span className="ml-2 text-sm font-semibold text-gray-700">Запомни ме</span></label>
                            </div>
                            {error && (<span>err</span>)}
                            <div className="text-center mt-6">
                                <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" >Вписване</button>
                            </div>
                        </form>
                    </div>
               
    )
}

export default Login
