import styled from "styled-components";
import personalizedImg from "../assets/imgs/personalized.svg";
import canChooseImg from "../assets/imgs/choose-yourself.svg";

const SChooseCategory = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
`;

const SSelectGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const SSelect = styled.div`
  overflow: hidden;
  cursor: pointer;
  h2 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }
  img {
    margin-top: 1rem;
    max-width: 100%;
    transition: filter 0.4s ease;
  }
  &:hover {
    img {
      filter: saturate(2) drop-shadow(0 0 0.1rem #5222d0);
    }
  }
`;
const ChooseCategory = () => {
  return (
    <SChooseCategory>
      <h1>Would you like personalized experience? 😉</h1>
      <SSelectGrid>
        <SSelect>
          <h2>I can choose myself 🤓</h2>
          <img src={canChooseImg} alt="personalize your ceramic" />
        </SSelect>
        <SSelect>
          <h2>Personalized</h2>
          <img src={personalizedImg} alt="personalize your ceramic" />
        </SSelect>
      </SSelectGrid>
    </SChooseCategory>
  );
};
export default ChooseCategory;
