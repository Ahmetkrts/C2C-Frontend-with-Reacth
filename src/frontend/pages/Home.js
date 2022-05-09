import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="main-banner2-area">
                    <div className="container">
                        <div className="main-banner2-wrapper">
                            <h1>Welcome To Foxtar Market Place!</h1>
                            <p>Premium WordPress Themes, Web Templates and Many More ...</p>
                            <div className="banner-search-area input-group">
                                <input className="form-control" placeholder="Search Your Keywords . . ." type="text" />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newest-products-area bg-secondary section-space-default">
                    <div className="container">
                        <h2 className="title-default">Let's Check Out Our Newest Release Prodcuts</h2>
                    </div>
                    <div className="container-fluid" id="isotope-container">
                        <div className="isotope-classes-tab isotop-box-btn-white">

                            <a href="#" data-filter="*" className="current">All</a>
                            <a href="#" data-filter=".wordpress">WordPress</a>
                            <a href="#" data-filter=".joomla">Joomla</a>
                            <a href="#" data-filter=".plugins">Plugins</a>
                            <a href="#" data-filter=".component">Component</a>
                            <a href="#" data-filter=".psd">PSD</a>
                        </div>
                        <div className="row featuredContainer">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 joomla plugins component">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\12.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wordpress plugins">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\13.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 joomla component">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\14.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wordpress joomla plugins">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\15.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wordpress">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\16.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wordpress joomla psd">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\17.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 component">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\18.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 wordpress psd">
                                <div className="single-item-grid">
                                    <div className="item-img">
                                        <img src="asset\img\product\19.jpg" alt="product" className="img-responsive" />
                                        <div className="trending-sign" data-tips="Trending"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-info">
                                            <h3><a href="#">Team Component Pro</a></h3>
                                            <span>Joomla Component</span>
                                            <div className="price">$15</div>
                                        </div>
                                        <div className="item-profile">
                                            <div className="profile-title">
                                                <div className="img-wrapper"><img src="asset\img\profile\1.jpg" alt="profile" className="img-responsive img-circle" /></div>
                                                <span>PsdBosS</span>
                                            </div>
                                            <div className="profile-rating">
                                                <ul>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li>(<span> 05</span> )</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <ul className="btn-area">
                                <li className="hvr-bounce-to-right"><a href="#">All New Items</a></li>
                                <li className="hvr-bounce-to-left"><a href="#">Popular Items</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
               

                <div className="why-choose-area bg-primaryText section-space-default">
                    <div className="container">
                        <h2 className="title-textPrimary">Why You Choose Foxtar Market Place?</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="why-choose-box">
                                    <a href="#"><i className="fa fa-gift" aria-hidden="true"></i></a>
                                    <h3><a href="#">Easily Buy & Sell </a></h3>
                                    <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="why-choose-box">
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
                                    <h3><a href="#">Quality Products</a></h3>
                                    <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="why-choose-box">
                                    <a href="#"><i className="fa fa-lock" aria-hidden="true"></i></a>
                                    <h3><a href="#">100% Secure Payment</a></h3>
                                    <p>Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry's standaum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default Home;
