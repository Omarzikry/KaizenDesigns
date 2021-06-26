import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { selectFilters } from "./productsSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import arrowLeft from "../assets/imgs/arrow-left.svg";
import arrowRight from "../assets/imgs/arrow-right.svg";
import Loader from "./Loader";
import { useHistory } from "react-router-dom";

const SFilterProducts = styled.div`
  height: 100vh;
  position: relative;
  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  .card {
    width: 90vw;
    max-width: 500px;
    img {
      width: 90vw;
      max-width: 500px;
    }
  }
`;

const SCardContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  pointer-events: none;
  text-align: right;
  z-index: 2;
  p {
    font-size: 4rem;
  }
  img {
    width: 100px;
  }

  @media (max-width: 768px) {
    padding-left: 0.5rem;
    p {
      font-size: 2rem;
    }
    img {
      width: 40px;
    }
  }
`;

const SRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  p {
    font-size: 4rem;
  }
  img {
    width: 100px;
  }
  @media (max-width: 768px) {
    padding-right: 0.5rem;
    p {
      font-size: 2rem;
    }
    img {
      width: 40px;
    }
  }
`;

const FilterProducts = () => {
  const [direction, setDirection] = useState();
  const [slidesCount, setSlidesCount] = useState(0);
  const [slidesFinished, setSlidesFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  let slides = 0;

  const onSwipe = (direction) => {
    // console.log("You swiped: " + direction);
    setDirection(direction);
    slides++;
    setSlidesCount(slides + 1);
  };

  useEffect(() => {
    if (slidesCount === filters.length) {
      setSlidesFinished(true);
      calculateResults();
    }
    console.log(slidesCount, filters.length);
    console.log(slidesFinished);
  }, [direction + slides]);

  const calculateResults = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push("/products");
    }, 3000);
  };
  console.log(direction);
  console.log(slidesFinished);

  const filters = useSelector(selectFilters);
  return (
    <SFilterProducts>
      <h1>Swip</h1>
      <SLeft>
        <img src={arrowLeft} alt="" />
        <div>
          <p>🛑</p>
        </div>
      </SLeft>
      {filters.map((filter) => (
        <SCardContainer key={filter.id}>
          <TinderCard
            className="card"
            onSwipe={(dir) => onSwipe(dir, filter.tags)}
          >
            <img src={filter.img} alt="" />
          </TinderCard>
        </SCardContainer>
      ))}
      <SRight>
        <div>
          <p>😍</p>
        </div>
        <img src={arrowRight} alt="" />
      </SRight>
      {isLoading && <Loader />}
    </SFilterProducts>
  );
};
export default FilterProducts;
