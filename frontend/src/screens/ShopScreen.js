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
        <title>Amazona</title>
      </Helmet>
      {/* <!-- Page Content --> */}
      <div className="page-heading products-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>new arrivals</h4>
                <h2>sixteen products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
