import styled from '@emotion/styled';
import React from 'react';
import EducationItem from '../../components/EducationItem';
import ExperienceItem from '../../components/ExperienceItem';
import Line from '../../components/Line';
const ExperiencePage = () => {
  return (
    <ExperiencePageWrapper className="relative w-full" style={{ background: `url(images/bg.png) left top / cover no-repeat scroll` }}>
      <div className="wrapper bg-transparent p-5 container block md:flex justify-between flex-wrap">
        <div className="education w-full md:w-1/2 mb-16">
          <div className="flex items-center justify-start mb-6">
            <Line />
            <h3 className="inline-block text-white font-bold text-lg sm:text-2xl">Education</h3>
          </div>
          <div className="w-full sm:w-11/12 p-2">
            <EducationItem />
          </div>
        </div>
        <div className="education w-full md:w-1/2 mb-16">
          <div className="flex items-center justify-start mb-6">
            <Line />
            <h3 className="inline-block text-white font-bold text-lg sm:text-2xl">Work Experience</h3>
          </div>
          <div>
            <div className="w-full sm:w-11/12 p-2">
              <ExperienceItem />
            </div>
          </div>
        </div>
        <div className="w-full mb-16">
          <div>
            <Line />
            <h3 className="inline-block text-white font-bold text-lg sm:text-2xl mb-6">My Skills</h3>
          </div>
          <div className="w-full sm:w-11/12 p-2">
            <div>
              {['Reactjs', 'NextJs', 'TypeScript', 'HTML', 'CSS', 'JS'].map(item => (
                <span key={item} className="inline-block py-1 px-2 rounded-xl bg-gray-600 text-white m-2">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ExperiencePageWrapper>
  )
}
const ExperiencePageWrapper = styled.div`
   min-height: 100vh;
  overflow: hidden;
  .wrapper{
    margin-top: 150px;
    width: 85%;
    @media screen and (max-width:768px){
      width: 100%;
    }
  }

`;
export default ExperiencePage;