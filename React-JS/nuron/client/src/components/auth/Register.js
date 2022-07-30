import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import axios from 'axios';

import { AuthContext } from "../../services/AuthContext";
import constants from '../../services/constants';

export const Register = () => {

    const {userAuth} = useContext(AuthContext);

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ first: true });

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
                first: false,
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: false,
                first: false,
            }))
        }
    };

    const checkRepeatPassword = (e) => {
        if (values.password !== values.repeatPassword) {
            setErrors(state => ({
                ...state,
                [e.target.name]: true,
                first: false,
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: false,
                first: false,
            }))
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("repeatPassword", values.repeatPassword);

        try {
            const res = axios.post(
                constants.USERS,
                formData
            );

            const result = await res;
            console.log(result.data);
            userAuth(result.data);
            navigate('/');
        } catch (ex) {
            console.log(ex);
        }
    }

    let isValidForm = Object.values(errors).some(x => x);

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
                                <form onSubmit={onSubmitHandler}>
                                    <div className="mb-5">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Anatoli"
                                            onChange={changeHandler}
                                            onBlur={(e) => minLength(e, 2)}
                                            value={values.firstName}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Dimitrov"
                                            onChange={changeHandler}
                                            onBlur={(e) => minLength(e, 2)}
                                            value={values.lastName}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            id="exampleInputEmail1"
                                            name="email"
                                            placeholder="example@example.com"
                                            onChange={changeHandler}
                                            onBlur={(e) => minLength(e, 2)}
                                            value={values.email}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="newPassword" className="form-label">Create Password</label>
                                        <input
                                            type="password"
                                            id="newPassword"
                                            name="password"
                                            onChange={changeHandler}
                                            onBlur={(e) => minLength(e, 3)}
                                            value={values.password}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Repeat Password</label>
                                        <input
                                            type="password"
                                            id="exampleInputPassword1"
                                            name="repeatPassword"
                                            onChange={changeHandler}
                                            onBlur={checkRepeatPassword}
                                            value={values.repeatPassword}
                                        />
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