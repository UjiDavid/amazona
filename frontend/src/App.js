import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faWhatsapp, faLinkedin, faInstagram, faYoutube, faFacebookF, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ShopScreen from './screens/ShopScreen';
import MapScreen from './screens/MapScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [Profilelinks, setProfilelinks] = useState(false);
  const [Adminlinks, setAdminlinks] = useState(false);
  const [categories, setCategories] = useState([]);
  library.add(fas, far, faWhatsapp, faTwitter, faLinkedin, faYoutube, faCartShopping, faFacebookF, faInstagram, faFontAwesome);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={sidebarIsOpen ? (fullBox ? 'site-container active-cont d-flex flex-column full-box' : 'site-container active-cont d-flex flex-column') : fullBox ? 'site-container d-flex flex-column full-box' : 'site-container d-flex flex-column'}
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header className="">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="/">
                <h2>
                  Sixteen <em>Clothing</em>
                </h2>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navlinks">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/shop" className="nav-link">
                        Shop
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact" className="nav-link">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <a href="/cart" className="cart">
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="searchcart">
          <SearchBox />
        </div>

        <div className={sidebarIsOpen ? 'active-nav side-navbar side-black' : 'side-navbar side-black'}>
          <div className={sidebarIsOpen ? 'active-nav side-navbar side-red' : 'side-navbar side-red'}>
            <div className={sidebarIsOpen ? 'active-nav side-navbar side-white' : 'side-navbar side-white'}>
              <div className="socials">
                <FontAwesomeIcon className="insta" icon="fa-brands fa-instagram" />
                <FontAwesomeIcon className="twitter" icon="fa-brands fa-twitter" />
                <FontAwesomeIcon className="twitter" icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon className="linkedin" icon="fa-brands fa-linkedin" />
                <FontAwesomeIcon className="youtube" icon="fa-brands fa-youtube" />
                <FontAwesomeIcon className="whatsapp" icon="fa-brands fa-whatsapp" />
              </div>
              <button className="closebtn" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                <i className="fas fa-times"></i>
              </button>
              {userInfo ? (
                <div>
                  <button className={Profilelinks ? 'activebtn dropdown-btn' : 'dropdown-btn'} onClick={() => setProfilelinks(!Profilelinks)}>
                    <FontAwesomeIcon className="user" icon="fa-solid fa-user" />
                    {userInfo.name}
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className={Profilelinks ? 'profilelinks dropdown-container' : 'dropdown-container'}>
                    <ul>
                      <li>
                        <a href="/profile">
                          <FontAwesomeIcon icon="fa-solid fa-user-gear" />
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a href="/orderhistory">
                          <FontAwesomeIcon icon="fa-solid fa-chart-bar" />
                          Order History
                        </a>
                      </li>
                      <li>
                        <a href="#signout" onClick={signoutHandler}>
                          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <Link className="sidebaritem" to="/signin">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
                    Sign In/Sign Up
                  </Link>
                </div>
              )}
              {userInfo && userInfo.isAdmin && (
                <div>
                  <button className={Adminlinks ? 'activebtn dropdown-btn' : 'dropdown-btn'} onClick={() => setAdminlinks(!Adminlinks)}>
                    <FontAwesomeIcon className="user" icon="fa-solid fa-user" />
                    Admin Links
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div className={Adminlinks ? 'adminlinks dropdown-container' : 'dropdown-container'}>
                    <ul>
                      <li>
                        <a href="/admin/dashboard">
                          <FontAwesomeIcon icon="fa-solid fa-table-columns" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="/admin/products">
                          <FontAwesomeIcon icon="fa-solid fa-shirt" />
                          Products
                        </a>
                      </li>
                      <li>
                        <a href="/admin/orders">
                          <FontAwesomeIcon icon="fa-solid fa-square-poll-horizontal" />
                          Orders
                        </a>
                      </li>
                      <li>
                        <a href="/admin/users">
                          <FontAwesomeIcon icon="fa-solid fa-users" />
                          Users
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <h3>
                <FontAwesomeIcon icon="fa-solid fa-filter" />
                Categories
              </h3>
              {categories.map((category) => (
                <Nav.Item key={category}>
                  <LinkContainer to={`/search?category=${category}`} onClick={() => setSidebarIsOpen(false)}>
                    <Nav.Link>{category}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
            </div>
          </div>
        </div>
        <button className={sidebarIsOpen ? 'openbtn visible' : 'openbtn'} onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <FontAwesomeIcon icon="fa-solid fa-angles-right" />
        </button>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/shop" element={<ShopScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <div className="subscribe-form">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="line-dec"></div>
                <h1 className="subscribe-heading">
                  Subscribe on <em className="sixteen">Sixteen</em> <em className="clothing">Clothing</em> now!
                </h1>
              </div>
              <div className="col-md-8 offset-md-2">
                <div className="main-content">
                  <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                  <div className="container">
                    <form id="subscribe" action="" method="get">
                      <div className="row">
                        <div className="col-md-7">
                          <fieldset>
                            <input
                              name="email"
                              type="text"
                              className="form-control"
                              id="email"
                              onfocus="if(this.value == 'Your Email...') { this.value = ''; }"
                              onBlur="if(this.value == '') { this.value = 'Your Email...';}"
                              value="Your Email..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-5">
                          <fieldset>
                            <button type="submit" id="form-submit" class="button">
                              Subscribe Now!
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="footer-brand">
                Sixteen <em>Clothing</em>
              </h2>
            </div>
            <div className="col-md-12">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="contact">Help</a>
                  </li>
                  <li>
                    <a href="about">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about">How It Works?</a>
                  </li>
                  <li>
                    <a href="contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="socials-footer">
                <FontAwesomeIcon className="insta" icon="fa-brands fa-instagram" />
                <FontAwesomeIcon className="twitter" icon="fa-brands fa-twitter" />
                <FontAwesomeIcon className="facebook" icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon className="whatsapp" icon="fa-brands fa-whatsapp" />
              </div>
            </div>
          </div>

          <div className="sub-footer">
            {' '}
            <p>Copyright &copy; 2022 Sixteen Clothing </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
