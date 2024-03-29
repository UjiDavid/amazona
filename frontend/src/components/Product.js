import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { Store } from '../Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Product(props) {
  const { product } = props;
  const imgthum = product.image.replace('/upload', '/upload/w_300/h_400');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    toast.success('Product added successfully');
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="prods">
      <Link to={`/product/${product.slug}`}>
        <img src={imgthum} className="card-img-top" alt={product.name} width="200" height={400} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.description}</Card.Text>
        <Rating rating={product.rating} numReviews={product.numReviews} />

        <div className="card-footer mt-3">
          <Card.Text> &#8358;{product.price}</Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button variant="danger" onClick={() => addToCartHandler(product)}>
              Add to cart
              <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default Product;
