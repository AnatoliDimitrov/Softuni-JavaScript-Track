export const Ind = () => {
    return (
        <>
            <div className="slider-one rn-section-gapTop">
                <div className="container">
                    <div className="row row-reverce-sm align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                            <h2 className="title" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">Discover Digital Art, Collect and Sell Your Specific NFTs.</h2>
                            <p className="slide-disc" data-sal-delay="300" data-sal="slide-up" data-sal-duration="800">Partner with one of the world’s largest retailers to showcase your brand and
                                products.</p>
                            <div className="button-group">
                                <a className="btn btn-large btn-primary" href="#" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">Get Started</a>
                                <a className="btn btn-large btn-primary-alta" href="create.html" data-sal-delay="500" data-sal="slide-up" data-sal-duration="800">Create</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                            <div className="slider-thumbnail">
                                <img src="/images/slider/slider-1.png" alt="Slider Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-live-bidding-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="title mb--0 live-bidding-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Live Bidding</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">

                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html"><img src="/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" /></a>
                                            <div className="countdown" data-date="2022-11-09">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">D's</span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">H's</span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">Min's</span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a href="author.html" className="avatar" data-tooltip="Mark JOrdan"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Mark"><img src="/images/client/client-3.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Jordan"><img src="/images/client/client-5.png" alt="Nft_Profile" /></a>
                                                <a className="more-author-text" href="#">20+ Place Bit.</a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                        <a href="product-details.html"><span className="product-name">Preatent</span></a>
                                        <span className="latest-bid">Highest bid 1/20</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.244wETH</div>
                                            <div className="react-area">
                                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                    {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                                </svg>
                                                <span className="number">322</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html"><img src="/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                                            <div className="countdown" data-date="2022-10-09">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">D's</span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">H's</span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">Min's</span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a href="author.html" className="avatar" data-tooltip="Farik Shaikh"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Farik"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                                <a className="more-author-text" href="#">15+ Place Bit.</a>
                                            </div>

                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                        <a href="product-details.html"><span className="product-name">#21 The Wonder</span></a>
                                        <span className="latest-bid">Highest bid 1/20</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.244wETH</div>
                                            <div className="react-area">
                                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                    {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                                </svg>
                                                <span className="number">322</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html"><img src="/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                                            <div className="countdown" data-date="2023-12-09">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">D's</span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">H's</span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">Min's</span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a href="author.html" className="avatar" data-tooltip="Mona Lisa"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Lisa"><img src="/images/client/client-4.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Mona"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                                <a className="more-author-text" href="#">12+ Place Bit.</a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <a href="product-details.html"><span className="product-name">OrBid6</span></a>
                                        <span className="latest-bid">Highest bid 2/31</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.2128wETH</div>
                                            <div className="react-area">
                                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                    {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                                </svg>
                                                <span className="number">12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html"><img src="/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                                            <div className="countdown" data-date="2024-10-08">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">D's</span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">H's</span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">Min's</span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a href="author.html" className="avatar" data-tooltip="Falak Sabbir"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Sabbir"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Falak"><img src="/images/client/client-11.png" alt="Nft_Profile" /></a>
                                                <a className="more-author-text" href="#">16+ Place Bit.</a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <a href="product-details.html"><span className="product-name">Morgan11</span></a>
                                        <span className="latest-bid">Highest bid 3/16</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.265wETH</div>
                                            <div className="react-area">
                                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                    {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                                </svg>
                                                <span className="number">20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html"><img src="/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" /></a>
                                            <div className="countdown" data-date="2023-11-08">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">D's</span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">H's</span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">Min's</span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a href="author.html" className="avatar" data-tooltip="Oram Kasin"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Kasin"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Oram"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                <a className="more-author-text" href="#">10+ Place Bit.</a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <a href="product-details.html"><span className="product-name">mAtal8</span></a>
                                        <span className="latest-bid">Highest bid 6/50</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.244wETH</div>
                                            <div className="react-area">
                                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                    {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                                </svg>
                                                <span className="number">205</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-slide-product">
                                    <div className="product-style-one">
                                        <div className="card-thumbnail">
                                            <a href="product-details.html"><img src="/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                                            <div className="countdown" data-date="2023-11-08">
                                                <div className="countdown-container days">
                                                    <span className="countdown-value">87</span>
                                                    <span className="countdown-heading">D's</span>
                                                </div>
                                                <div className="countdown-container hours">
                                                    <span className="countdown-value">23</span>
                                                    <span className="countdown-heading">H's</span>
                                                </div>
                                                <div className="countdown-container minutes">
                                                    <span className="countdown-value">38</span>
                                                    <span className="countdown-heading">Min's</span>
                                                </div>
                                                <div className="countdown-container seconds">
                                                    <span className="countdown-value">27</span>
                                                    <span className="countdown-heading">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-share-wrapper">
                                            <div className="profile-share">
                                                <a href="author.html" className="avatar" data-tooltip="Oram Kasin"><img src="/images/client/client-10.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Kasin"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                                <a href="author.html" className="avatar" data-tooltip="Oram"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                                <a className="more-author-text" href="#">11+ Place Bit.</a>
                                            </div>
                                            <div className="share-btn share-btn-activation dropdown">
                                                <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                                    </svg>
                                                </button>

                                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                        Share
                                                    </button>
                                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                        Report
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <a href="product-details.html"><span className="product-name">Delta25</span></a>
                                        <span className="latest-bid">Highest bid 6/30</span>
                                        <div className="bid-react-area">
                                            <div className="last-bid">0.234wETH</div>
                                            <div className="react-area">
                                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                                    {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                                </svg>
                                                <span className="number">205</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-service-area rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb--50">
                            <h3 className="title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Create and sell your NFTs</h3>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="rn-service-one color-shape-7">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/images/icons/shape-7.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-01</div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">Set up your wallet</a></h4>
                                        <p className="description">Powerful features and inclusions, which makes Nuron standout,
                                            easily customizable and scalable.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" className="rn-service-one color-shape-1">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/images/icons/shape-1.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-02</div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">Create your collection</a></h4>
                                        <p className="description">A great collection of beautiful website templates for your need.
                                            Choose the best suitable template.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" className="rn-service-one color-shape-5">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/images/icons/shape-5.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-03</div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">Add your NFT's</a></h4>
                                        <p className="description">We've made the template fully responsive, so it looks great on
                                            all devices: desktop, tablets and.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" className="rn-service-one color-shape-6">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/images/icons/shape-6.png" alt="Shape" />
                                    </div>
                                    <div className="subtitle">Step-04</div>
                                    <div className="content">
                                        <h4 className="title"><a href="#">Sell Your NFT's</a></h4>
                                        <p className="description">I throw myself down among the tall grass by the stream as I
                                            lie close to the earth NFT's.</p>
                                        <a className="read-more-button" href="#"><i className="feather-arrow-right"></i></a>
                                    </div>
                                </div>
                                <a className="over-link" href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-new-items rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3 className="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Newest Items</h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div className="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <a className="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone Due"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Nisat Tara"><img src="/images/client/client-3.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">9+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Preatent</span></a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-02.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-4.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Nira Ara"><img src="/images/client/client-5.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Fatima Afrafy"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">10+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Diamond Dog</span></a>
                                <span className="latest-bid">Highest bid 5/11</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.892wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">420</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Janin Ara"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Atif Islam"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">10+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">OrBid6</span></a>
                                <span className="latest-bid">Highest bid 2/31</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.2128wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-3.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-5.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">8+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Morgan11</span></a>
                                <span className="latest-bid">Highest bid 3/16</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.265wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">20</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-7.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">15+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">mAtal8</span></a>
                                <span className="latest-bid">Highest bid 6/50</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">205</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop">
                <div className="container">
                    <div className="row  mb--30">
                        <div className="col-12 justify-sm-center d-flex">
                            <h3 className="title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Top Seller in</h3>
                            <select>
                                <option data-display="1 day"> 1 day</option>
                                <option value="1">7 Day's</option>
                                <option value="2">15 Day's</option>
                                <option value="4">30 Day's</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-sm-center g-5 top-seller-list-wrapper">
                       
                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html"><img src="/images/client/client-12.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Brodband</h6>
                                        </a>
                                        <span className="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Ms. Parkline</h6>
                                        </a>
                                        <span className="count-number">
                                            $2300,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html"><img src="/images/client/client-3.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Methods</h6>
                                        </a>
                                        <span className="count-number">
                                            $2100,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html"><img src="/images/client/client-4.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Jone sone</h6>
                                        </a>
                                        <span className="count-number">
                                            $2000,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html"><img src="/images/client/client-5.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Siddhart</h6>
                                        </a>
                                        <span className="count-number">
                                            $200,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Sobuj Mk</h6>
                                        </a>
                                        <span className="count-number">
                                            $2000,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html"><img src="/images/client/client-7.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Trodband</h6>
                                        </a>
                                        <span className="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Yash</h6>
                                        </a>
                                        <span className="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail">
                                        <a href="author.html"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">YASHKIB</h6>
                                        </a>
                                        <span className="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list">
                            <div className="top-seller-inner-one">
                                <div className="top-seller-wrapper">
                                    <div className="thumbnail varified">
                                        <a href="author.html"><img src="/images/client/client-10.png" alt="Nft_Profile" /></a>
                                    </div>
                                    <div className="top-seller-content">
                                        <a href="author.html">
                                            <h6 className="name">Brodband</h6>
                                        </a>
                                        <span className="count-number">
                                            $2500,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rn-product-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3 className="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Explore Product</h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div className="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <button className="discover-filter-button discover-filter-activation btn btn-primary">Filter<i className="feather-filter"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="default-exp-wrapper default-exp-expand">
                        <div className="inner">
                            <div className="filter-select-option">
                                <label className="filter-leble">LIKES</label>
                                <select>
                                    <option data-display="Most liked">Most liked</option>
                                    <option value="1">Least liked</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Category</label>
                                <select>
                                    <option data-display="Category">Category</option>
                                    <option value="1">Art</option>
                                    <option value="1">Photograph</option>
                                    <option value="2">Metaverses</option>
                                    <option value="4">Potato</option>
                                    <option value="4">Photos</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Collections</label>
                                <select>
                                    <option data-display="Collections">Collections</option>
                                    <option value="1">BoredApeYachtClub</option>
                                    <option value="2">MutantApeYachtClub</option>
                                    <option value="4">Art Blocks Factory</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Sale type</label>
                                <select>
                                    <option data-display="Sale type">Sale type</option>
                                    <option value="1">Fixed price</option>
                                    <option value="2">Timed auction</option>
                                    <option value="4">Not for sale</option>
                                    <option value="4">Open for offers</option>
                                </select>
                            </div>

                            <div className="filter-select-option">
                                <label className="filter-leble">Price Range</label>
                                <div className="price_filter s-filter clear">
                                    <form action="#" method="GET">
                                        <div id="slider-range"></div>
                                        <div className="slider__range--output">
                                            <div className="price__output--wrap">
                                                <div className="price--output">
                                                    <span>Price :</span><input type="text" id="amount" />
                                                </div>
                                                <div className="price--filter">
                                                    <a className="btn btn-primary btn-small" href="#">Filter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-3.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">9+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Preatent</span></a>
                                <span className="latest-bid">Highest bid 1/20</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">322</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-02.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="mr. Davei"><img src="/images/client/client-4.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Mrs.Laumi"><img src="/images/client/client-5.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Shanon"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">11+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Diamond Dog</span></a>
                                <span className="latest-bid">Highest bid 5/11</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.892wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">420</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="mr. Jone"><img src="/images/client/client-7.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Laumi"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Tom"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">12+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">OrBid6</span></a>
                                <span className="latest-bid">Highest bid 2/31</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.2128wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                                    <div className="countdown" data-date="2022-11-09">
                                        <div className="countdown-container days">
                                            <span className="countdown-value">87</span>
                                            <span className="countdown-heading">D's</span>
                                        </div>
                                        <div className="countdown-container hours">
                                            <span className="countdown-value">23</span>
                                            <span className="countdown-heading">H's</span>
                                        </div>
                                        <div className="countdown-container minutes">
                                            <span className="countdown-value">38</span>
                                            <span className="countdown-heading">Min's</span>
                                        </div>
                                        <div className="countdown-container seconds">
                                            <span className="countdown-value">27</span>
                                            <span className="countdown-heading">Sec</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="mr. Davei"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Mrs.Laumi"><img src="/images/client/client-10.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Shanon"><img src="/images/client/client-11.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">13+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Morgan11</span></a>
                                <span className="latest-bid">Highest bid 3/16</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.265wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">20</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Terasa"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Sakib"><img src="/images/client/client-7.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Miraj"><img src="/images/client/client-3.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">15+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">mAtal8</span></a>
                                <span className="latest-bid">Highest bid 6/50</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">205</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="400" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" /></a>

                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Moris"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jsufia"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Mordan"><img src="/images/client/client-2.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">9+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Platonum</span></a>
                                <span className="latest-bid">Highest bid 1/10</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.450wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">65</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="450" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" /></a>
                                    <div className="countdown" data-date="2022-12-09">
                                        <div className="countdown-container days">
                                            <span className="countdown-value">35</span>
                                            <span className="countdown-heading">D's</span>
                                        </div>
                                        <div className="countdown-container hours">
                                            <span className="countdown-value">42</span>
                                            <span className="countdown-heading">H's</span>
                                        </div>
                                        <div className="countdown-container minutes">
                                            <span className="countdown-value">10</span>
                                            <span className="countdown-heading">Min's</span>
                                        </div>
                                        <div className="countdown-container seconds">
                                            <span className="countdown-value">23</span>
                                            <span className="countdown-heading">Sec</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Thinm"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jubin"><img src="/images/client/client-10.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Nautial"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">14+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">PlatOrgan</span></a>
                                <span className="latest-bid">Highest bid 2/22</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.311wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">56</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="500" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Tabriz"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Juskin"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Money"><img src="/images/client/client-9.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">14+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>
                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Orgajis</span></a>
                                <span className="latest-bid">Highest bid 2/10</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">89</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="550" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Morokko"><img src="/images/client/client-6.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Levnon"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Trim sawdi"><img src="/images/client/client-10.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">12+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">#720</span></a>
                                <span className="latest-bid">Highest bid 1/1</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">502</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-sal="slide-up" data-sal-delay="600" data-sal-duration="800" className="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><img src="/images/portfolio/portfolio-11.jpg" alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    <div className="profile-share">
                                        <a href="author.html" className="avatar" data-tooltip="Mark David"><img src="/images/client/client-1.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Sunil Satti"><img src="/images/client/client-8.png" alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" data-tooltip="Jone lee"><img src="/images/client/client-7.png" alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">5+ Place Bit.</a>
                                    </div>
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path> */}
                                            </svg>
                                        </button>

                                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">Orthogon#720</span></a>
                                <span className="latest-bid">Highest bid 1/1</span>
                                <div className="bid-react-area">
                                    <div className="last-bid">0.244wETH</div>
                                    <div className="react-area">
                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            {/* <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path> */}
                                        </svg>
                                        <span className="number">308</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rn-collection-area rn-section-gapTop">
                <div className="container">
                    <div className="row mb--50 align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3 className="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Top Collection</h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                            <div className="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <a className="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-01.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img src="/images/collection/collection-sm-01.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-02.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-03.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-profile">
                                        <img src="/images/client/client-15.png" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Cubic Trad</h6>
                                        <span className="items">27 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-03.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img src="/images/collection/collection-sm-04.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-05.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-06.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-profile">
                                        <img src="/images/client/client-12.png" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Diamond Dog</h6>
                                        <span className="items">20 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-02.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img src="/images/collection/collection-sm-07.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-08.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-09.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-profile">
                                        <img src="/images/client/client-13.png" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Morgan11</h6>
                                        <span className="items">15 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                            <a href="product-details.html" className="rn-collection-inner-one">
                                <div className="collection-wrapper">
                                    <div className="collection-big-thumbnail">
                                        <img src="/images/collection/collection-lg-04.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collenction-small-thumbnail">
                                        <img src="/images/collection/collection-sm-10.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-11.jpg" alt="Nft_Profile" />
                                        <img src="/images/collection/collection-sm-12.jpg" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-profile">
                                        <img src="/images/client/client-14.png" alt="Nft_Profile" />
                                    </div>
                                    <div className="collection-deg">
                                        <h6 className="title">Orthogon#720</h6>
                                        <span className="items">10 Items</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content share-wrapper">
                        <div className="modal-header share-area">
                            <h5 className="modal-title">Share this NFT</h5>
                        </div>
                        <div className="modal-body">
                            <ul className="social-share-default">
                                <li><a href="#"><span className="icon"><i data-feather="facebook"></i></span><span className="text">facebook</span></a></li>
                                <li><a href="#"><span className="icon"><i data-feather="twitter"></i></span><span className="text">twitter</span></a></li>
                                <li><a href="#"><span className="icon"><i data-feather="linkedin"></i></span><span className="text">linkedin</span></a></li>
                                <li><a href="#"><span className="icon"><i data-feather="instagram"></i></span><span className="text">instagram</span></a></li>
                                <li><a href="#"><span className="icon"><i data-feather="youtube"></i></span><span className="text">youtube</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" aria-hidden="true">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content report-content-wrapper">
                        <div className="modal-header report-modal-header">
                            <h5 className="modal-title">Why are you reporting?
                            </h5>
                        </div>
                        <div className="modal-body">
                            <p>Describe why you think this item should be removed from marketplace</p>
                            <div className="report-form-box">
                                <h6 className="title">Message</h6>
                                <textarea name="message" placeholder="Write issues"></textarea>
                                <div className="report-button">
                                    <button type="button" className="btn btn-primary mr--10 w-auto">Report</button>
                                    <button type="button" className="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};