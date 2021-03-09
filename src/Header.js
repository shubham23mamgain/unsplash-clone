import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { CenterFocusWeak, MoreHoriz } from '@material-ui/icons';
import {Button,Divider} from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
         <div className="header__left">
          <Link to="/"> 
            <img
            className="header__icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACTk5OlpaW7u7uJiYmYmJh5eXn8/Py6urp1dXV9fX2goKDd3d2+vr7a2tpgYGCPj4+Dg4PGxsagu3jbAAABZUlEQVR4nO3aSXKDMBBAUYKxLTwP979r7DWLNASLxvXeWiX1L9gwNA0AAAAAAAAAAADwFUops6/MpUQHDy+ktsthf9xHHPeHy9LDTrL5idssPewkChXmp1BhfgoV5qdQYX4KFeanUGF+ChXmp1BhfgoV5qdQYX6nEYWnpYed5Nx33SWi6/rz0sNOUprwd/xmnd/xR/x+sNI/FUoTuzbRdSkF79IPTwEAAOQU/0E9vOHcO/7P65xr3/2pv0Yf+17rghvWKXwfs428XWpHvMVoIxs+Kj0qv88IDdQG76oSLdxWe1gODrQbseUuV2HwGn6isBqFCgcUKpydQoUDChXOTqHCAYUKZ6dQ4YBChbNTqHBAocLZBQujX2a+v7CstjBunYW3TdxtlYWzU6hQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhwjYX3RQofFQuf97a++7NiIQAAAAAAAAAAAAAAAOT1C+qnKs6sX0ZvAAAAAElFTkSuQmCC"
             alt="Unsplash logo"
           />
          </Link>
          <div className="header__left__data">
           <p className="logo__title">Unsplash</p>
           <p className="logo__description">Photos for Everyone</p>
          </div>
      
         </div>
     

      <div className="header__center">
        <SearchIcon />
        <input placeholder="Search free high-resolution photos" type="text" />  
        <CenterFocusWeak /> 
      </div>

      <div className="header__middle">
        <div className="header__option" >
          <p>Brands</p>
        </div>
        <div className="header__option">
          <p>Explore</p>
        </div>
        <div className="header__option">
          < MoreHoriz fontSize="large" />
        </div>
        
       </div>

       <div className="header__right">
           <Button className="btn1" variant="outlined">Submit a Photo</Button>
           <Divider color="gray" orientation="vertical" flexItem />
           <Button className="btn2">Login</Button>
           <Button className="btn3" variant="outlined">Join Free</Button>
         </div>
   </div>
    )
}

export default Header
