import TinderCard from "react-tinder-card";
import img1 from "../assets/imgs/products1.jpeg";
import img2 from "../assets/imgs/matcha-and-juicer.jpeg";
import styled from "styled-components";

const SFilterProducts = styled.div`
  height: 100vh;
  position: relative;
  .card {
    img {
      width: 90%;
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
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <SFilterProducts>
      <SCardContainer>
        <TinderCard
          className="card"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("img1")}
        >
          <img src={img1} alt="" />
        </TinderCard>
      </SCardContainer>
      <SCardContainer>
        <TinderCard
          className="card"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("img2")}
        >
          <img src={img2} alt="" />
        </TinderCard>
      </SCardContainer>
      <SCardContainer>
        <TinderCard
          className="card"
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("img3")}
        >
          <img src={img2} alt="" />
        </TinderCard>
      </SCardContainer>
    </SFilterProducts>
  );
};
export default FilterProducts;
