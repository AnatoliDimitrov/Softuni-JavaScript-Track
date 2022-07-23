import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
        <div className="slider-one rn-section-gapTop">
            <div className="container">
                <div className="row row-reverce-sm align-items-center">
                    <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                        <h2 className="title">Discover Digital Art, Collect and Sell Your Specific NFTs.</h2>
                        <p className="slide-disc">Partner with one of the world’s largest retailers to showcase your brand and
                            products.</p>
                        <div className="button-group">
                            {/* TODO: if guest */}
                            <Link to="#" className="btn btn-large btn-primary">Get Started</Link>
                            {/* TODO: if user */}
                            <Link to="/product/create" className="btn btn-large btn-primary-alta" >Create</Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                        <div className="slider-thumbnail">
                            <img src="/images/slider/slider-1.png" alt="Slider Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rn-collection-area rn-section-gapTop">
            <div className="container">
                <div className="row mb--50 align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h3 className="title mb--0" >Catalog</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                        <div className="view-more-btn text-start text-sm-end" >
                            <Link to="#" className="btn-transparent">VIEW ALL</Link>
                        </div>
                    </div>
                </div>

                <div className="row g-5">
                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <Link to="/product/details" className="rn-collection-inner-one">
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

                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <Link to="/product/details" className="rn-collection-inner-one">
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

                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <Link to="/product/details" className="rn-collection-inner-one">
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

                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <Link to="/product/details" className="rn-collection-inner-one">
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