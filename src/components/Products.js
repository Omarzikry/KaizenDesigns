import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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
  padding: 5rem 2.5%;
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
  const history = useHistory();
  const [filteredProducts, setFilteredProducts] = useState();
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState();

  useEffect(() => {
    setFilters(history.location.search.split("=").slice(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!history.location.search) {
      return;
    }
    const tagsFiltersArray = history.location.search
      .split("=")
      .slice(1)[0]
      .split("-");
    console.log(tagsFiltersArray);
    let filteredArray = products.map((product) => {
      let inTags;
      // eslint-disable-next-line array-callback-return
      product.tags.map((tag) => {
        if (tagsFiltersArray.indexOf(tag) > -1) {
          inTags = product;
        }
      });
      return inTags;
    });
    const dryArray = filteredArray.filter((item) => item !== undefined);
    setFilteredProducts(dryArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(filteredProducts);
  return (
    <SProducts>
      <h1>Products</h1>
      {/* {filters.map((filter) => (
        <p>{filter}</p>
      ))} */}
      <SProductsGrid>
        {!!filteredProducts?.length &&
          filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <SProductCard>
                <img src={product.gallery[0].img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{formatMoney(product.price)}</p>
              </SProductCard>
            </Link>
          ))}
        {!filteredProducts?.length &&
          products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
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
