import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'

function SideBar() {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  return !isMenuOpen ? null :(
    <div className="p-6 shadow-lg w-44">
        <Link to="/"><h1 className="font-bold pt-5"> Home</h1></Link>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">
            Subscriptions
        </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">
            Watch Later
        </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        
    </div>
  )
}

export default SideBar