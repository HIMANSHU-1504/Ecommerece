import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import FavouriteBorderOutlinedIcon from "@mui/icons-material/FavouriteBorderOutlinedIcon";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
              <div className='item'>
                <Link to="/products/1">Women</Link>
              </div>
              <div className='item'>
                <Link to="/products/2">Men</Link>
              </div>
              <div className='item'>
                <Link to="/products/3">Kid</Link>
              </div>
            </div>

            <div className='centre'>
              <Link to="/">Uthopia</Link>
            </div>
              
            <div className='right'>
              <div className='centre'>
                <Link to="/">HomePage</Link>
              </div>
              <div className='centre'>
                <Link to="/">About</Link>
              </div>
              <div className='centre'>
                <Link to="/">Contact</Link>
              </div>
              <div className='centre'>
                <Link to="/">Stores</Link>
              </div>
              <div className='icons'>
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                {/* <FavouriteBorderOutlinedIcon/> */}
                <div className='cartIcon'>
                  <ShoppingCartOutlinedIcon/>
                  <span>0</span>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar
