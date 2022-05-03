import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import ImageIntro from '../../components/ImageIntro';
import { Slide } from 'react-awesome-reveal';
import { Modal } from '../../components/Modal';
import { FadeComponent } from '../../utils/common/fade';
import { ZoomComponent } from '../../utils/common/zoom';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const intro1 = "thuysddoox.";
  const intro2 = "a Frontend Web Developer.";
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
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
      <FadeComponent duration={"3000"} className="relative h-full ">
        <div className="relative h-full ">
          <ZoomComponent duration={"3500"} className="relative h-full ">
            <ImageIntro hasBug={true} />
          </ZoomComponent>
          <span></span>
          <div className="absolute text-gray-400 top-0 mt-28 sm:mt-0 sm:top-1/3 left-0 sm:left-1/3 w-full sm:w-3/5 p-5 sm:p-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline-block relative position text-white"><span className="">Hello,</span> I'm {InFor.text}</h3>
            <p className="text-base md:text-lg font-medium mt-3">I'm {new Date().getFullYear() - 2000} years old. Now, I'm a Fresher and I am developing web interface using Reactjs, Nextjs, HTML/CSS/JS,...  In the future, I wanna be a Fullstack Web Developer. I want to create products which have good performance and UX/UI. <button className="italic font-medium text-sm underline text-white cursor-pointer" onClick={() => setIsOpen(true)}>Readmore</button></p>
            <p className="italic mt-4 text-white">--thuysddoox--</p>
          </div>

        </div>
        <Modal isOpen={isOpen} handleOpen={handleOpenModal}>
          <div className="w-full sm:flex justify-between overflow-y-auto">
            <div>
              <img src="images/avatar.jpg" alt="" className="mt-5 cover object-center h-auto w-full sm:w-80 mx-auto" />
            </div>
            <div className="sm:p-5 mt-5 sm:mt-0 text-white">
              <h3 className="font-semibold text-xl sm:text-2xl">Who Am <span className="text-red-500">I?</span></h3>
              <p className="font-bold text-2xl md:text-3xl my-2">I'm thuysddoox, A <span className="text-red-500">Frontend</span> Web Developer.</p>
              <p className="text-gray-600">Now, I'm a Fresher and I am developing web interface using Reactjs, Nextjs, HTML/CSS/JS,... In the future, I wanna be a Fullstack Web Developer. I want to create products which have good performance and UX/UI.</p>
              <h3 className="font-semibold text-xl sm:text-2xl my-2">Personal <span className="text-red-500">Informations</span></h3>
              <ul className="block sm:flex">
                <li className="w-full sm:w-2/5 flex flex-col pr-4">
                  <span className="my-2"><span className="text-gray-600">First Name: </span> Do</span>
                  {/* <span className="my-2"><span className="text-gray-600">Middle Name: </span> Thi</span> */}
                  <span className="my-2"><span className="text-gray-600">Last Name: </span> Thuy</span>
                  <span className="my-2"><span className="text-gray-600">Address: </span> Hanoi, Vietnam</span>
                </li>
                <li className="w-full sm:w-3/5 flex flex-col">
                  <a className="my-2" href="mailto:dothuy302000@gmail.com" target="_blank"><span className="text-gray-600">E-mail: </span> dothuy302000@gmail.com</a>
                  <a className="my-2" href="tel:0977002602" target="_blank"><span className="text-gray-600">Phone: </span> 0977002602</a>
                  <a className="my-2" href="" target="_blank"><span className="text-gray-600">Skype: </span> thúy đỗ</a>
                </li>
              </ul>
              <button className="font-semibold text-white px-4 py-2 bg-red-500 rounded-lg cursor-pointer mt-3"><a href="images/CV-DoThiThuy.pdf" download={true}>Download My CV</a></button>
            </div>
          </div>
        </Modal>
      </FadeComponent>
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
      left: 50%;
      top: 65%; 
    .circle-bg{
      width: 200px;
    }}
  }
`;

export default AboutPage;