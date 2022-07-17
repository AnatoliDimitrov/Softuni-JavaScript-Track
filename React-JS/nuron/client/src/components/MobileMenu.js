import { Link } from "react-router-dom";

export const MobileMenu = () => {
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
                            <Link to="/catalog">Catalog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/user/myCollection">My Collection</Link>
                        </li>
                            {/* TODO: if guest */}
                        <li>
                            <Link to="/authentication/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/authentication/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};