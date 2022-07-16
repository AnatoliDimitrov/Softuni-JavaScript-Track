import { Link } from "react-router-dom";

export const Catalog = () => {
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Products</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-product-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <Link to="/product-details"><img src="/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio" /></Link>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="share-btn share-btn-activation dropdown">

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <Link to="/product-details"><span className="product-name">Preatent</span></Link>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};