import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import auth from '../../services/authentication.js';

import { OwnNft } from "./OwnNft.js";

export const MyCollection = () => {
    const [nfts, setNfts] = useState([]);
    
    useEffect(() => {
        const prom = auth.getNfts()
        .then( result => {
            setNfts( result.nfts )
        });
    }, []);

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

            <div className="rn-collection-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        {nfts.length > 0
                            ? nfts.filter(x => x.owner == 'Anatoli Dimitrov').map(n => <OwnNft key={n._id} nft={n}/>)
                            : <h5>There are no NFTs yet...</h5>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};