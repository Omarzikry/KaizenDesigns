import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { selectProducts } from "./productsSlice";
import formatMoney from "../utils/formatMoney";

const SProductGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  position: relative;
`;

const SProductsImagesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SProductsInfo = styled.div`
  position: sticky;
  top: 10px;
  height: 100px;
`;

const SButton = styled.button`
  background-color: #000;
  border-color: #000;
  padding: 0.3rem 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

const SPrice = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
`;

const SProductCard = styled.div`
  width: 50vw;
  position: relative;
  img {
    width: 100%;
  }
`;

const fadeOut = keyframes`
0%{
  transform: translate(-10px, -10px) scale(1);
  opacity: .7;
}
20%{
  transform: translate(-10px, -10px) scale(.5);
  opacity: 0.4
}
40%{
  transform: translate(-10px, -10px) scale(0);
  opacity: 0
}
50%{
  transform: translate(-10px, -10px) scale(.3);
  opacity: 0.3
}
60%{
  transform: translate(-10px, -10px) scale(.5);
  opacity: 0.4
}
80%{
  transform: translate(-10px, -10px) scale(1.1);
  opacity: .7;
}
100%{
  transform: translate(-10px, -10px) scale(1);
  opacity: .7;
}

`;

const SCrossProductIndicator = styled.div`
  display: ${(props) => (props.crossPos ? "block" : "none")};
  position: absolute;
  left: ${(props) => props.crossPos.left};
  top: ${(props) => props.crossPos.top};
  background-color: #fff;
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;
const SCrossProductIndicatorOuter = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transform: translate(-10px, -10px);
  animation: ${fadeOut} 5s ease-in-out reverse infinite;
  opacity: 0.7;
`;

const Product = (props) => {
  const params = useParams();
  const products = useSelector(selectProducts);
  console.log(products);
  const product = products.filter(
    (product) => product.id === parseInt(params.id)
  )[0];
  return (
    <SProductGrid>
      <SProductsImagesGrid>
        {product.gallery.map((item) => (
          <SProductCard>
            <Link to={`/product/${product.crossProductId}`}>
              <SCrossProductIndicator
                crossPos={
                  item.hasCrossProduct ? product.crossProductPosition : 0
                }
              >
                <SCrossProductIndicatorOuter></SCrossProductIndicatorOuter>
              </SCrossProductIndicator>
            </Link>
            <img src={item.img} alt={item.alt} />
          </SProductCard>
        ))}
      </SProductsImagesGrid>
      <SProductsInfo>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <SPrice>{formatMoney(product.price)}</SPrice>
        <SButton>Buy Now</SButton>
      </SProductsInfo>
    </SProductGrid>
  );
};

export default Product;
