import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
        <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-content-wrapper">
                        <div className="footer-left">
                            <div className="logo-thumbnail logo-custom-css">
                                <Link to="/"className="logo-light" ><img src="/images/logo/logo-white.png" alt="nft-logo" /></Link>
                                <Link to="/"className="logo-dark" ><img src="/images/logo/logo-dark.png" alt="nft-logo" /></Link>
                            </div>
                            <p className="rn-footer-describe">
                                Created with the collaboration of over 60 of the world's best Nuron Artists.
                            </p>
                        </div>
                        {/* <div className="widget-bottom mt--40 pt--40">
                            <h6 className="title">Get The Latest Nuron Updates </h6>
                            <div className="input-group">
                                <input type="text" className="form-control bg-color--2" placeholder="Your username" aria-label="Recipient's username" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary-alta btn-outline-secondary" type="button">Subscribe</button>
                                </div>
                            </div>
                            <div className="newsletter-dsc">
                                <p>Email is safe. We don't spam.</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
                    <div className="footer-widget widget-quicklink">
                        <h6 className="widget-title">Nuron</h6>
                        <ul className="footer-list-one">
                            <li className="single-list"><Link to="#">Protocol Explore</Link></li>
                            <li className="single-list"><Link to="#">System Token</Link></li>
                            <li className="single-list"><Link to="#">Otimize Time</Link></li>
                            <li className="single-list"><Link to="#">Visual Checking</Link></li>
                            <li className="single-list"><Link to="#">Fadeup System</Link></li>
                            <li className="single-list"><Link to="#">Activity Log</Link></li>
                            <li className="single-list"><Link to="#">System Auto Since</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                    <div className="footer-widget widget-information">
                        <h6 className="widget-title">Information</h6>
                        <ul className="footer-list-one">
                            <li className="single-list"><Link to="#">Market Explore</Link></li>
                            <li className="single-list"><Link to="#">Ready Token</Link></li>
                            <li className="single-list"><Link to="#">Main Option</Link></li>
                            <li className="single-list"><Link to="#">Product Checking</Link></li>
                            <li className="single-list"><Link to="blog.html">Blog Grid</Link></li>
                            <li className="single-list"><Link to="about.html">About Us</Link></li>
                            <li className="single-list"><Link to="#">Fix Bug </Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                    <div className="footer-widget">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="copyright-left">
                        <span>©2022 Nuron, Inc. All rights reserved.</span>
                        <ul className="privacy">
                            <li><Link to="/terms">Terms</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="mouse-cursor cursor-outer"></div>
    <div className="mouse-cursor cursor-inner"></div>

    <div className="rn-progress-parent">
        <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    </>
    );
};