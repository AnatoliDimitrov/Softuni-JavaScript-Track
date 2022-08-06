import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import axios from 'axios';

import { AuthContext } from "../../../services/AuthContext";

import auth from '../../../services/authentication.js';
import constants from '../../../services/constants';

export const Details = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { nftId } = useParams();
    const [nft, setNft] = useState({ likers: [] });

    useEffect(() => {
        const prom = auth.getOne(nftId)
            .then(result => {
                setNft(result.nft)
            });
    }, []);

    const onSubmitBuyHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("buyer", user._id);

        const owner = user._id;

        const url = `${constants.NFTS}/buy/${nftId}`;
        setNft(old => ({...nft, owner }))

        try {
            const res = axios.put(
                url,
                formData
            ).then(res => {
                navigate('/user/my-collection');
            });
        } catch (ex) {
        }
    }

    const onSubmitLikeHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("liker", user._id);

        let likers = nft.likers;
        likers.push(user._id);

        const url = `${constants.NFTS}/like/${nftId}`;
        setNft(old => ({...nft, likers }))

        try {
            const res = axios.put(
                url,
                formData
            ).then(res => {
            });
        } catch (ex) {
        }
    }

    const onSubmitDislikeHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("desliker", user._id);

        let likers = nft.likers;
        const index = likers.indexOf(user._id);
        likers.splice(index, 1);

        const url = `${constants.NFTS}/dislike/${nftId}`;
        setNft(old => ({...nft, likers }))

        try {
            const res = axios.put(
                url,
                formData
            ).then(res => {
            });
        } catch (ex) {
        }
    }

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
                                                <img src={nft.imageUrl} alt="Nft_Profile" />
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
                                    <h4 className="title">{nft.name}</h4>
                                    <div className="heart-count">
                                        <span>{nft.likers.length} Likes</span>
                                    </div>
                                </div>

                                <div className="place-bet-area">
                                    <h4>Description</h4>
                                    <p>{nft.description}</p>
                                </div>

                                <h6 className="title-name">
                                    Price <span className="price">{nft.price}$</span>
                                </h6>

                                <div className="rn-bid-details">
                                    <div className="tab-wrapper-one">
                                        <nav className="tab-button-one">
                                            {user.email
                                                ?
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    {user._id == nft.owner
                                                        ?
                                                        <>
                                                            <Link to={`/product/edit/${nft._id}`}><button className="nav-link active" id="nav-home-tab" type="button" role="tab" aria-controls="nav-home">Edit</button></Link>
                                                            <Link to={`/product/delete/${nft._id}`}><button className="nav-link" id="nav-profile-tab" type="button" role="tab" aria-controls="nav-profile">Delete</button></Link>
                                                        </>
                                                        :
                                                        <>
                                                            <button
                                                            onClick={onSubmitBuyHandler}
                                                                type="button"
                                                                className="nav-link active"
                                                            >
                                                                Buy
                                                            </button>
                                                            {!nft.likers.includes(user._id)
                                                                ?
                                                                <button
                                                                onClick={onSubmitLikeHandler}
                                                                    type="button"
                                                                    className="nav-link active"
                                                                >
                                                                    Like
                                                                </button>
                                                                :
                                                                <button
                                                                onClick={onSubmitDislikeHandler}
                                                                    type="button"
                                                                    className="nav-link"
                                                                >
                                                                    Dislike
                                                                </button>
                                                            }
                                                            
                                                        </>
                                                    }
                                                </div>
                                                : ''
                                            }

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