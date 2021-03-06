import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <>
            <div className="rn-not-found-area rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-not-found-wrapper">
                                <h2 className="large-title">404</h2>
                                <h3 className="title">Page not found!</h3>
                                <p>The page you are looking for is not available.</p>
                                <Link to="/" className="btn btn-primary btn-large">Go Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};