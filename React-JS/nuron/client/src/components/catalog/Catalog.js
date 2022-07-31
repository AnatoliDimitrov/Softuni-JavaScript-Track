import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import auth from '../../services/authentication.js';
import { CatalogNft } from "./CatalogNft.js";

export const Catalog = () => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        const prom = auth.getNfts()
            .then(result => {
                setNfts(result.nfts)
            });
    }, []);

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

                        {nfts.length > 0
                            ? nfts.map(n => <CatalogNft key={n._id} nft={n} />)
                            : <h5>There are no NFTs yet...</h5>
                        }

                    </div>
                </div>
            </div>
        </>
    );
};