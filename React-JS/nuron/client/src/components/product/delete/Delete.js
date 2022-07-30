import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import styles from './delete.module.css';
import constants from '../../../services/constants.js';
import auth from '../../../services/authentication.js';

export const Delete = ({props}) => {

    const { nftId } = useParams();
    const [nft, setNft] = useState({});

    useEffect(() => {
        auth.getOne(nftId)
            .then(result => {
                setNft(result.nft);
            });
    }, [nftId]);

    console.log(nft);

    const [values, setValues] = useState({
        name: nft.name,
        description: nft.description,
        price: nft.price,
        imageUrl: nft.imageUrl,
        picture: '',
        pictureName: '',
        owner: 'Anatoli Dimitrov',
    });

    useEffect(() => {
        setValues({
            name: nft.name,
            description: nft.description,
            price: nft.price,
            imageUrl: nft.imageUrl,
            picture: '',
            pictureName: '',
            owner: 'Anatoli Dimitrov',
        });
    }, [nft]);

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const url = `${constants.NFTS}/${nftId}`;

        try {
            const res = axios.delete(
                url,
            ).then(navigate('/user/my-collection'));
        } catch (ex) {
            console.log(ex);
        }
    }
    
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Add NFT</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Add NFT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <form onSubmit={onSubmitHandler} className="row">

                <div className="create-area rn-section-gapTop">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">

                                <div className="upload-area">

                                    <div className="upload-formate mb--30">
                                        <h6 className="title">
                                            Are you sure
                                        </h6>
                                        <p className="formate">
                                            You want to DELETE this item?
                                        </p>
                                    </div>

                                    <div className="brows-file-wrapper">

                                        <input name="picture"
                                            id="createinputfile"
                                            type="file"
                                            disabled
                                            className="inputfile"
                                        />
                                        <img 
                                            id="createfileImage" src={values.imageUrl
                                                ? values.imageUrl
                                                :"/images/portfolio/portfolio-05.jpg"
                                            } 
                                            alt="" 
                                            data-black-overlay="6" 
                                            />

                                        <label htmlFor="createinputfile" title="No File Choosen">
                                        </label>
                                    </div>
                                </div>


                            </div>

                            <div className="col-lg-7">
                                <div className="form-wrapper-one">

                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="name" className="form-label">Product Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                disabled
                                                value={values.name}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="Discription" className="form-label">Discription</label>
                                            <textarea
                                                id="Discription"
                                                rows="3"
                                                name="description"
                                                disabled
                                                value={values.description}
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-box pb--20">
                                            <label htmlFor="dollerValue" className="form-label">Item Price in $</label>
                                            <input
                                                id="dollerValue"
                                                type="number"
                                                name="price"
                                                disabled
                                                value={values.price}
                                            />
                                        </div>
                                    </div>

                                    <input type="hidden" name="imageUrl" value={values.imageUrl} />

                                    <div className="col-md-12">
                                        <div className="input-box">
                                            <button
                                                type="submit"
                                                className="btn btn-danger btn-large w-100"
                                            >
                                                Delete Item
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                                <h5> Note: </h5>
                                <span> Service fee : <strong>2.5%</strong> </span> <br />
                                <span> You will receive : <strong>25.00 ETH $50,000</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};