import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Nuron Login</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Nuron Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className=" offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                            <div className="form-wrapper-one">
                                <h4>Login</h4>
                                <form method="POST">
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" id="exampleInputEmail1" name="email"/>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" id="exampleInputPassword1" name="password"/>
                                    </div>
                                    <div className="mb-5 rn-check-box">
                                        <input type="checkbox" className="rn-check-box-input" id="exampleCheck1" />
                                        <label className="rn-check-box-label" htmlFor="exampleCheck1">Remember me leter</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr--15">Log In</button>
                                    <Link to="/authentication/register" className="btn btn-primary-alta">Sign Up</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};