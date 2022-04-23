import styled from '@emotion/styled';
import React from 'react';


const ExperienceItem = () => {
  return (
    <ExperienceItemWrapper className="pl-10 border-l-2 border-red-500 py-4 relative text-gray-600 w-full">
      <div className="p-4">
        <h3 className="font-semibold text-xl uppercase text-red-500">Frontend (Intern~Fresher Partime)</h3>
        <span className="inline-block p-1 px-2 text-sm my-2 bg-gray-600 text-white">09/2021-Present</span>
        <i className="block my-2"><a href="https://www.bluebottle.vn/">Bluebottle Digital Vietnam</a></i>
        <div>
          <p>
            In here, I use React and Nextjs to create interface of website. I joined 2 projects:
          </p>
          <ul className="ml-5">
            <li>Bluebottle Website: I use Nextjs to develop all interface of company's website</li>
            <li>Prism Website: It is a project that has been in development for a long time. And my responsibility is to develop the interface of website when client orders. I use React and Nextjs to develop and base on some available component and template.</li>
          </ul>
        </div>
        {/* <p></p> */}
      </div>
    </ExperienceItemWrapper>
  )
}
const ExperienceItemWrapper = styled.div`
  background: #161616 ;
  min-height: 250px ;
  ul{
    list-style-type: disc;
  }
  &:after,&:before {
    position: absolute;
    content: '';
    top: 35px;
    left:0%;
    display: inline-block;
    background-color: red;
    width: 20px;
    height: 18px;
  }
  &:before {
    left: 20px;
    background-color: transparent;
    border-style: solid;
    border-width:9px ;
    border-color: transparent transparent transparent red ;
    width: 0;
    height:0;
  }

`;
export default ExperienceItem;