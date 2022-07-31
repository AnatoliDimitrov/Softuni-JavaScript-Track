import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import axios from 'axios';

import { AuthContext } from "../../services/AuthContext";
import constants from '../../services/constants';

import styles from './register.module.css';

export const Login = () => {
    const { userAuth } = useContext(AuthContext);
    const [state, setState] = useState(false);

    const [values, setValues] = useState({
        email: '',
        password: '',
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

    const checkEmail = (e) => {
        const pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!pattern.test(values.email)) {
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
        setState(true);
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);

        try {
            const res = axios.post(
                constants.USERS_LOGIN,
                formData
            );

            const result = await res;
            if (result.data.error) {
                setErrors(state => ({
                ...state,
                invalidLogin: true,
                first: false,
                }));
            } else {
                userAuth(result.data);
                navigate('/');
            }
        } catch (ex) {
            setErrors(state => ({
                ...state,
                serverError: true,
                first: false,
                }));
        }

        setState(false);
    }

    let isValidForm = Object.values(errors).some(x => x);
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
                                <form onSubmit={onSubmitHandler}>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            id="exampleInputEmail1"
                                            name="email"
                                            onChange={changeHandler}
                                            value={values.email}
                                            onBlur={checkEmail}
                                        />
                                        {errors.email &&
                                            <p className={styles.formError}>
                                                Email should be valid!
                                            </p>
                                        }
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="exampleInputPassword1"
                                            name="password"
                                            onChange={changeHandler}
                                            onBlur={(e) => minLength(e, 3)}
                                            value={values.password}
                                        />
                                        {errors.password &&
                                            <p className={styles.formError}>
                                                Password should be at least 3 characters long!
                                            </p>
                                        }
                                    </div>
                                        {errors.invalidLogin &&
                                            <p className={styles.formError}>
                                                Invalid username or password!
                                            </p>
                                        }
                                        {errors.serverError &&
                                            <p className={styles.formError}>
                                                Something went wrong please try again later!
                                            </p>
                                        }
                                    <button type="submit" className="btn btn-primary mr--15" disabled={state}>{state?'Loading...':'Log In'}</button>
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