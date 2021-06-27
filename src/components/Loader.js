import styled, { keyframes } from "styled-components";

const loaderSpin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const SLoader = styled.div`
  background: black;
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 144;
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -300%);
    color: #fff;
  }
  .loader {
    position: absolute;
    margin: -18px 0 0 -18px;
    border: 3.6px solid #fff;
    box-sizing: border-box;
    overflow: hidden;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 50%;
    animation: ${loaderSpin} 2s linear infinite reverse;
    filter: url(#goo);
    box-shadow: 0 0 0 1px #fff inset;
  }
  .loader:before {
    content: "";
    position: absolute;
    -webkit-animation: ${loaderSpin} 2s cubic-bezier(0.59, 0.25, 0.4, 0.69)
      infinite;
    animation: ${loaderSpin} 2s cubic-bezier(0.59, 0.25, 0.4, 0.69) infinite;
    background: #fff;
    transform-origin: top center;
    border-radius: 50%;
    width: 150%;
    height: 150%;
    top: 50%;
    left: -12.5%;
  }
`;

const Loader = () => {
  return (
    <SLoader>
      <p>Please wait we are calculating the best products for you...</p>
      <div class="loader">
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </SLoader>
  );
};
export default Loader;
