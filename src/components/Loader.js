import styled, { keyframes } from "styled-components";

const pathTriangle = keyframes`

    33% {
        stroke-dashoffset: 74;
    }
    66% {
        stroke-dashoffset: 147;
    }
    100% {
        stroke-dashoffset: 221;
    }

`;

const dotRect = keyframes`
    33% {
        transform: translate(0, 0);
    }
    66% {
        transform: translate(10px, -18px);
    }
    100% {
        transform: translate(-10px, -18px);
    }
`;

const dotTriangle = keyframes`

    33% {
        transform: translate(0, 0);
    }
    66% {
        transform: translate(10px, -18px);
    }
    100% {
        transform: translate(-10px, -18px);
    }
`;

const loaderSpin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const SLoader = styled.div`
  background: #1b2832;
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 144;
  .loader {
    position: absolute;
    margin: -18px 0 0 -18px;
    border: 3.6px solid #ff974d;
    box-sizing: border-box;
    overflow: hidden;
    width: 36px;
    height: 36px;
    left: 50%;
    top: 50%;
    animation: ${loaderSpin} 2s linear infinite reverse;
    filter: url(#goo);
    box-shadow: 0 0 0 1px #ff974d inset;
  }
  .loader:before {
    content: "";
    position: absolute;
    -webkit-animation: ${loaderSpin} 2s cubic-bezier(0.59, 0.25, 0.4, 0.69)
      infinite;
    animation: ${loaderSpin} 2s cubic-bezier(0.59, 0.25, 0.4, 0.69) infinite;
    background: #ff974d;
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
