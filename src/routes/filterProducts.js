import styled from "styled-components";
import Ball from "../components/Ball";
import FilterProducts from "../components/FilterProducts";

const SFilterProductsPage = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const FilterProductsPage = () => {
  return (
    <SFilterProductsPage>
      <Ball width={300} height={300} left={0} bottom={0} />
      <Ball width={200} height={200} right={0} top={0} />
      <FilterProducts />
    </SFilterProductsPage>
  );
};
export default FilterProductsPage;
