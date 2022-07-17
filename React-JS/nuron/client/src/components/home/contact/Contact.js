import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Contact With Us</h5>
                        </div>
                        
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item"><Link to="/">Home</Link></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                        <li class="item current">Contact</li>
                    </ul>
                </div>
                    </div>
                </div>
            </div>


            <div className="rn-contact-top-area rn-section-gapTop bg_color--5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title mb--30 text-center">
                                <h2 className="title">Quick Contact Address</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-address">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-headphones">
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z">
                                </path>
                            </svg>
                        </div>
                        <div className="inner">
                            <h4 className="title">Contact Phone Number</h4>
                            <p><a href="tel:+444555666777">+444 555 666 777</a></p>
                            <p><a href="tel:+222222222333">+222 222 222 333</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-address">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className="inner">
                            <h4 className="title">Our Email Address</h4>
                            <p><a href="mailto:info@nuron.com">info@nuron.com</a></p>
                            <p><a href="mailto:support@nuron.com">support@nuron.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-address">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-map-pin">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className="inner">
                            <h4 className="title">Our Location</h4>
                            <p>Independence Boulevardx, Sofia 1000 <br /> Bulgaria</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </>
    );
};