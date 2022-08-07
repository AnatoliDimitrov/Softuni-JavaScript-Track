import { Navigate, Outlet, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../services/AuthContext";
import auth from '../../services/authentication.js';

const OwnerRouteGuard = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { nftId } = useParams();
    const [nft, setNft] = useState({});

    auth.getOne(nftId)
    .then(result => {
        setNft(result.nft);
    });

    if (user._id != nft.owner) {
        return <Navigate to="/product/catalog" replace />
    }

    return children ? children : <Outlet />;
}

export default OwnerRouteGuard;