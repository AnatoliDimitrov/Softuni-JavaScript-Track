import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../services/AuthContext";

import auth from '../../services/authentication.js';
import { HomeNft } from "./HomeNft.js";

export const Home = () => {
    const { user } = useContext(AuthContext);
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        const prom = auth.getNfts()
            .then(result => {
                setNfts(result.nfts)
            });
    }, []);

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
                                {user.email
                                    ?<Link to="/product/create" className="btn btn-large btn-primary-alta" >Create</Link>
                                    :<Link to="/authentication/register" className="btn btn-large btn-primary">Get Started</Link>
                                }
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
                                <Link to="/product/catalog" className="btn-transparent">VIEW ALL</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">

                        {nfts.length > 0
                            ? nfts.map(n => <HomeNft key={n._id} nft={n} />)
                            : <h5>There are no NFTs yet...</h5>
                        }

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="row g-5">
                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-1">
                            <div className="inner">
                                <div className="icon">
                                    <img src="/images/icons/shape-1.png" alt="Shape" />
                                </div>
                                <div className="subtitle">Step-01</div>
                                <div className="content">
                                    <h4 className="title"><Link to="/product/create">Create your collection</Link></h4>
                                    <p className="description">A great collection of beautiful website templates for your need.
                                        Choose the best suitable template.</p>
                                    <Link to="/product/create" className="read-more-button" ><i className="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                            <Link to="/product/create" className="over-link"></Link>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-5">
                            <div className="inner">
                                <div className="icon">
                                    <img src="/images/icons/shape-5.png" alt="Shape" />
                                </div>
                                <div className="subtitle">Step-02</div>
                                <div className="content">
                                    <h4 className="title"><Link to="/product/create">Add your NFT's</Link></h4>
                                    <p className="description">Add your NFT in the biggest marketplace on the globe.</p>
                                    <Link to="/product/create" className="read-more-button"><i className="feather-arrow-right"></i></Link>
                                </div>
                            </div>
                            <Link to="/product/create" className="over-link" ></Link>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-6">
                            <div className="inner">
                                <div className="icon">
                                    <img src="/images/icons/shape-6.png" alt="Shape" />
                                </div>
                                <div className="subtitle">Step-03</div>
                                <div className="content">
                                    <h4 className="title">Sell Your NFT's</h4>
                                    <p className="description">I throw myself down among the tall grass by the stream as I
                                        lie close to the earth NFT's.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};