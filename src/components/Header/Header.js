import React from 'react'
import "./Header.css"
import {Link, NavLink} from 'react-router-dom'

const Header = () =>{
        return(
            <div className='header'>
                <div className='headerLeft'>
                    <Link to="/"><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDBLOGO"/></Link>
                    <NavLink to="/movies/popular"  style={{textDecoration:"none"}}><span>Popular</span></NavLink>
                    <NavLink to="/movies/top_rated"  style={{textDecoration:"none"}}><span>Top Rated</span></NavLink>
                    <NavLink to="/movies/upcoming"  style={{textDecoration:"none"}}><span>Upcoming</span></NavLink>
                </div>
            </div>
        )
}

export default Header;