import styled from '@emotion/styled';
import React from 'react';
import Line from '../../components/Line';
import ProjectItem from '../../components/ProjectItem';
import Scroll from '../../components/Scroll';
const ProjectPage = () => {
  return (
    <ProjectPageWrapper className="relative w-full" style={{ background: `url(images/bg.png) left top / cover no-repeat scroll` }}>
      <div className="wrapper bg-transparent p-5 container">
        <div className="mt-2 project-item relative mb-36">
          <div className="flex items-center justify-start mb-6">
            <Line />
            <h3 className="inline-block text-white font-bold text-lg sm:text-2xl ">In Bluebottle Digital VietNam</h3>
          </div>

          <div className="flex items-center justify-evenly w-full flex-wrap">
            <div className="w-full sm:w-1/2 p-4">
              <ProjectItem />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <ProjectItem />
            </div>
          </div>
          <Scroll />
        </div>

        <div className="my-2 project-item ">
          <div className="flex items-center justify-start mb-6">
            <Line />
            <h3 className="inline-block text-white font-bold text-lg sm:text-2xl">Personal Project(All projects have only frontend)</h3>
          </div>
          <div className="flex items-center justify-evenly w-full flex-wrap">
            <div className="w-full sm:w-1/2 p-4">
              <ProjectItem />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <ProjectItem />
            </div>
          </div>
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
    width: 85%;
    .project-item{
      /* height: 80vh; */
    }
    @media screen and (max-width:768px){
      width: 100%;
    }
  }
`;
export default ProjectPage;