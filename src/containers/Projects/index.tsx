import styled from '@emotion/styled';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import Line from '../../components/Line';
import { Modal } from '../../components/Modal';
import ProjectItem, { Project } from '../../components/ProjectItem';
import Scroll from '../../components/Scroll';
import { FadeComponent } from '../../utils/common/fade';
import { SlideComponent } from '../../utils/common/slide';
import { ZoomComponent } from '../../utils/common/zoom';
const ProjectPage = () => {
  const personal = useRef<any>();
  const list: Array<Project> = [
    {
      name: "Fudgud",
      link: "https://fudgud-thuysddoox.vercel.app/",
      thumbnail: "images/projects/fudgud.PNG",
      intro: "Project used NextJs. Website for restaurant",
    },
    {
      name: "My Portfolio",
      link: "https://thuysddoox.netlify.app/",
      thumbnail: "images/projects/fudgud.PNG",
      intro: "Project used React.",
    },
    {
      name: "Ultilities",
      link: "https://thuysddoox.github.io/Ultilities/",
      thumbnail: "images/projects/utilities.PNG",
      intro: "Project used HTML/CSS/JS. Website for restaurant",
    },
    {
      name: "2021",
      link: "https://thuysddoox.github.io/2021/",
      thumbnail: "images/projects/2021.PNG",
      intro: "Project used HTML/CSS/JS.",
    },
    {
      name: "Setsail Clone",
      link: "https://thuysddoox.github.io/SetSail_Copy/",
      thumbnail: "images/projects/setsail.PNG",
      intro: "Project used HTML/CSS/JS.",
    },


  ];
  function handleScroll() {
    personal.current.scrollIntoView();
  }
  return (
    <ProjectPageWrapper className="relative w-full" style={{ background: `url(images/bg.png) left top / cover no-repeat scroll` }}>
      <div className="wrapper bg-transparent p-5 container">
        <div className="mt-2 project-item relative mb-36" >
          <SlideComponent duration={"2000"} direction="left">
            <div className="flex items-center justify-start mb-6">
              <Line />
              <h3 className="inline-block text-white font-bold text-lg sm:text-2xl ">In Bluebottle Digital VietNam</h3>
            </div>
          </SlideComponent>
          <FadeComponent duration={"3000"}>
            <div className="flex items-start justify-evenly w-full flex-wrap" >
              <div className="w-full sm:w-1/2 p-4">
                <ProjectItem intro="Create website based on the template available when client order." hasDetail={true} name="Prism Website" thumbnail={"images/projects/prism.PNG"} />
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <ProjectItem intro="I created all interface of website use NextJs" hasDetail={false} name="Bluebottle Website" thumbnail={"images/projects/bluebottle.PNG"} />
              </div>
            </div>
          </FadeComponent>
          {/* <ZoomComponent duration={"3000"}> */}
          <Scroll handleScroll={handleScroll} />
          {/* </ZoomComponent> */}
        </div>

        <div className="project-item pt-6 md:pt-16 lg:pt-32 lg:min-h-screen" ref={personal}>
          <SlideComponent duration={"2000"} direction="left">
            <div className="flex items-center justify-start mb-6">
              <Line />
              <h3 className="inline-block text-white font-bold text-lg sm:text-2xl">Personal Project(All projects have only frontend)</h3>
            </div>
          </SlideComponent>
          <FadeComponent duration={"3000"}>
            <div className="flex items-center justify-start w-full flex-wrap">
              {list.map((item) => (
                <div className="w-full sm:w-1/2 md:w-1/3 p-4" key={item.name}>
                  <ProjectItem hasDetail={false} intro={item.intro} link={item.link} thumbnail={item.thumbnail} name={item.name} />
                </div>
              ))}
            </div>
          </FadeComponent>
        </div>
      </div>
    </ProjectPageWrapper>
  )
}

const ProjectPageWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  .wrapper{
    margin-top: 150px;
    max-width: 85%;
    .project-item{
      /* height: 70vh; */
    }
    @media screen and (max-width:768px){
      width: 100%;
    }
    .prism-item {
		.item-img {
			overflow: hidden;
			padding-bottom: 60%;
		  }
    }
  }
`;
export default ProjectPage;