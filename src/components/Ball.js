import styled, { keyframes } from "styled-components";

const playball = keyframes`
    0%{}
    20%{
        transform: scaleX(1.5);
    }
    40%{
        transform: scaleX(1) scaleY(1.3) rotate(45deg);
    }
    60%{
        transform: scaleX(1.1) scaleY(1.15) rotate(-90deg);
    }
    80%{
        transform: scaleX(2) scaleY(1) rotate(90deg);
    }
    100%{
        transform: scaleX(1) scaleY(1);
    }
`;
const moveBall = keyframes`
    0%{}
    20%{
        transform: translateX(50%);
    }
    40%{
        transform: translateX(50%) translateY(55%);
    }
    60%{
        transform: translateX(100%) translateY(55%) ;
    }
    80%{
        transform: translateX(-50%) translateY(0%) rotate(90deg);
    }
    100%{
        transform: translateX(0%) translateY(0%);
    }
`;

const SBall = styled.div`
  background-color: #ff8552;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  position: absolute;
  left: ${(props) =>
    props.left || props.left === 0 ? (props) => props.left : "unset"};
  bottom: ${(props) =>
    props.bottom || props.bottom === 0 ? (props) => props.bottom : "unset"};
  right: ${(props) =>
    props.right || props.right === 0 ? (props) => props.right : "unset"};
  top: ${(props) =>
    props.top || props.top === 0 ? (props) => props.top : "unset"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${moveBall} 10s ease-in-out infinite forwards;
  div {
    width: ${(props) => props.width / 2}px;
    height: ${(props) => props.height / 2}px;
    background-color: #85ffc7;
    border-radius: 50%;
    animation: ${playball} 20s ease-in-out infinite forwards;
  }
`;

const Ball = (props) => {
  const { width, height, left, bottom, top, right } = props;
  return (
    <SBall
      width={width}
      height={height}
      left={left}
      bottom={bottom}
      top={top}
      right={right}
    >
      <div></div>
    </SBall>
  );
};

export default Ball;
