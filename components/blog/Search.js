import { Icon } from 'react-icons-kit';
import {search} from 'react-icons-kit/fa/search';
import {blogItemsVar,blogSearchBool} from '../../constants/cache';
import {API_DOMAIN} from '../../constants/Api';
import {useState} from 'react'

const Search = () => {

    const [value, setValue] = useState("")

    const handleClick = (val) => {

        fetch(`${API_DOMAIN}api/posts/?search=${val}`)
                .then(response => response.json())
                .then(data => {
                    blogItemsVar(data.results)
                    blogSearchBool(true)
                    console.log(blogItemsVar())
                });
        
    }
    return (
        <div class="bg-white shadow p-4 flex w-96">
        <span class="flex justify-end items-center text-gray-500 p-2">
        <div className="text-yellow-500  ">
            <Icon size={34} icon={search}/>
        </div>
        </span>
        <input onChange={(e)=>setValue(e.target.value)} class="w-full rounded p-2" type="text" placeholder="Потърси заглавие "/>
        <button onClick={()=>handleClick(value)} class="bg-yellow-500 hover:bg-black transition-colors duration-300 rounded text-white p-2 pl-4 pr-4">
                <p class="font-semibold text-xs">Търси</p>
        </button>
    </div>
    )
}

export default Search
