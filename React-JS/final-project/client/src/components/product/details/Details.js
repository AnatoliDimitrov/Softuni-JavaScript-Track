import { Link } from "react-router-dom";

export const Details = (props) => {
    return (
        <>

            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Product Details</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="product-details-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">


                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="product-tab-wrapper rbt-sticky-top-adjust">
                                <div className="pd-tab-inner">

                                    <div className="tab-content rn-pd-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="rn-pd-thumbnail">
                                                <img src="/images/portfolio/lg/portfolio-01.jpg" alt="Nft_Profile" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <div className="rn-pd-thumbnail">
                                                <img src="/images/portfolio/lg/portfolio-02.jpg" alt="Nft_Profile" />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <div className="rn-pd-thumbnail">
                                                <img src="/images/portfolio/lg/portfolio-03.jpg" alt="Nft_Profile" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                            <div className="rn-pd-content-area">
                                <div className="pd-title-area">
                                    <h4 className="title">The Amazing Game</h4>
                                    <div className="heart-count">
                                        <span>33 Likes</span>
                                    </div>
                                </div>

                                <div class="place-bet-area">
                                    <h4>Description</h4>
                                    <p>Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed
                                        posuere
                                        massa nunc quis
                                        dui.
                                        Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
                                        nisi.
                                        Curabitur sit
                                        amet
                                        suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc
                                        imperdiet risus
                                        leo,
                                        in rutrum erat dignissim id.</p>
                                </div>

                                <h6 class="title-name">
                                    Price <span class="price">0.11$</span>
                                </h6>

                                <div className="rn-bid-details">
                                    <div className="tab-wrapper-one">
                                        <nav className="tab-button-one">
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <Link to="/product/edit"><button className="nav-link active" id="nav-home-tab" type="button" role="tab" aria-controls="nav-home">Edit</button></Link>
                                                <button className="nav-link" id="nav-profile-tab" type="button" role="tab" aria-controls="nav-profile">Delete</button>
                                                <button class="nav-link active" id="nav-contact-tab" type="button" role="tab" aria-controls="nav-contact">Buy</button>
                                                <button class="nav-link" id="nav-like-tab" type="button" role="tab" aria-controls="nav-like">Like</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content rn-bid-content" id="nav-tabContent">
                                            <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="top-seller-inner-one">
                                                    <div className="top-seller-wrapper">
                                                        <div className="thumbnail">
                                                            <Link to="#"><img src="/images/client/client-3.png" alt="Nft_Profile" /></Link>
                                                        </div>
                                                        <div className="top-seller-content">
                                                            <span>0.11wETH by <Link to="#">Allen Waltker</Link></span>
                                                            <span className="count-number">
                                                                1 hours ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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