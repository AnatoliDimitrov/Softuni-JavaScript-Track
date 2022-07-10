export const IndexList = () => {
    return (
        <div className="rn-collection-area rn-section-gapTop">
            <div className="container">
                <div className="row mb--50 align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h3 className="title mb--0" >Catalog</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                        <div className="view-more-btn text-start text-sm-end" >
                            <a className="btn-transparent" href="#">VIEW ALL</a>
                        </div>
                    </div>
                </div>

                <div className="row g-5">
                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <a href="product-details.html" className="rn-collection-inner-one">
                            <div className="collection-wrapper">
                                <div className="collection-big-thumbnail">
                                    <img src="/images/collection/collection-lg-01.jpg" alt="Nft_Profile" />
                                </div>
                                <div className="collection-deg">
                                    <h6 className="title">Cubic Trad</h6>
                                    <span className="items">27 Items</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <a href="product-details.html" className="rn-collection-inner-one">
                            <div className="collection-wrapper">
                                <div className="collection-big-thumbnail">
                                    <img src="/images/collection/collection-lg-03.jpg" alt="Nft_Profile" />
                                </div>
                                <div className="collection-deg">
                                    <h6 className="title">Diamond Dog</h6>
                                    <span className="items">20 Items</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <a href="product-details.html" className="rn-collection-inner-one">
                            <div className="collection-wrapper">
                                <div className="collection-big-thumbnail">
                                    <img src="/images/collection/collection-lg-02.jpg" alt="Nft_Profile" />
                                </div>
                                <div className="collection-deg">
                                    <h6 className="title">Morgan11</h6>
                                    <span className="items">15 Items</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                        <a href="product-details.html" className="rn-collection-inner-one">
                            <div className="collection-wrapper">
                                <div className="collection-big-thumbnail">
                                    <img src="/images/collection/collection-lg-04.jpg" alt="Nft_Profile" />
                                </div>
                                <div className="collection-deg">
                                    <h6 className="title">Orthogon#720</h6>
                                    <span className="items">10 Items</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};