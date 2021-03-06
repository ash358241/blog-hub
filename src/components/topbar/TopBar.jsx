import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css";

export default function TopBar() {
    const user = true;   
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-pinterest"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="navLink" to="/home">HOME</Link></li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem"><Link className="navLink" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    ) 
                    :
                    (
                        <ul className="topList">
                            <li className="topListItem"><Link className="navLink" to="/login">LOGIN</Link></li>
                            <li className="topListItem"><Link className="navLink" to="/register">REGISTER</Link></li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
