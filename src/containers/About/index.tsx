import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import ImageIntro from '../../components/ImageIntro';

const cursorTextBlink = keyframes`
  0%{
    opacity: 0.2;
  } 
  100%{
    opacity: 1;
  } 

`
const AboutPage = () => {
  const [InFor, setInFor] = useState<any>({ intro: 'thuysddoox.', text: 'thuysddoox.', desc: true });
  const intro1 = "thuysddoox.";
  const intro2 = "a Frontend Web Developer.";
  function changeIntro() {
    if (InFor.text.length > 0) {
      if (InFor.text.length === InFor.intro.length || InFor.desc) {
        setInFor({ ...InFor, text: InFor.intro.substr(0, InFor.text.length - 1), desc: true });
      }
      else {
        setInFor({ ...InFor, text: InFor.intro.substr(0, InFor.text.length + 1), desc: false });
      }
    }
    else {
      if (InFor.intro === intro1) {
        setInFor({ ...InFor, intro: intro2, text: intro2[0], desc: false });
      }
      else {
        setInFor({ ...InFor, intro: intro1, text: intro1[0], desc: false });

      }
    }
  }
  useEffect(() => {
    const TextInterval = setInterval(changeIntro, 150);
    // console.log(InFor.text)
    return () => {
      clearInterval(TextInterval);
    }
  }, [InFor])
  return (
    <AboutPageWrapper className="relative w-full" style={{ background: `url(images/bg.png) center center / cover no-repeat scroll` }}>
      <div className="relative h-full ">
        <ImageIntro hasBug={true} />
        <span></span>
        <div className="absolute text-gray-400 top-1/3 left-1/3 w-3/5">
          <h3 className="text-5xl font-bold inline-block relative position text-white"><span className="">Hello,</span> I'm {InFor.text}</h3>
          <p className="text-lg font-medium mt-3">I'm {new Date().getFullYear() - 2000} years old. Now, I'm a Fresher and I am developing web interface using Reactjs, Nextjs, HTML/CSS/JS,...  In the future, I wanna be a Fullstack Web Developer. I want to create products which have good performance and UX/UI. <button className="italic font-medium">Readmore</button></p>
          <p className="italic mt-4 text-white">--thuysddoox--</p>
        </div>
      </div>
    </AboutPageWrapper >
  )
}
const AboutPageWrapper = styled.div`
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  .position:after{
    content:'';
    position: 'absolute';
    top: 0;
    right: 0px;
    border-right: 5px solid white;
    animation: ${cursorTextBlink} 1s ease-in-out infinite;
  }
  .name{
    display: none;
  }
  .img-intro{
    left: 15%;
    top: 35%;
    .circle-bg{
      width: 300px;
    }
    .avatar{
      display: none;
    }
  }
  @media (max-width: 768px) {
    .img-intro{
    .circle-bg{
      width: 200px;
    }}
  }
`;

export default AboutPage;