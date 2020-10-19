import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-circle"></div>
          <div className="preloader-img">
            <img src="img/core-img/leaf.png" alt="" />
          </div>
        </div>

{/* Header Area Start */}
    <header className="header-area">
    {/* ***** Top Header Area *****  */}
        <div className="top-header-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="top-header-content d-flex align-items-center justify-content-between">
                            {/* Top Header Content */}
                            <div className="top-header-meta">
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i> <span>Email: infodeercreative@gmail.com</span></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122"><i className="fa fa-phone" aria-hidden="true"></i> <span>Call Us: +1 234 122 122</span></a>
                            </div>
                            {/* <!-- Top Header Content --> */}
                            <div className="top-header-meta d-flex">
                                {/* <!-- Language Dropdown --> */}
                                <div className="language-dropdown">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle mr-30" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">USA</a>
                                            <a className="dropdown-item" href="#">UK</a>
                                            <a className="dropdown-item" href="#">Bangla</a>
                                            <a className="dropdown-item" href="#">Hindi</a>
                                            <a className="dropdown-item" href="#">Spanish</a>
                                            <a className="dropdown-item" href="#">Latin</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Login --> */}
                                <div className="login">
                                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Login</span></a>
                                </div>
                                {/* <!-- Cart --> */}
                                <div className="cart">
                                    <a href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>Cart <span className="cart-quantity">(1)</span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Navbar Area ***** --> */}
        <div className="alazea-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    {/* <!-- Menu --> */}
                    <nav className="classy-navbar justify-content-between" id="alazeaNav">

                        {/* <!-- Nav Brand --> */}
                        <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt=""/></a>

                        {/* <!-- Navbar Toggler --> */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        {/* <!-- Menu --> */}
                        <div className="classy-menu"></div>
                        {/* <!-- Close Button --> */}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                            {/* <!-- Navbar Start --> */}
                            <div className="classynav">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="shop.html">Shop</a>
                                                <ul className="dropdown">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="portfolio.html">Portfolio</a>
                                                <ul className="dropdown">
                                                    <li><a href="portfolio.html">Portfolio</a></li>
                                                    <li><a href="single-portfolio.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-post.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                {/* <!-- Search Icon --> */}
                                <div id="searchIcon">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </div>

                            </div>
                            {/* <!-- Navbar End --> */}
                    </nav>
                    {/* <!-- Search Form --> */}
                    <div className="search-form">
                        <form action="#" method="get">
                            <input type="search" name="search" id="search" placeholder="Type keywords &amp; press enter..." />
                            <button type="submit" className="d-none"></button>
                        </form>
                        {/* <!-- Close Icon --> */}
                        <div className="closeIcon"><i className="fa fa-times" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </header>
    {/* <!-- ##### Header Area End ##### --></div> */}
    
    {/* <!-- ##### Hero Area Start ##### --> */}
    <section className="hero-area">
        <div className="hero-post-slides owl-carousel">

            {/* <!-- Single Hero Post --> */}
            <div className="single-hero-post bg-overlay">
                {/* <!-- Post Image --> */}
                <div className="slide-img bg-img" style={{backgroundImage: "url(img/bg-img/1.jpg)"}}></div>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            {/* <!-- Post Content --> */}
                            <div className="hero-slides-content text-center">
                                <h2>Plants exist in the weather and light rays that surround them</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ante nec ipsum iaculis, ac iaculis ipsum porttitor. Vivamus cursus nisl lectus, id mattis nisl lobortis eu. Duis diam augue, dapibus ut dolor at, mattis maximus dolor.</p>
                                <div className="welcome-btn-group">
                                    <a href="#" className="btn alazea-btn mr-30">GET STARTED</a>
                                    <a href="#" className="btn alazea-btn active">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Single Hero Post --> */}
            <div className="single-hero-post bg-overlay">
                {/* <!-- Post Image --> */}
                <div className="slide-img bg-img" style={{backgroundImage: "url(img/bg-img/2.jpg)"}}></div>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            {/* <!-- Post Content --> */}
                            <div className="hero-slides-content text-center">
                                <h2>Plants exist in the weather and light rays that surround them</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ante nec ipsum iaculis, ac iaculis ipsum porttitor. Vivamus cursus nisl lectus, id mattis nisl lobortis eu. Duis diam augue, dapibus ut dolor at, mattis maximus dolor.</p>
                                <div className="welcome-btn-group">
                                    <a href="#" className="btn alazea-btn mr-30">GET STARTED</a>
                                    <a href="#" className="btn alazea-btn active">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- ##### Hero Area End ##### --> */}

    {/* <!-- ##### Service Area Start ##### --> */}
    <section className="our-services-area bg-gray section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
                {/* <!-- Section Heading --> */}
                <div className="section-heading text-center">
                    <h2>OUR SERVICES</h2>
                    <p>We provide the perfect service for you.</p>
                </div>
            </div>
        </div>
        <div className="row justify-content-between">
                <div className="col-12 col-lg-5">
                    <div className="alazea-service-area mb-100">

                        {/* <!-- Single Service Area --> */}
                        <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
                            {/* <!-- Icon --> */}
                            <div className="service-icon mr-30">
                                <img src="img/core-img/s1.png" alt=""/>
                            </div>
                            {/* <!-- Content --> */}
                            <div className="service-content">
                                <h5>Plants Care</h5>
                                <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                            </div>
                        </div>
                        {/* <!-- Single Service Area --> */}
                        <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">
                            {/* <!-- Icon --> */}
                            <div className="service-icon mr-30">
                                <img src="img/core-img/s2.png" alt=""/>
                            </div>
                            {/* <!-- Content --> */}
                            <div className="service-content">
                                <h5>Pressure Washing</h5>
                                <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                            </div>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="500ms">
                            {/* <!-- Icon --> */}
                            <div className="service-icon mr-30">
                                <img src="img/core-img/s3.png" alt=""/>
                            </div>
                            {/* <!-- Content --> */}
                            <div className="service-content">
                                <h5>Tree Service &amp; Trimming</h5>
                                <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="alazea-video-area bg-overlay mb-100">
                        <img src="img/bg-img/23.jpg" alt="" /> 
                        <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" className="video-icon">
                            <i className="fa fa-play" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Service Area End ##### --> */}

    {/* <!-- ##### About Area Start ##### --> */}
    <section className="about-us-area section-padding-100-0">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-5">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading">
                        <h2>ABOUT US</h2>
                        <p>We are leading in the plants service fields.</p>
                    </div>
                    <p>Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.</p>
                    
                    {/* <!-- Progress Bar Content Area --> */}
                    <div className="alazea-progress-bar mb-50">
                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Office plants</p>
                            <div id="bar1" className="barfiller">
                                <div className="tipWrap">
                                    <span className="tip"></span>
                                </div>
                                <span className="fill" data-percentage="80"></span>
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Field manager</p>
                            <div id="bar2" className="barfiller">
                                <div className="tipWrap">
                                    <span className="tip"></span>
                                </div>
                                <span className="fill" data-percentage="70"></span>
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Landscape design</p>
                            <div id="bar3" className="barfiller">
                                <div className="tipWrap">
                                    <span className="tip"></span>
                                </div>
                                <span className="fill" data-percentage="85"></span>
                            </div>
                        </div>

                        {/* <!-- Single Progress Bar --> */}
                        <div className="single_progress_bar">
                            <p>Garden Care</p>
                            <div id="bar4" className="barfiller">
                                <div className="tipWrap">
                                    <span className="tip"></span>
                                </div>
                                <span className="fill" data-percentage="65"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="alazea-benefits-area">
                        <div className="row">
                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b1.png" alt="" />
                                    <h5>Quality Products</h5>
                                    <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b2.png" alt=""/>
                                    <h5>Perfect Service</h5>
                                    <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b3.png" alt=""/>
                                    <h5>100% Natural</h5>
                                    <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                </div>
                            </div>

                            {/* <!-- Single Benefits Area --> */}
                            <div className="col-12 col-sm-6">
                                <div className="single-benefits-area">
                                    <img src="img/core-img/b4.png" alt=""/>
                                    <h5>Environmentally friendly</h5>
                                    <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="border-line"></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### About Area End ##### --> */}

    {/* <!-- ##### Portfolio Area Start ##### --> */}
    <section className="alazea-portfolio-area section-padding-100-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading text-center">
                        <h2>OUR PORTFOLIO</h2>
                        <p>We devote all of our experience and efforts for creation</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="alazea-portfolio-filter">
                        <div className="portfolio-filter">
                            <button className="btn active" data-filter="*">All</button>
                            <button className="btn" data-filter=".design">Coffee Design</button>
                            <button className="btn" data-filter=".garden">Garden</button>
                            <button className="btn" data-filter=".home-design">Home Design</button>
                            <button className="btn" data-filter=".office-design">Office Design</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row alazea-portfolio">

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp" data-wow-delay="100ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/16.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/16.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/17.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/17.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 2">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden design wow fadeInUp" data-wow-delay="300ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/18.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/18.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 3">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design wow fadeInUp" data-wow-delay="400ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/19.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/19.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 4">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design wow fadeInUp" data-wow-delay="100ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/20.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/20.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 5">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/21.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/21.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 6">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Single Portfolio Area --> */}
                <div className="col-12 col-lg-6 single_portfolio_item home-design wow fadeInUp" data-wow-delay="300ms">
                    {/* <!-- Portfolio Thumbnail --> */}
                    <div className="portfolio-thumbnail bg-img" style={{backgroundImage: "url(img/bg-img/22.jpg)"}}></div>
                    {/* <!-- Portfolio Hover Text --> */}
                    <div className="portfolio-hover-overlay">
                        <a href="img/bg-img/22.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 7">
                            <div className="port-hover-text">
                                <h3>Minimal Flower Store</h3>
                                <h5>Office Plants</h5>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* <!-- ##### Portfolio Area End ##### --> */}

    {/* <!-- ##### Testimonial Area Start ##### --> */}
    <section className="testimonial-area section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="testimonials-slides owl-carousel">

                        {/* <!-- Single Testimonial Slide --> */}
                        <div className="single-testimonial-slide">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="testimonial-thumb">
                                        <img src="img/bg-img/13.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="testimonial-content">
                                        {/* <!-- Section Heading --> */}
                                        <div className="section-heading">
                                            <h2>TESTIMONIAL</h2>
                                            <p>Some kind words from clients about Alazea</p>
                                        </div>
                                        <p>“Alazea is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                        <div className="testimonial-author-info">
                                            <h6>Mr. Nick Jonas</h6>
                                            <p>CEO of NAVATECH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Testimonial Slide --> */}
                        <div className="single-testimonial-slide">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="testimonial-thumb">
                                        <img src="img/bg-img/14.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="testimonial-content">
                                        {/* <!-- Section Heading --> */}
                                        <div className="section-heading">
                                            <h2>TESTIMONIAL</h2>
                                            <p>Some kind words from clients about Alazea</p>
                                        </div>
                                        <p>“Alazea is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                        <div className="testimonial-author-info">
                                            <h6>Mr. Nazrul Islam</h6>
                                            <p>CEO of NAVATECH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Testimonial Slide --> */}
                        <div className="single-testimonial-slide">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="testimonial-thumb">
                                        <img src="img/bg-img/15.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="testimonial-content">
                                        {/* <!-- Section Heading --> */}
                                        <div className="section-heading">
                                            <h2>TESTIMONIAL</h2>
                                            <p>Some kind words from clients about Alazea</p>
                                        </div>
                                        <p>“Alazea is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                        <div className="testimonial-author-info">
                                            <h6>Mr. Jonas Nick</h6>
                                            <p>CEO of NAVATECH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Testimonial Area End ##### --></section> */}

    {/* <!-- ##### Product Area Start ##### --> */}
    <section className="new-arrivals-products-area bg-gray section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading text-center">
                        <h2>NEW ARRIVALS</h2>
                        <p>We have the latest products, it must be exciting for you</p>
                    </div>
                </div>
            </div>

            <div className="row"></div>
            {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="100ms">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <a href="shop-details.html"><img src="img/bg-img/9.jpg" alt=""/></a>
                            {/* <!-- Product Tag --> */}
                            <div className="product-tag">
                                <a href="#">Hot</a>
                            </div>
                            <div className="product-meta d-flex">
                                <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Info --> */}
                        <div className="product-info mt-15 text-center">
                            <a href="shop-details.html">
                                <p>Cactus Flower</p>
                            </a>
                            <h6>$10.99</h6>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="200ms">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <a href="shop-details.html"><img src="img/bg-img/10.jpg" alt=""/></a>
                            <div className="product-meta d-flex">
                                <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Info --> */}
                        <div className="product-info mt-15 text-center">
                            <a href="shop-details.html">
                                <p>Cactus Flower</p>
                            </a>
                            <h6>$10.99</h6>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="300ms">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <a href="shop-details.html"><img src="img/bg-img/11.jpg" alt=""/></a>
                            <div className="product-meta d-flex">
                                <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Info --> */}
                        <div className="product-info mt-15 text-center">
                            <a href="shop-details.html">
                                <p>Cactus Flower</p>
                            </a>
                            <h6>$10.99</h6>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Product Area --> */}
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="400ms">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <a href="shop-details.html"><img src="img/bg-img/12.jpg" alt=""/></a>
                            {/* <!-- Product Tag --> */}
                            <div className="product-tag sale-tag">
                                <a href="#">Hot</a>
                            </div>
                            <div className="product-meta d-flex">
                                <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Info --> */}
                        <div className="product-info mt-15 text-center">
                            <a href="shop-details.html">
                                <p>Cactus Flower</p>
                            </a>
                            <h6>$10.99</h6>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center">
                    <a href="#" className="btn alazea-btn">View All</a>
                </div>

            </div>
        
    </section>
    {/* <!-- ##### Product Area End ##### --> */}

    {/* <!-- ##### Blog Area Start ##### --> */}
    <section className="alazea-blog-area section-padding-100-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading text-center">
                        <h2>LATEST NEWS</h2>
                        <p>The breaking news about Gardening &amp; House plants</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">

                {/* <!-- Single Blog Post Area --> */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post mb-100">
                        <div className="post-thumbnail mb-30">
                            <a href="single-post.html"><img src="img/bg-img/6.jpg" alt=""/></a>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">
                                <h5>Garden designers across the country forecast ideas shaping the gardening world in 2018</h5>
                            </a>
                            <div className="post-meta">
                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                            </div>
                            <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Blog Post Area --> */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post mb-100">
                        <div className="post-thumbnail mb-30">
                            <a href="single-post.html"><img src="img/bg-img/7.jpg" alt=""/></a>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">
                                <h5>2018 Midwest Tree and Shrub Conference: Resilient Plants for a Lasting Landscape</h5>
                            </a>
                            <div className="post-meta">
                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Christina Aguilera</a>
                            </div>
                            <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Blog Post Area --> */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post mb-100">
                        <div className="post-thumbnail mb-30">
                            <a href="single-post.html"><img src="img/bg-img/8.jpg" alt=""/></a>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">
                                <h5>The summer coming up, it’s time for both us and the flowers to soak up the sunshine</h5>
                            </a>
                            <div className="post-meta">
                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 19 Jun 2018</a>
                                <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Mason Jenkins</a>
                            </div>
                            <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Blog Area End ##### --> */}

    {/* <!-- ##### Subscribe Area Start ##### --> */}
    <section className="subscribe-newsletter-area" style={{backgroundImage: "url(img/bg-img/subscribe.png)"}}>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-5">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading mb-0">
                        <h2>Join the Newsletter</h2>
                        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="subscribe-form">
                        <form action="#" method="get">
                            <input type="email" name="subscribe-email" id="subscribeEmail" placeholder="Enter your email"/>
                            <button type="submit" className="btn alazea-btn">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Subscribe Side Thumbnail --> */}
        <div className="subscribe-side-thumb wow fadeInUp" data-wow-delay="500ms">
            <img className="first-img" src="img/core-img/leaf.png" alt=""/>
        </div>
    </section>
    {/* <!-- ##### Subscribe Area End ##### --> */}

    {/* <!-- ##### Contact Area Start ##### --> */}
    <section className="contact-area section-padding-100-0">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-5">
                    {/* <!-- Section Heading --> */}
                    <div className="section-heading">
                        <h2>GET IN TOUCH</h2>
                        <p>Send us a message, we will call back later</p>
                    </div>
                    {/* <!-- Contact Form Area --> */}
                    <div className="contact-form-area mb-100">
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contact-name" placeholder="Your Name"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="contact-email" placeholder="Your Email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="contact-subject" placeholder="Subject"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn alazea-btn mt-15">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    {/* <!-- Google Maps --> */}
                    <div className="map-area mb-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ##### Contact Area End ##### --></div> */}

    {/* <!-- ##### Footer Area Start ##### --> */}
    <footer className="footer-area bg-img" style={{backgroundImage: "url(img/bg-img/3.jpg)"}}>
        {/* <!-- Main Footer Area --> */}
        <div className="main-footer-area">
            <div className="container">
                <div className="row">

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget">
                            <div className="footer-logo mb-30">
                                <a href="#"><img src="img/core-img/logo.png" alt=""/></a>
                            </div>
                            <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                            <div className="social-info">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h5>QUICK LINK</h5>
                            </div>
                            <nav className="widget-nav">
                                <ul>
                                    <li><a href="#">Purchase</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Payment</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Return</a></li>
                                    <li><a href="#">Advertise</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Orders</a></li>
                                    <li><a href="#">Policities</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h5>BEST SELLER</h5>
                            </div>

                            {/* <!-- Single Best Seller Products --> */}
                            <div className="single-best-seller-product d-flex align-items-center">
                                <div className="product-thumbnail">
                                    <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt=""/></a>
                                </div>
                                <div className="product-info">
                                    <a href="shop-details.html">Cactus Flower</a>
                                    <p>$10.99</p>
                                </div>
                            </div>

                            {/* <!-- Single Best Seller Products --> */}
                            <div className="single-best-seller-product d-flex align-items-center">
                                <div className="product-thumbnail">
                                    <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt=""/></a>
                                </div>
                                <div className="product-info">
                                    <a href="shop-details.html">Tulip Flower</a>
                                    <p>$11.99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h5>CONTACT</h5>
                            </div>

                            <div className="contact-information">
                                <p><span>Address:</span> 505 Silk Rd, New York</p>
                                <p><span>Phone:</span> +1 234 122 122</p>
                                <p><span>Email:</span> info.deercreative@gmail.com</p>
                                <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                                <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Footer Bottom Area --> */}
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="border-line"></div>
                    </div>
                    {/* <!-- Copywrite Text --> */}
                    <div className="col-12 col-md-6">
                        <div className="copywrite-text">
                            <p>&copy; 
                              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
</p>
                        </div>
                    </div>
                    {/* <!-- Footer Nav --> */}
                    <div className="col-12 col-md-6">
                        <div className="footer-nav">
                            <nav>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- ##### Footer Area End ##### --> */}
 
    </div>
    )
  }
}

export default App;
