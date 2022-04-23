import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';


const ImageIntro = ({ hasBug }: { hasBug?: boolean }) => {
  return (
    <ImageIntroWrapper className="img-intro">
      <div className={`circle-bg w-32 sm:w-52 lg:w-96 bg-red-600 ${hasBug && 'rotate'}`} >{hasBug && <img src="images/icons/ladybug.png" alt="bug" className='absolute bug' />}</div>

      <span className='uppercase font-bold text-white text-2xl name'>thuysddoox</span>
      <div className='avatar' >
        <img src="" alt="thuysddoox" className='' />
      </div>

    </ImageIntroWrapper>
  )
}
const rotate = keyframes`
  0%{
    transform: rotate(0deg) ;
  } 
  100%{
    transform: rotate(360deg) ;
  } 
`

const ImageIntroWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  .bug{ 
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .circle-bg{
    padding-bottom: 100%;
    border-radius: 50%;
    box-shadow: #ff9b9b86 0px 0px 30px -5px inset, #ff9b9b86 0px 0px 30px 2px inset, #fd5d5dc4 1px 1px 90px 2px ;
    &.rotate{
      transform-origin:center center ;
      animation: ${rotate} 20s linear infinite;
    }
  }
  .name{
    font-size: 50px;
    position: absolute;
    left: 50%;
    bottom: 40%;
    transform: translateX(-50%);
    letter-spacing: 2rem;
  }
`;
export default ImageIntro;