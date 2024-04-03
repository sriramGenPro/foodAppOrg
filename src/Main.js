import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
import './Main.css';

function Main() {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
   
    let bootstrapScript, popperScript, bootstrapScript2, fontawesomeScript, bootstrapCSS, customCSS;

    useEffect(() => {
        const loadScripts = async () => {
          // Load jQuery
          bootstrapScript = document.createElement('script');
          bootstrapScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
          bootstrapScript.integrity = 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj';
          bootstrapScript.crossOrigin = 'anonymous';
          await new Promise((resolve, reject) => {
            bootstrapScript.onload = resolve;
            bootstrapScript.onerror = reject;
            document.body.appendChild(bootstrapScript);
          });
      
          // Load Popper.js
          popperScript = document.createElement('script');
          popperScript.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js';
          popperScript.integrity = 'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN';
          popperScript.crossOrigin = 'anonymous';
          await new Promise((resolve, reject) => {
            popperScript.onload = resolve;
            popperScript.onerror = reject;
            document.body.appendChild(popperScript);
          });
      
          // Load Bootstrap
          bootstrapScript2 = document.createElement('script');
          bootstrapScript2.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
          bootstrapScript2.integrity = 'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV';
          bootstrapScript2.crossOrigin = 'anonymous';
          await new Promise((resolve, reject) => {
            bootstrapScript2.onload = resolve;
            bootstrapScript2.onerror = reject;
            document.body.appendChild(bootstrapScript2);
          });
      
          // Load Font Awesome
          fontawesomeScript = document.createElement('script');
          fontawesomeScript.src = 'https://kit.fontawesome.com/20c5629a29.js';
          fontawesomeScript.crossOrigin = 'anonymous';
          await new Promise((resolve, reject) => {
            fontawesomeScript.onload = resolve;
            fontawesomeScript.onerror = reject;
            document.body.appendChild(fontawesomeScript);
          });
      
          // Load Bootstrap CSS
          bootstrapCSS = document.createElement('link');
          bootstrapCSS.rel = 'stylesheet';
          bootstrapCSS.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
          bootstrapCSS.integrity = 'sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z';
          bootstrapCSS.crossOrigin = 'anonymous';
          document.head.appendChild(bootstrapCSS);
      
          // Load Custom CSS
          customCSS = document.createElement('link');
          customCSS.rel = 'stylesheet';
          customCSS.href = 'home.css';
          document.head.appendChild(customCSS);
        };
      
        loadScripts();
      
        return () => {
          // Clean up function to remove added scripts when component unmounts
          if (bootstrapScript && bootstrapScript.parentNode) {
            bootstrapScript.parentNode.removeChild(bootstrapScript);
          }
          if (popperScript && popperScript.parentNode) {
            popperScript.parentNode.removeChild(popperScript);
          }
          if (bootstrapScript2 && bootstrapScript2.parentNode) {
            bootstrapScript2.parentNode.removeChild(bootstrapScript2);
          }
          if (fontawesomeScript && fontawesomeScript.parentNode) {
            fontawesomeScript.parentNode.removeChild(fontawesomeScript);
          }
          if (bootstrapCSS && bootstrapCSS.parentNode) {
            bootstrapCSS.parentNode.removeChild(bootstrapCSS);
          }
          if (customCSS && customCSS.parentNode) {
            customCSS.parentNode.removeChild(customCSS);
          }
        };
      }, []);

      if (isLoading) {
        return <div>Loading ...</div>;
      }
  
    return (
      <div>
        
       
      
        <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" className="food-munch-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
      
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <div className='login'>
                        <img src={user.picture} alt={user.name} />
                </div>
                    <a className="nav-link active " id="navItem1" href="#wcuSection">
                        Why Choose Us?
                        <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-link" href="#exploreMenuSection" id="navItem2">Explore Menu</a>
                    <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">Delivery & Payment</a>
                    <a className="nav-link" href="#followUsSection" id="navItem4">Follow Us</a>
                    <div className='login'>
                        
                        
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='custom-button'>
                        Log Out
                        </button>
                </div>
            </div>
        </div>
    </nav>
    <div className="banner-section-bg-container d-flex justify-content-center flex-column">
        <div className="text-center">
            <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
            <p className="banner-caption mb-4">Eat Smart & Healthy</p>
            <button className="custom-button">View Menu</button>
            <button className="custom-outline-button">Order Now</button>
        </div>
    </div>
    <div className="wcu-section pt-5 pb-5" id="wcuSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="wcu-section-heading">Why Choose Us?</h1>
                    <p className="wcu-section-description">
                        We use both original recipes and classNameic versions of famous food
                        items.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="wcu-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png" className="wcu-card-image" />
                        <h1 className="wcu-card-title mt-3">Food Service</h1>
                        <p className="wcu-card-description">
                            Experience fine dining at the comfort of your home. All our
                            orders are carefully packed and arranged to give you the nothing
                            less than perfect.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="wcu-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png" className="wcu-card-image" />
                        <h1 className="wcu-card-title mt-3">Fresh Food</h1>
                        <p className="wcu-card-description">
                            The Fresh Food group provides fresh-cut fruits and vegetables
                            directly picked from our partner farms and farm houses so that
                            you always get them tree to plate.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="wcu-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png" className="wcu-card-image" />
                        <h1 className="wcu-card-title mt-3">Best Offers</h1>
                        <p className="wcu-card-description">
                            Food Coupons & Offers upto
                            <span className="offers">50% OFF</span>
                            and Exclusive Promo Codes on All Online Food Orders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="menu-section-heading">Explore Menu</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Veg Starters</h1>
                        <Link to ='/VegStarters'>View All</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Non-Veg Starters</h1>
                        <Link to ='/NonVegStarters'>View All</Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Soups</h1>
                        <Link to ='/Soups'>View All</Link>
                    </div>
                </div>
                
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" className="menu-item-image w-100" />
                        <h1 className="menu-card-title">Main Course</h1>
                        <Link to ='/Maincourse'>View All</Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  
    <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 order-1 order-md-2">
                    <div className="text-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" className="delivery-and-payment-section-img" />
                    </div>
                </div>
                <div className="col-12 col-md-7 order-2 order-md-1">
                    <h1 className="delivery-and-payment-section-heading">
                        Delivery and Payment
                    </h1>
                    <p className="delivery-and-payment-section-description">
                        Enjoy hassle-free payment with the plenitude of payment options
                        available for you. Get live tracking and locate your food on a
                        live map. It's quite a sight to see your food arrive to your door.
                        Plus, you get a 5% discount on every order every time you pay
                        online.
                    </p>
                    <button type="button" className="custom-button" data-toggle="modal" data-target="#exampleModal">
                Order Now
              </button>
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title thanking-customers-section-modal-title" id="exampleModalLabel">
                        Order Comfirmed
                      </h5>
                      
                    </div>
                    <div className="modal-body">
                      <h3> Get ready for your excitement to arrive at your doorstep!</h3>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                    <div className="mt-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png" className="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png" className="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" className="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png" className="payment-card-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="thanking-customers-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h1 className="thanking-customers-section-heading">
              Thank you for being a valuable customer to us.
            </h1>
            <p className="thanking-customers-section-description">
              We have a surprise gift for you
            </p>
            <div className="d-md-none">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                className="thanking-customers-section-img"
              />
            </div>
            <div>
              <button type="button" className="custom-button" data-toggle="modal" data-target="#exampleModal1">
                Redeem Gift
              </button>
              <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog mt-5">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title thanking-customers-section-modal-title" id="exampleModalLabel1">
                        Gift Voucher
                      </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
                        className="w-100"
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 d-none d-md-block">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
              className="thanking-customers-section-img"
            />
          </div>
        </div>
      </div>
    </div>
   
    <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="follow-us-section-heading">Follow Us</h1>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="follow-us-icon-container">
                            <i className="fab fa-twitter icon"></i>
                        </div>
                        <div className="follow-us-icon-container">
                            <i className="fab fa-instagram icon"></i>
                        </div>
                        <div className="follow-us-icon-container">
                            <i className="fab fa-facebook icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png" className="food-munch-logo" />
                    <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
                    <p className="footer-section-address">
                        123 Ayur Vigyan Nagar, New Delhi, India.
                    </p>
                </div>
            </div>
        </div>
    </div>
      
      
      
      
      
      </div>
    );
  }
  
  export default Main;