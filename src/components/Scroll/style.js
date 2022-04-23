import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const mouseScroll = keyframes`
  0%   { opacity: 0  }
  50%  { opacity: 1  }
  100% { opacity: .5 }
`;

const mouseWheel = keyframes`
  0%   { opacity: 1; transform: translateY(0) }
  100% { opacity: 0; transform: translateY(18px) }
`;

export const MouseScroll = styled.section`
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%) scale(2);
  z-index: 1;
  .mouse {
    height: 22.5px;
    width: 15px;
    border-radius: 15px;
    border: 1px solid white;
    margin-bottom: 3px;
    /* cursor: pointer; */
    .wheel {
      animation: ${mouseWheel} 1.5s ease infinite;
      height: 6px;
      width: 1px;
      background: white;
      margin: 2px auto;
      border-radius: 2px;
    }
  }
  .arrows {
    .first {
      animation-delay: .1s;
    }
    .second {
      animation-delay: .2s;
    }
    .third {
      animation-delay: .3s;
    }
    span {
      width: 5px;
      height: 5px;
      border-right: 1px solid white;
      border-bottom: 1px solid white;
      transform: rotate(45deg) ;
      display: block;
      margin: 3px auto;
      animation: ${mouseScroll} 2s infinite;
    }
  }
`;
