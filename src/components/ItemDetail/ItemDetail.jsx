import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

export function formatPrice(number) {
  return new Intl.NumberFormat().format(number);
}

const ItemDetail = ({ product }) => {
  const { addToCart, getItemInCart } = useContext(cartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const itemInCart = getItemInCart(product.id);
  const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock;

  function handleAddToCart(quantity) {
    addToCart(product, quantity);
    setIsAddedToCart(true);
  }

  return (
    <article className="DetailContainer">
      <header>
        <h1>{product.category.toUpperCase()}</h1>
      </header>
      <picture>
        <img width={400} src={product.img} alt={product.title} />
      </picture>
      <section>
        <div>
          <h2>{product.title}</h2>
          <p>{product.detalle}</p>
        </div>
        <p>Color: {product.color}</p>
        <h2>${formatPrice(product.price)}</h2>
        {maxItems === 1 ? (
          <p>Stock: {maxItems} unidad.</p>
        ) : (
          <p>Stock: {maxItems} unidades.</p>
        )}
        {maxItems > 0 ? (
          isAddedToCart ? (
            <Link to={`/cart`}>
              <ButtonComponent width="200px" height="40px">
                Ir al carrito
              </ButtonComponent>
            </Link>
          ) : (
            <ItemCount
              onAddToCart={handleAddToCart}
              initial={1}
              stock={maxItems}
            />
          )
        ) : (
          <div>
            <h3>No hay stock disponible.</h3>
            <Link to={`/cart`}>
              <ButtonComponent width="200px" height="40px">
                Ir al carrito
              </ButtonComponent>
            </Link>
          </div>
        )}
      </section>
    </article>
  );
};

export default ItemDetail;
