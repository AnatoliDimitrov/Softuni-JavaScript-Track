import { Link } from "react-router-dom";

export const MyCollection = () => {
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">My Collection</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Collection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rn-collection-area rn-section-gapTop">
                <div class="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <Link to="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-01.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Cubic Trad</h6>
                                        <span className="items">27 Likes</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <Link to="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-03.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Diamond Dog</h6>
                                        <span className="items">20 Likes</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <Link to="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-02.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Morgan11</h6>
                                        <span className="items">15 Likes</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <Link to="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-04.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Orthogon#720</h6>
                                        <span className="items">10 Likes</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};