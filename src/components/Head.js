import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

function Head() {
    const dispatch=useDispatch();
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
            <input className=" w-1/2 border border-gray-400 rounded-l-full" type="text"/>
            <button className="border border-gray-400 bg-slate-100 px-2 rounded-r-full">
                🔍
            </button>
        </div>

        <div>
            <img className="h-8 col-span-1"
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user"/>
        </div>
    </div>
  )
}

export default Head