import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../services/AuthContext";

export const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header className="rn-header haeder-default header--sticky">
            <div className="container">
                <div className="header-inner">
                    <div className="header-left">
                        <div className="logo-thumbnail logo-custom-css">
                            <Link to="/" className="logo-light" ><img src="/images/logo/logo-white.png" alt="nft-logo" /></Link>
                            <Link to="/" className="logo-dark" ><img src="/images/logo/logo-dark.png" alt="nft-logo" /></Link>
                        </div>
                        <div className="mainmenu-wrapper">
                            <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">

                                <ul className="mainmenu">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/product/catalog">Catalog</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    {user.email
                                        ? <>
                                            <li>
                                                <Link to="/product/create">Create</Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link to="/authentication/login">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/authentication/register">Register</Link>
                                            </li>
                                        </>
                                    }
                                </ul>

                            </nav>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="setting-option d-none d-lg-block">
                            <form className="search-form-wrapper" action="#">
                                <input type="search" placeholder="Search NFT by Name" aria-label="Search" />
                                <div className="search-icon">
                                    <button><i className="feather-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="setting-option rn-icon-list d-block d-lg-none">
                            <div className="icon-box search-mobile-icon">
                                <button><i className="feather-search"></i></button>
                            </div>
                            <form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
                                <div className="rn-search-mobile form-group">
                                    <button type="submit" className="search-button"><i className="feather-search"></i></button>
                                    <input type="text" placeholder="Search ..." />
                                </div>
                            </form>
                        </div>
                        {user.email
                            ?
                            <div className="header_admin" id="header_admin">
                                <div className="setting-option rn-icon-list user-account">
                                    <div className="icon-box">
                                        <Link to="/user/edit-profile"><img src={user.imageUrl ? user.imageUrl : "/images/icons/boy-avater.png"} alt="Images" /></Link>
                                        <div className="rn-dropdown">
                                            <div className="rn-inner-top">
                                                <h4 className="title"><Link to="/user/edit-profile">{`${user.firstName} ${user.lastName}`}</Link></h4>
                                                <span>{user.email}</span>
                                            </div>

                                            <ul className="list-inner">
                                                <li><Link to="/user/edit-profile">Edit Profile</Link></li>
                                                <li><Link to="/user/logout">Sign Out</Link></li>
                                                <li><Link to={`/user/my-collection`}>My Collection</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : ''
                        }



                        <div className="setting-option mobile-menu-bar d-block d-xl-none">
                            <div className="hamberger">
                                <button className="hamberger-button">
                                    <i className="feather-menu"></i>
                                </button>
                            </div>
                        </div>

                        <div id="my_switcher" className="my_switcher setting-option">
                            <ul>
                                <li>
                                    <a href="javascript: void(0);" data-theme="light" className="setColor light">
                                        <img className="sun-image" src="/images/icons/sun-01.svg" alt="Sun images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript: void(0);" data-theme="dark" className="setColor dark">
                                        <img className="Victor Image" src="/images/icons/vector.svg" alt="Vector Images" />
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    );
}; 