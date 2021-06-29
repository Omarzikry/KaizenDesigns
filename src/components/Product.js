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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-bottom: 60px;
  }
`;

const SProductsImagesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 768px) {
    order: 2;
  }
`;

const SProductsInfo = styled.div`
  position: sticky;
  top: 10px;
  height: 200px;
  padding: 1rem 3rem;
  h1,
  p {
    line-height: 1.5em;
    padding-bottom: 0.4em;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    position: static;
    height: auto;
    order: 1;
  }
`;

const SButton = styled.button`
  background-color: #2a2b2a;
  border-color: #2a2b2a;
  padding: 0.3rem 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  margin-top: 1rem;
  &:hover {
    background-color: transparent;
    color: #2a2b2a;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
  }
`;

const SPrice = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
`;

const SProductCard = styled.div`
  width: 50vw;
  position: relative;
  padding-bottom: 0.5rem;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

// const SMobileButtonContainer = styled.div`
//   position: fixed;
//   z-index: 99;
//   left: 0;
//   bottom: 0;
//   height: 60px;
//   background-color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   border-top: 1px solid #2A2B2A;
//   @media (min-width: 769px) {
//     display: none;
//   }
// `;
// const SMobileButton = styled.div`
//   background-color: #2A2B2A;
//   border-color: #2A2B2A;
//   padding: 0.3rem 1rem;
//   color: white;
//   font-weight: 700;
//   font-size: 1.5rem;
//   cursor: pointer;
//   transition: all 0.4s ease;
// `;

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
      {/* <SMobileButtonContainer>
        <SMobileButton>Buy Now</SMobileButton>
      </SMobileButtonContainer> */}
    </SProductGrid>
  );
};

export default Product;
