import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload.products, page: action.payload.page, pages: action.payload.pages, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomeScreen() {
  const [{ loading, error, products, pages }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products?page=${page}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //   setProducts(result.data);
    };
    fetchData();
  }, [page]);
  return (
    <div>
      <Helmet>
        <title>Sixteen Clothing</title>
      </Helmet>
      {/* <!-- Banner Starts Here --> */}
      <div className="page-heading home-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>best deals</h4>
                <h2>featured products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Ends Here --> */}
      <section>
        <div className="section-heading">
          <h1>Featured Products</h1>
        </div>
        <div className="productslist">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <Row>
                <div className="card-group">
                  {products.map((product) => (
                    <Col key={product.slug} sm={6} lg={4} className="mb-3">
                      <Product product={product}></Product>
                    </Col>
                  ))}
                </div>
              </Row>
              <div className="pagectrl">
                {[...Array(pages).keys()].map((x) => (
                  <Link className={x + 1 === Number(page) ? 'btn cur-page' : 'btn'} key={x + 1} to={`?page=${x + 1}`}>
                    {x + 1}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About Sixteen Clothing</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="images/open.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h4>Looking for Quality products?</h4>
                <p>
                  Sixteen Clothing is an online fashion boutique based in Nigeria. We offer quality clothes, shoes, bags and accesories at an
                  affordable price
                </p>
                <ul className="featured-list">
                  <li>
                    <h4>Quality Assured</h4>
                  </li>
                  <li>
                    <h4>Nationwide Delivery</h4>
                  </li>
                  <li>
                    <h4>Next Day delivery within Abuja</h4>
                  </li>
                  <li>
                    <h4>Online Shopping 24/7</h4>
                  </li>
                </ul>
                <Link to="/about" className="filled-button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
