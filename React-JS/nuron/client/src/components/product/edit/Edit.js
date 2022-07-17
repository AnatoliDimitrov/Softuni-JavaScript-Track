import { Link } from "react-router-dom";

export const Edit = () => {
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
                                    <input name="createinputfile" id="createinputfile" type="file" className="inputfile" />
                                    <img id="createfileImage" src="/images/portfolio/portfolio-05.jpg" alt="" data-black-overlay="6" />

                                    <label htmlFor="createinputfile" title="No File Choosen">
                                        <i className="feather-upload"></i>
                                        <span className="text-center">Choose a File</span>
                                        <p className="text-center mt--10">PNG, GIF, WEBP, MP4 or MP3. <br />    Max 1Gb.</p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="form-wrapper-one">
                                <form className="row" action="#">
                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="name" className="form-label">Product Name</label>
                                            <input id="name" placeholder="e. g. `Digital Awesome Game`" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label htmlFor="Discription" className="form-label">Discription</label>
                                            <textarea id="Discription" rows="3" placeholder="e. g. “After purchasing the product you can get item...”"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="input-box pb--20">
                                            <label htmlFor="dollerValue" className="form-label">Item Price in $</label>
                                            <input id="dollerValue" placeholder="e. g. `20$`" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="input-box">
                                            <button className="btn btn-primary btn-large w-100">Edit Item</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};