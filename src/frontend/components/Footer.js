import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-area-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-box">
                                    <h3 className="title-bar-left title-bar-footer">Our Address</h3>
                                    <ul className="corporate-address">
                                        <li><i className="fa fa-map-marker" aria-hidden="true"></i><a href="Phone(01)800433633">PO Box 16122 Collins Street West Victoria 8007 Australia</a></li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i>+61 3 8376 6284</li>
                                        <li><i className="fa fa-fax" aria-hidden="true"></i>+61 3 8376 6284</li>
                                        <li><i className="fa fa-envelope-o" aria-hidden="true"></i>info@foxtar.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-box">
                                    <h3 className="title-bar-left title-bar-footer">Join Our Community </h3>
                                    <ul className="featured-links">
                                        <li>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/">Forums</a></li>
                                                <li><a href="/">Become an Author</a></li>
                                                <li><a href="/">Community Meetups</a></li>
                                                <li><a href="/"> Become an Affiliate</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-box">
                                    <h3 className="title-bar-left title-bar-footer">Need Help?</h3>
                                    <ul className="featured-links">
                                        <li>
                                            <ul>
                                                <li><a href="/">Help Center</a></li>
                                                <li><a href="/">Foxtar Market Terms</a></li>
                                                <li><a href="/">Author Terms</a></li>
                                                <li><a href="/">Foxtar Licenses</a></li>
                                                <li><a href="/">Contact Us</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-box">
                                    <h3 className="title-bar-left title-bar-footer">Follow Us On</h3>
                                    <ul className="footer-social">
                                        <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <div className="newsletter-area">
                                        <h3>Newsletter Sign Up!</h3>
                                        <div className="input-group stylish-input-group">
                                            <input type="text" placeholder="Enter your e-mail here" className="form-control"/>
                                                <span className="input-group-addon">
                                                    <button type="submit">
                                                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                                    </button>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-area-bottom">
                    <div className="container">
                        <p>@ 2017 Foxtar market place. Trademarks and brands are the property of their respective owners.</p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
