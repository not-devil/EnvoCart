import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsPerson } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
// import { HiMenuAlt1 } from "react-icons/hi";

import './Style/navbarmain.css';

function NavbarMain() {

    return (
        <>
            <header className="header_head" id="Header">
                <nav className="nav nav__top">
                    <div className="nav_row">
                        <div className="nav_inside_row">
                            {/* col d-flex flex-row */}
                            <div className="left__contact">
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon"><BsTelephone /></div>+91 9823 132 111
                                </div>
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon"><AiOutlineMail /></div><a href="mailto:fastsales@gmail.com">contact@bbbootstrap.com</a>
                                </div>
                            </div>
                            <div className="center__offers">
                                <div className="text__offer">
                                    Summer sale discount off <span className="cr">50%</span> ! <a href="/">Shop Now</a>
                                </div>
                            </div>
                            <div className="right__language">
                                <div className="language_text">

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="nav_bar_second ">
                    <div className="menu_navigationBar  bg-white rounded">
                        <div className="navigationBar__Logo">
                            <div className="handburgermanu__Bar">
                                <div className="menu_icon resposnive">
                                    {/* <HiMenuAlt1 size={28}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                    <rect width="30" height="1.5"></rect>
                                    <rect y="7" width="20" height="1.5"></rect>
                                    <rect y="14" width="30" height="1.5"></rect>
                                    </svg>
                                </div>
                            </div>
                            <div className="manu__bar logo inner__nav">
                                <NavLink to="/" className="menu_logo_text"> <h2>Envo Cart</h2> </NavLink>
                            </div>
                        </div>
                        <div className="navigationBar__menu">
                            <div className="menu__link">
                                <ul className="navLink">
                                    <li className="menuList">
                                        <NavLink to='/' className="menu__text">Home</NavLink>
                                    </li>
                                    <li className="menuList">
                                        <NavLink to='/product' className="menu__text">Product</NavLink>
                                    </li>
                                    <li className="menuList">
                                        <NavLink to='/shop' className="menu__text">Shop</NavLink>
                                    </li>
                                    <li className="menuList">
                                        <NavLink to='/categories' className="menu__text">categories</NavLink>
                                    </li>
                                    <li className="menuList">
                                        <NavLink to='/customized' className="menu__text">customized</NavLink>
                                    </li>
                                    <li className="menuList">
                                        <NavLink to='/blog' className="menu__text">blog</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="navigationBar__icon">
                            <div className="icon_links">
                                <ul className="icon_list">
                                    <li className="icon_List_icons">
                                        <NavLink to='/'><AiOutlineSearch size={28} /></NavLink>
                                    </li>
                                    <li className="icon_List_icons">
                                        <NavLink to='/categories'><AiOutlineHeart size={28} /></NavLink>
                                    </li>
                                    <li className="icon_List_icons">
                                        <NavLink to='/blog'><AiOutlineShoppingCart size={28} /></NavLink>
                                    </li>
                                    <li className="icon_List_icons">
                                        <NavLink to='/blog'><BsPerson size={28} /></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarMain
