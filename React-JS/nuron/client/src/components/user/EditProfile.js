import { Link } from "react-router-dom";

export const EditProfile = () => {
    return (
        <>
            <div className="rn-breadcrumb-inner ptb--30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h5 className="title text-center text-md-start">Edit Profile</h5>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-list">
                                <li className="item"><Link to="/">Home</Link></li>
                                <li className="separator"><i className="feather-chevron-right"></i></li>
                                <li className="item current">Edit Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="edit-profile-area rn-section-gapTop">
                <div className="container">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                            <h4 className="title-left">Edit Your Profile</h4>
                        </div>
                    </div>
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-3 col-md-3 col-sm-12">

                            <nav className="left-nav rbt-sticky-top-adjust-five">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i className="feather-edit"></i>Edit Profile Image</button>
                                    <button className="nav-link" id="nav-home-tabs" data-bs-toggle="tab" data-bs-target="#nav-homes" type="button" role="tab" aria-controls="nav-homes" aria-selected="false"><i className="feather-user"></i>Personal Information</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> <i className="feather-unlock"></i>Change Password</button>
                                </div>
                            </nav>

                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <div className="tab-content tab-content-edit-wrapepr" id="nav-tabContent">


                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                    <div className="nuron-information">

                                        <div className="profile-change row g-5">
                                            <div className="profile-left col-lg-4">
                                                <div className="profile-image mb--30">
                                                    <h6 className="title">Change Your Profile Picture</h6>
                                                    <img id="rbtinput1" src="/images/profile/profile-01.jpg" alt="Profile-NFT" />
                                                </div>
                                                <div className="button-area">
                                                    <div className="brows-file-wrapper">

                                                        <input name="fatima" id="fatima" type="file" />

                                                        <label htmlFor="fatima" title="No File Choosen">
                                                            <span className="text-center color-white">Upload</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="tab-pane fade" id="nav-homes" role="tabpanel" aria-labelledby="nav-home-tab">

                                    <div className="nuron-information">

                                        <div className="profile-form-wrapper">
                                            <div className="input-two-wrapper mb--15">
                                                <div className="first-name half-wid">
                                                    <label htmlFor="contact-name" className="form-label">First Name</label>
                                                    <input name="contact-name" id="contact-name" type="text" defaultValue="First Name..." />
                                                </div>
                                                <div className="last-name half-wid">
                                                    <label htmlFor="contact-name-last" className="form-label">Last Name</label>
                                                    <input name="contact-name" id="contact-name-last" type="text" defaultValue="Last Name..." />
                                                </div>
                                            </div>
                                            <div className="email-area">
                                                <label htmlFor="Email" className="form-label">Edit Your Email</label>
                                                <input name="email" id="Email" type="email" defaultValue="example@mail.com" />
                                            </div>
                                        </div>



                                        <div className="edit-bio-area mt--20">
                                            <label htmlFor="Discription" className="form-label">Edit Your Bio</label>
                                            <textarea id="Discription">Hello, I am Anatoli, A Front-end Developer...</textarea>
                                        </div>

                                        <div className="edit-bio-area mt--20">
                                            <div className="half-wid phone-number">
                                                <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
                                                <input name="contact-name" id="PhoneNumber" type="text" defaultValue="+880100000000" />
                                            </div>
                                        </div>

                                        <div className="button-area save-btn-edit">
                                            <Link to="#" className="btn btn-primary" onclick="customAlert.alert('Successfully Saved Your Profile?')">Save</Link>
                                        </div>

                                    </div>

                                </div>


                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                    <div className="nuron-information">
                                        <div className="condition">
                                            <h5 className="title">Create Your Password</h5>
                                            <p className="condition">
                                                Passwords are a critical part of information and network security. Passwords
                                                serve to protect user accounts but a poorly chosen password, if compromised,
                                                could put the entire network at risk.
                                            </p>
                                            <hr />
                                            <div className="email-area">
                                                <label htmlFor="Email2" className="form-label">Enter Email</label>
                                                <input name="email" id="Email2" type="email" defaultValue="" />
                                            </div>
                                        </div>
                                        <div className="input-two-wrapper mt--15">
                                            <div className="old-password half-wid">
                                                <label htmlFor="oldPass" className="form-label">Enter Old Password</label>
                                                <input name="pass" id="oldPass" type="password" />
                                            </div>
                                            <div className="new-password half-wid">
                                                <label htmlFor="NewPass" className="form-label">Create New Password</label>
                                                <input name="password" id="NewPass" type="password" />
                                            </div>
                                        </div>
                                        <div className="email-area mt--15">
                                            <label htmlFor="rePass" className="form-label">Confirm Password</label>
                                            <input name="Password" id="rePass" type="password" defaultValue="" />
                                        </div>
                                        <Link to="#" className="btn btn-primary save-btn-edit" onclick="customAlert.alert('Successfully Changed Password?')">Save</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};