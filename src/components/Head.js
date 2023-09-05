import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

function Head() {
    const [searchQuery, setSearchQuery]=useState("");
    const [suggestion, setSuggestion]=useState([]);
    const [showSuggestions , setShowSuggestions]=useState(false);

    const searchCache=useSelector(store=>store.search);
    const dispatch=useDispatch();


    //DEBOUNCING & CACHING
    useEffect(()=>{
        const timer =setTimeout(() => {
            const cache=searchCache[searchQuery];
            if(cache)
                setSuggestion(cache);
            else
                getSearchSuggestions()
        }, 200);

        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery])

    const getSearchSuggestions = async () =>{
        const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json=await data.json();
        setSuggestion(json[1]);

        dispatch(cacheResults({
            [searchQuery]:json[1],
         }));
    }
    

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1 ">
            <img className="h-8 cursor-pointer "
            onClick={()=>toggleMenuHandler()}
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg" alt="menu"/>
            <img className="h-8 mx-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo"/>
        </div>
        <div className="col-span-10 ">
            <div>
            <input className=" px-5 w-1/2 border border-gray-400 rounded-l-full" type="text"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}/>
            <button className="border border-gray-400 bg-slate-100 px-2 rounded-r-full">
                🔍
            </button>
            </div>

            {showSuggestions && (
            <div className="absolute bg-white py-0 px-2 w-2/5 shadow-lg rounded-lg border border-gray-500">
            <ul>
            {suggestion.map((s)=> (<li key={s} className="py-1 shadow-sm hover:bg-gray-100">{s}</li>))}
            </ul>
            </div>
            )}
        </div>

        <div>
            <img className="h-8 col-span-1"
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user"/>
        </div>
    </div>
  )
}

export default Head