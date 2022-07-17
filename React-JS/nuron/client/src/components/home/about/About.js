import { Link } from "react-router-dom";

export const About = () => {
    return (
        <>
            <div className="rn-about-banner-area rn-section-gapTop">
                <div className="container mb--30">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title about-title-m" >Direct Teams. <br />For Your Dadicated Dreams</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid about-fluidimg ">
                    <div className="row">
                        <div className="img-wrapper">
                            <div className="bg_image--22 bg_image">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="h--100">
                                <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                                    <div className="inner">
                                        <h2 className="title">
                                            Why We Do This
                                        </h2>
                                        <p className="about-disc">
                                            NFTs are virtual tokens that represent ownership of something inherently distinct and
                                            scarce, whether it be a physical or digital item, such as artwork, a soundtrack, a
                                            collectible, an in-game item or real estate. Unlike regular cryptocurrencies like
                                            bitcoin or fiat money like the U.S.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rn-about-card transparent-bg">
                                <div className="inner">
                                    <h3 className="title">
                                        Helping You <br />Grow In Every Stage.
                                    </h3>
                                    <p className="about-disc mb--0">
                                        NFTs are virtual tokens that represent ownership of something inherently distinct and
                                        scarce, whether it be a physical or digital item, such as artwork, a soundtrack, a
                                        collectible, an in-game item or real estate. Unlike regular cryptocurrencies like
                                        bitcoin or fiat money like the U.S.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rn-about-Quote-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5 d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="rn-about-title-wrapper">
                                <h3 className="title">Create, Sell well and Collect your Wonderful NFTs at Nuron Very Fast</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rn-about-wrapper">
                                <p>The NFTs is a one-trick pony that climbed the ladders of success in recent years. The growth
                                    of NFTs is tremendous, and according to Pymnts.com, the total sales volume of NFTs has
                                    nearly crossed $2.5 billion in the last six months of . Surprisingly, the total sales
                                    volume of NFTs was $13.7 million in 2020. On comparing both the values,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rn-statistick-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--30">
                        <div className="col-12 text-center">
                            <h3>Nuron Statistics</h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="single-counter-up text-center">
                                <h3 className="counter"><span className="odometer" data-count="309">00</span>
                                </h3>
                                <div className="botton-title">Nuron All NFT's</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-counter-up text-center">
                                <h3 className="counter"><span className="odometer" data-count="508">00</span>
                                </h3>
                                <div className="botton-title">All Users</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="rn-callto-action rn-section-gapTop">
                <div className="container-fluid about-fluidimg-cta">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg_image--6 bg_image bg-image-border" data-black-overlay="7">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="call-to-action-wrapper">
                                            <h3>Discover
                                                rare digital art <br />
                                                    and collect NFTs</h3>
                                            <p>The NFTs is a one-trick pony that climbed the recent years. The growth of NFTs is
                                                tremendous, and according to Pymnts.com, the total sales volume </p>
                                            <div className="callto-action-btn-wrapper">
                                                <Link to="/create.html" className="btn btn-primary btn-large">Create</Link>
                                                <Link to="/contact.html" className="btn btn-primary-alta btn-large">Contact Us</Link>
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