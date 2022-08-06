import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useContext } from "react";

import { AuthContext } from "../../../services/AuthContext";

import styles from './edit.module.css';
import constants from '../../../services/constants.js';
import auth from '../../../services/authentication.js';

export const Edit = () => {
    const { user } = useContext(AuthContext);

    const { nftId } = useParams();
    const [nft, setNft] = useState({});
    const [state, setState] = useState(false);
    const [regError, setRegError] = useState('');

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
        owner: nft.owner,
    });

    useEffect(() => {
        setValues({
            name: nft.name,
            description: nft.description,
            price: nft.price,
            imageUrl: nft.imageUrl,
            picture: '',
            pictureName: '',
            owner: user._id,
        });
    }, [nft]);

    console.log(values);


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const minLength = (e, min) => {
        if (values[e.target.name].length < min) {
            setErrors(state => ({
                ...state,
                [e.target.name]: true,
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: false,
            }))
        }
    };

    const minPrice = (e) => {
        if (values.price < 1) {
            setErrors(state => ({
                ...state,
                price: true,
            }))
        } else {
            setErrors(state => ({
                ...state,
                price: false,
            }))
        }
    };

    const saveFile = (e) => {
        setValues(state => ({
            ...state,
            picture: e.target.files[0]
        }));
        setValues(state => ({
            ...state,
            pictureName: e.target.files[0].name
        }));

        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("name", values.name);
        formData.append("imageUrl", values.imageUrl || nft.imageUrl);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("owner", values.owner);

        const url = `${constants.NFTS}/${nftId}`;

        try {
            const res = axios.put(
                url,
                formData
            ).then(res => {
                if (res.data.error) {
                    const pattern = /(Path `)(.*?)(`)/g;
                    const errors = res.data.error.replace(pattern, '');
                    setRegError(errors);
                    setErrors(state => ({
                        ...state,
                        createError: true,
                        first: false,
                    }));

                    setState(false);
                    return;
                } else {
                    navigate('/user/my-collection');
                }
            });
        } catch (ex) {
            setErrors(state => ({
                ...state,
                serverError: true,
                first: false,
            }));
        }
    }

    let isValidForm = Object.values(errors).some(x => x);

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
                                            Upload file
                                        </h6>
                                        <p className="formate">
                                            Drag or choose your file to upload
                                        </p>
                                    </div>

                                    <div className="brows-file-wrapper">

                                        <input name="picture"
                                            id="createinputfile"
                                            type="file"
                                            className="inputfile"
                                            onChange={saveFile}
                                        />
                                        <img
                                            id="createfileImage" 
                                            src={values.imageUrl
                                                ? values.imageUrl
                                                : "/images/portfolio/portfolio-05.jpg"
                                            }
                                            alt=""
                                            data-black-overlay="6"
                                        />

                                        <label htmlFor="createinputfile" title="No File Choosen">
                                            <i className="feather-upload"></i>
                                            <span className="text-center">Choose a File</span>
                                            <p className="text-center mt--10">PNG, GIF, WEBP, MP4 or MP3. <br />    Max 1Gb.</p>
                                        </label>
                                    </div>
                                </div>


                                <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                                    <h5> Note: </h5>
                                    <span> Service fee : <strong>2.5%</strong> </span> <br />
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
                                                onChange={changeHandler}
                                                onBlur={(e) => minLength(e, 2)}
                                                value={values.name}
                                            />
                                            {errors.name &&
                                                <p className={styles.formError}>
                                                    Name should be at least 2 characters long!
                                                </p>
                                            }
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="Discription" className="form-label">Discription</label>
                                            <textarea
                                                id="Discription"
                                                rows="3"
                                                name="description"
                                                onChange={changeHandler}
                                                value={values.description}
                                                onBlur={(e) => minLength(e, 10)}
                                            >
                                            </textarea>
                                            {errors.description &&
                                                <p className={styles.formError}>
                                                    Description should be at least 10 characters long!
                                                </p>
                                            }
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-box pb--20">
                                            <label htmlFor="dollerValue" className="form-label">Item Price in $</label>
                                            <input
                                                id="dollerValue"
                                                type="number"
                                                name="price"
                                                onChange={changeHandler}
                                                value={values.price}
                                                onBlur={minPrice}
                                            />
                                            {errors.price &&
                                                <p className={styles.formError}>
                                                    Price should be at positive number!
                                                </p>
                                            }
                                        </div>
                                    </div>

                                    <input type="hidden" name="imageUrl" onChange={changeHandler} value={values.imageUrl} />

                                    <div className="col-md-12">
                                        <div className="input-box">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-large w-100"
                                                disabled={isValidForm}
                                            >
                                                Submit Item
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