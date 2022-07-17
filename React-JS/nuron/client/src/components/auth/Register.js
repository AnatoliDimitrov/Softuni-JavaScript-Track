import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Nuron Sign Up</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Sign Up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-area rn-section-gapTop">
                <div className="container">
                    <div className="row g-5">
                        <div className="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                            <div className="form-wrapper-one registration-area">
                                <h4>Sign up</h4>
                                <form>
                                    <div className="mb-5">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" id="firstName" name="firstName" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="sastName" className="form-label">Last name</label>
                                        <input type="email" id="sastName" name="lastName" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" id="exampleInputEmail1" name="email" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="newPassword" className="form-label">Create Password</label>
                                        <input type="password" id="newPassword" name="password" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Re Password</label>
                                        <input type="password" id="exampleInputPassword1" name="repeatPassword" />
                                    </div>
                                    <div className="mb-5 rn-check-box">
                                        <input type="checkbox" className="rn-check-box-input" id="exampleCheck1" />
                                        <label className="rn-check-box-label" htmlFor="exampleCheck1">Allow to all tearms & condition</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr--15">Sign Up</button>
                                    <Link to="/authentication/login" className="btn btn-primary-alta">Log In</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};