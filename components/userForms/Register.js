const Register = () => {
    return (
        <div className="flex flex-col max-w-[400px] justify-center bg-gray-100 px-16 py-16 ">
                        <div className="text-gray-500 text-center mb-3 font-bold"><small>Регистрация</small></div>
                        <form>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Имейл</label>
                                <input type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Имейл" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Парола</label>
                                <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Парола" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Потвърди Парола</label>
                                <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Потвърди Парола" />
                            </div>
                           
                            
                            <div className="text-center mt-6">
                                <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="button" >Вписване</button>
                            </div>
                        </form>
                    </div>
    )
}

export default Register
