import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { selectFilters } from "./productsSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const SFilterProducts = styled.div`
  height: 100vh;
  position: relative;
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

const FilterProducts = () => {
  const [direction, setDirection] = useState();
  const onSwipe = (direction) => {
    // console.log("You swiped: " + direction);
    setDirection(direction);
  };

  console.log(direction);

  const filters = useSelector(selectFilters);
  return (
    <SFilterProducts>
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
    </SFilterProducts>
  );
};
export default FilterProducts;
