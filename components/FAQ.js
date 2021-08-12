import {API_DOMAIN} from "../constants/Api";

const FAQ = ({data}) => {
    return (
        
<div className="w-3/5 p-8 mx-auto my-20 font-mono ">
<h3 className="text-center mb-4 text-4xl font-bold my-10">FAQ</h3>
<section className="shadow row">
    <div className="tabs">
    {data.map(item =>

   
        <div className="border-b tab">
            <div className="border-l-2 border-transparent relative">
                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                    <span className="text-grey-darkest font-thin text-xl">
                        {item.title}
                    </span>
                    <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                        </svg>
                    </div>
                </header>
                <div className="tab-content">
                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                        <ul className="pl-4">
                            <li className="pb-2">
                            {item.content}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) }
    </div>
</section>
</div>
    )
}

export default FAQ
