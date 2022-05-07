import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ContactScreen() {
  const [faq1Active, setFaq1Active] = useState(false);
  const [faq2Active, setFaq2Active] = useState(false);
  const [faq3Active, setFaq3Active] = useState(false);
  const [faq4Active, setFaq4Active] = useState(false);
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="page-heading contact-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>contact us</h4>
                <h2>let’s get in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15763.65788109388!2d7.5041012!3d8.9800178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0985759e3baae96!2sPurple%20Stone!5e0!3m2!1sen!2sng!4v1651922268649!5m2!1sen!2sng"
                  width="100%"
                  height="330px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content">
                <h4>About our office</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.
                </p>
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
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="send-message">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Send us a Message</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail Address" required="" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required="" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="filled-button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="section-heading">
                <h2>FAQ</h2>
              </div>
              <div className="faq-container">
                <div className={faq1Active ? 'faq active' : 'faq'}>
                  <h3 className="faq-title" onClick={() => setFaq1Active(!faq1Active)}>
                    About Us
                  </h3>
                  <p className="faq-text">
                    Visit our <a href="/about">about us</a> page to read more about our business! Customer service is available Monday through Friday, 7 a.m. to 4 p.m. CST, and our Warehouse ships orders out within those hours. Our website is
                    available to make purchases 24/7!
                  </p>
                  <button className="faq-toggle" onClick={() => setFaq1Active(!faq1Active)}>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className={faq2Active ? 'faq active' : 'faq'}>
                  <h3 className="faq-title" onClick={() => setFaq2Active(!faq2Active)}>
                    Product Out of Stock
                  </h3>
                  <p className="faq-text">
                    We are not able to reorder everything we originally ordered, but we do attempt to reorder our best sellers. If we are able to reorder the item, we will post the item on our New Arrivals page.
                    <br />
                    Subscribe to our newsletter to be notified when products are restocked.
                  </p>
                  <button className="faq-toggle" onClick={() => setFaq2Active(!faq2Active)}>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className={faq3Active ? 'faq active' : 'faq'}>
                  <h3 className="faq-title" onClick={() => setFaq3Active(!faq3Active)}>
                    Delivery
                  </h3>
                  <p className="faq-text">
                    We only deliver within Nigeria.
                    <br />
                    Deliveries within Abuja are completed the next working day after order is made.
                    <br />
                    Deliveries outside Abuja are completed within 3-5 working days after order is made.
                  </p>
                  <button className="faq-toggle" onClick={() => setFaq3Active(!faq3Active)}>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className={faq4Active ? 'faq active' : 'faq'}>
                  <h3 className="faq-title" onClick={() => setFaq4Active(!faq4Active)}>
                    Return Policy
                  </h3>
                  <p className="faq-text">
                    Items must be returned unworn and unwashed in addition to being smoke, deodorant, make-up and damage free.
                    <br />
                    Original tags (if applicable) must be attached & intact.
                    <br />
                    If you feel you have received a defective or damaged item, please contact us within 3 business days of the delivery date.
                    <br />
                    Shoes must be shipped back in their original shoe box. The shoe box needs to be placed in another box to avoid damage from shipping.
                    <br />
                  </p>
                  <button className="faq-toggle" onClick={() => setFaq4Active(!faq4Active)}>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-times"></i>
                  </button>
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
                <h2>Our Happy Customers</h2>
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
