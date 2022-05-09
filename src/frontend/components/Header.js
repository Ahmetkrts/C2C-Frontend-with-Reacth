import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class header extends Component {
    render() {
        return (

            <header>
                <div id="header2" className="header2-area right-nav-mobile">
                    <div className="header-top-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-2 hidden-xs">
                                    <div className="logo-area">
                                        <a href="index.htm"><img className="img-responsive" src="asset/img\logo.png" alt="logo" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                    <ul className="profile-notification">
                                        <li>
                                            <div className="notify-contact"><span>Need help?</span> Talk to an expert: +61 3 8376 6284</div>
                                        </li>
                                        <li>
                                            <div className="cart-area">
                                                <a href="/"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>2</span></a>
                                                <ul>
                                                    <li>
                                                        <div className="cart-single-product">
                                                            <div className="media">
                                                                <div className="pull-left cart-product-img">
                                                                    <a href="/">
                                                                        <img className="img-responsive" alt="product" src="asset/img\product\more2.jpg" />
                                                                    </a>
                                                                </div>
                                                                <div className="media-body cart-content">
                                                                    <ul>
                                                                        <li>
                                                                            <h1><a href="/">Product Title Here</a></h1>
                                                                            <h2><span>Code:</span> STPT600</h2>
                                                                        </li>
                                                                        <li>
                                                                            <p>X 1</p>
                                                                        </li>
                                                                        <li>
                                                                            <p>$49</p>
                                                                        </li>
                                                                        <li>
                                                                            <a className="trash" href="/"><i className="fa fa-trash-o"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cart-single-product">
                                                            <div className="media">
                                                                <div className="pull-left cart-product-img">
                                                                    <a href="/">
                                                                        <img className="img-responsive" alt="product" src="asset/img\product\more3.jpg" />
                                                                    </a>
                                                                </div>
                                                                <div className="media-body cart-content">
                                                                    <ul>
                                                                        <li>
                                                                            <h1><a href="/">Product Title Here</a></h1>
                                                                            <h2><span>Code:</span> STPT460</h2>
                                                                        </li>
                                                                        <li>
                                                                            <p>X 1</p>
                                                                        </li>
                                                                        <li>
                                                                            <p>$75</p>
                                                                        </li>
                                                                        <li>
                                                                            <a className="trash" href="/"><i className="fa fa-trash-o"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <table className="table table-bordered sub-total-area">
                                                            <tbody>
                                                                <tr>
                                                                    <td>Total</td>
                                                                    <td>$124</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Discount</td>
                                                                    <td>$30</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Vat(20%)</td>
                                                                    <td>$18.8</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sub Total</td>
                                                                    <td>$112.8</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </li>
                                                    <li>
                                                        <ul className="cart-checkout-btn">
                                                            <li><a href="cart.htm" className="btn-find"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Go to Cart</a></li>
                                                            <li><a href="check-out.htm" className="btn-find"><i className="fa fa-share" aria-hidden="true"></i>Go to Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            { /*<div className="apply-btn-area">
                                                    <a className="apply-now-btn" href="/" id="login-button">Login</a>
                                                    <div className="login-form" id="login-form" style="display: none;">
                                                        <h2>Login</h2>
                                                       <form>
                                                            <input className="form-control" type="text" placeholder="Name">
                                                                <input className="form-control" type="password" placeholder="Password">
                                                                    <button className="btn-login" type="submit" value="Login">Login</button>
                                                                    <a className="btn-login" href="registration.htm">Registration</a>
                                                                    <div className="remember-lost">
                                                                        <div className="checkbox">
                                                                            <label><input type="checkbox"> Remember me</label>
                                                                        </div>
                                                                        <a className="lost-password" href="/">Lost Your Password?</a>
                                                                    </div>
                                                                    <button className="cross-btn form-cancel" type="submit" value=""><i className="fa fa-times" aria-hidden="true"></i></button>
                                                      </form> 
                                                    </div>
                                                </div>*/}
                                        </li>
                                        <li><a className="apply-now-btn-color hidden-on-mobile" href="registration.htm">Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu-area bg-primaryText" id="sticker">
                        <div className="container">
                            <nav id="desktop-nav">
                                <ul>
                                    <li className="active"><a href="/">Home</a>
                                        <ul>
                                            <li><a href="index.htm">Home 1</a></li>
                                            <li><a href="index2.htm">Home 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.htm">About</a></li>
                                    <li><a href="/">Pages</a>
                                        <ul className="mega-menu-area">
                                            <li>
                                                <a href="index.htm">Home 1</a>
                                                <a href="index2.htm">Home 2</a>
                                                <a href="about.htm">About</a>
                                                <a href="product-page-grid.htm">Product Grid</a>
                                            </li>
                                            <li>
                                                <a href="product-page-list.htm">Product List</a>
                                                <a href="product-category-grid.htm">Category Grid</a>
                                                <a href="product-category-list.htm">Category List</a>
                                                <a href="single-product.htm">Product Details</a>
                                            </li>
                                            <li>
                                                <a href="profile.htm">Profile</a>
                                                <a href="favourites-grid.htm">Favourites Grid</a>
                                                <a href="favourites-list.htm">Favourites List</a>
                                                <a href="settings.htm">Settings</a>
                                            </li>
                                            <li>
                                                <a href="upload-products.htm">Upload Products</a>
                                                <a href="sales-statement.htm">Sales Statement</a>
                                                <a href="withdrawals.htm">Withdrawals</a>
                                                <a href="404.htm">404</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="product-page-grid.htm">WordPress</a></li>
                                    <li><a href="product-category-grid.htm">Joomla</a></li>
                                    <li><a href="product-category-list.htm">Plugins</a></li>
                                    <li><a href="product-page-list.htm">Components</a></li>
                                    <li><a href="product-category-grid.htm">PSD</a></li>
                                    <li><a href="/">Blog</a>
                                        <ul>
                                            <li><a href="blog.htm">Blog</a></li>
                                            <li><a href="single-blog.htm">Blog Details</a></li>
                                            <li className="has-child-menu"><a href="/">Second Level</a>
                                                <ul className="thired-level">
                                                    <li><a href="index.htm">Thired Level 1</a></li>
                                                    <li><a href="index.htm">Thired Level 2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.htm">Contact</a></li>
                                    <li><Link to="/adminpage">Admin page</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mobile-menu">
                                    <nav id="dropdown">
                                        <ul>
                                            <li className="active"><a href="/">Home</a>
                                                <ul>
                                                    <li><a href="index.htm">Home 1</a></li>
                                                    <li><a href="index2.htm">Home 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.htm">About</a></li>
                                            <li><a href="/">Pages</a>
                                                <ul className="mega-menu-area">
                                                    <li>
                                                        <a href="index.htm">Home 1</a>
                                                        <a href="index2.htm">Home 2</a>
                                                        <a href="about.htm">About</a>
                                                        <a href="product-page-grid.htm">Product Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="product-page-list.htm">Product List</a>
                                                        <a href="product-category-grid.htm">Category Grid</a>
                                                        <a href="product-category-list.htm">Category List</a>
                                                        <a href="single-product.htm">Product Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="profile.htm">Profile</a>
                                                        <a href="favourites-grid.htm">Favourites Grid</a>
                                                        <a href="favourites-list.htm">Favourites List</a>
                                                        <a href="settings.htm">Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="upload-products.htm">Upload Products</a>
                                                        <a href="sales-statement.htm">Sales Statement</a>
                                                        <a href="withdrawals.htm">Withdrawals</a>
                                                        <a href="404.htm">404</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="product-page-grid.htm">WordPress</a></li>
                                            <li><a href="product-category-grid.htm">Joomla</a></li>
                                            <li><a href="product-category-list.htm">Plugins</a></li>
                                            <li><a href="product-page-list.htm">Components</a></li>
                                            <li><a href="product-category-grid.htm">PSD</a></li>
                                            <li><a href="/">Blog</a>
                                                <ul>
                                                    <li><a href="blog.htm">Blog</a></li>
                                                    <li><a href="single-blog.htm">Blog Details</a></li>
                                                    <li className="has-child-menu"><a href="/">Second Level</a>
                                                        <ul className="thired-level">
                                                            <li><a href="index.htm">Thired Level 1</a></li>
                                                            <li><a href="index.htm">Thired Level 2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.htm">Contact</a></li>
                                            <li><a href="help.htm">Help</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}
export default header;
