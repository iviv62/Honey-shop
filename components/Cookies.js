import React,{useState,useEffect} from 'react'

const Cookies = () => {
    const [value,setValue ]= useState(false)
    const onClick = event => {
        localStorage.setItem('cookiesConsent', true);
     
        setValue(true);
      };

      useEffect(() => {
        let val =localStorage.getItem('cookiesConsent');
        val?setValue(true):setValue(false);
      }, [value]);

    return (!value &&(
        <div className=" bg-gray-100 flex items-center justify-center">
    <section className="w-full p-5 lg:px-24  top-0 bg-gray-600" >
        <div className="md:flex items-center -mx-3">
            <div className="md:flex-1 px-3 mb-5 md:mb-0">
                <p className="text-center md:text-left text-white text-xs leading-tight md:pr-12">
                Този сайт използва бисквитки, за да Ви предложи по-добри услуги и да направи посещението Ви по-полезно и приятно.</p>
            </div>
            <div className="px-3 text-center">
                <button onClick={onClick} id="btn" className="py-2 px-8 bg-yellow-400 hover:bg-black transition-colors duration-300 text-white rounded font-bold text-sm shadow-xl">Разбрах</button>
            </div>
        </div>
    </section>
</div>)
    )
}

export default Cookies
