import styled from '@emotion/styled';
import React from 'react';


const EducationItem = () => {
  return (
    <EducationItemWrapper className="pl-10 border-l-2 border-red-500 py-4 relative text-gray-600 w-full">
      <div className="p-4">
        <h3 className="font-semibold text-xl uppercase text-red-500">Software Engineering</h3>
        <span className="inline-block p-1 px-2 text-sm my-2 bg-gray-600 text-white">2018-2023</span>
        <i className="block my-2">Post and Telecommunications Institute of Technology (PTIT Hanoi)</i>
        <p>GPA: 2.94</p>
      </div>
    </EducationItemWrapper>
  )
}
const EducationItemWrapper = styled.div`
  background: #161616 ;
  min-height: 250px ;
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
export default EducationItem;