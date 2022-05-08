import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutScreen() {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="page-heading about-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>about us</h4>
                <h2>our company</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Background</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="images/open.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Who we are &amp; What we do?</h4>
                <p>
                  Sixteen Clothing is an online fashion boutique based in Nigeria. We offer quality clothes, shoes, bags and accesories at an affordable price
                  <br /> We offer the best quality at unbeatable prices. Orders within Abuja are delivered the next working day. Orders outside Abuja are delivered within 1-3 working days after order is made. No pickups at our office, our website is
                  available 24/7 for your online shopping.
                  <br />
                  Subscribe to our newsletter and follow us across our social media platforms to get updates on New Arrivals and Best Offers!
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Team Members</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="images/team01.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Johnny William</h4>
                  <span>CO-Founder</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="images/team02.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Karry Pitcher</h4>
                  <span>Product Expert</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="images/team03.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Michael Soft</h4>
                  <span>Chief Marketing</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="images/team04.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Mary Cool</h4>
                  <span>Product Specialist</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="images/team05.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>George Walker</h4>
                  <span>Product Photographer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="images/team06.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Kate Town</h4>
                  <span>General Manager</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Product Management</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <a href="#" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Customer Relations</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <a href="#" className="filled-button">
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Global Collection</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                  <a href="#" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="happy-clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Happy Partners</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-clients owl-carousel">
                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="1" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="2" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="3" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="4" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="5" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
