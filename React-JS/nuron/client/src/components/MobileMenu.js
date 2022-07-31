import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../services/AuthContext";

export const MobileMenu = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="popup-mobile-menu">
            <div className="inner">
                <div className="header-top">
                    <div className="logo logo-custom-css">
                        <Link to="/" className="logo-light"><img src="/images/logo/logo-white.png" alt="nft-logo" /></Link>
                        <Link to="/" className="logo-dark"><img src="/images/logo/logo-dark.png" alt="nft-logo" /></Link>
                    </div>
                    <div className="close-menu">
                        <button className="close-button">
                            <i className="feather-x"></i>
                        </button>
                    </div>
                </div>
                <nav>
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
                            ?
                            <>
                                <li>
                                    <Link to={`/user/my-collection`}>My Collection</Link>
                                </li>
                                <li>
                                    <Link to="/product/create">Create</Link>
                                </li>
                                <li>
                                    <Link to="/user/logout">Logout</Link>
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
    );
};