import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import formatMoney from "../utils/formatMoney";
import { selectProducts } from "./productsSlice";

const SProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SProducts = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 5rem 1rem;
  @media (max-width: 768px) {
    width: 95%;
  }
  h1 {
    font-size: 3rem;
    color: #1c2826;
  }
  a {
    text-decoration: none;
  }
`;

const SProductCard = styled.div`
  img {
    width: 100%;
    margin: 1rem 0;
  }
  h3,
  p {
    color: #1c2826;
    margin: 0;
  }
`;

const Products = () => {
  const products = useSelector(selectProducts);
  return (
    <SProducts>
      <h1>Products</h1>
      <SProductsGrid>
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <SProductCard>
              <img src={product.gallery[0].img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{formatMoney(product.price)}</p>
            </SProductCard>
          </Link>
        ))}
      </SProductsGrid>
    </SProducts>
  );
};
export default Products;
