import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul id="top-buttons">
                                    <li><a href="#"><i className="fa fa-sign-in"></i> Login</a></li>
                                    <li><a href="#"><i className="fa fa-pencil-square-o"></i> Register</a></li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="language-switcher">
                                            <span><i className="fa fa-globe"></i> English</span>
                                            <ul>
                                                <li><a href="#">Deutsch</a></li>
                                                <li><a href="#">Espa&ntilde;ol</a></li>
                                                <li><a href="#">Fran&ccedil;ais</a></li>
                                                <li><a href="#">Portugu&ecirc;s</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="nav-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <a href="./index.html" className="nav-logo"><img src="./images/logo.png"
                                                                               alt="One Ring Rentals"/></a>

                                <div id="sb-search" className="sb-search">
                                    <form>
                                        <input className="sb-search-input" placeholder="Search..." type="text" value="" name="search" id="search" />
                                        <input className="sb-search-submit" type="submit" value="" />
                                        <i className="fa fa-search sb-icon-search"></i>

                                    </form>
                                </div>

                                <nav className="navbar">
                                    <button id="nav-mobile-btn"><i className="fa fa-bars"></i></button>

                                    <ul className="nav navbar-nav">
                                        <li><a href="#">Find a Rental</a></li>
                                        <li><a href="#">List your rental</a></li>
                                        <li><a href="#">Regions</a></li>
                                        <li><a href="#">Travel Guides</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Regions</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;