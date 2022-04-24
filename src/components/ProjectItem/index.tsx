import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Modal } from '../Modal';


const ProjectItem = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  return (
    <ProjectItemWrapper className="border-2 border-white relative w-full rounded-2xl ">
      <div className="bg-item" style={{ background: `url(images/bg.png) center center / cover no-repeat scroll` }}>
      </div>
      <div className="absolute top-1/3 lg:top-1/2 left-1/2 -translate-x-2/4 w-4/5 text-white text-center">
        <h3 className="font-bold text-lg mb-1">Prism Website</h3>
        <p className="mb-2">Create website based on the template available when client order.</p>
        <button className="py-1 px-2 bg-red-500 rounded-lg text-sm" onClick={() => setIsOpen(true)}>Readmore</button>
      </div>
      <Modal isOpen={isOpen} handleOpen={handleOpenModal}>
        <div>hello</div>
      </Modal>
    </ProjectItemWrapper>
  )
}
const ProjectItemWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s linear;
  .bg-item{
    width: 100%;
    padding-bottom: 60%;
    position: relative;
    &:after{
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
    }
  }
  &:hover{
    .bg-item{
        transform: scale(1.2) ;
        transition: all 0.3s linear;
      }
    }
`;
export default ProjectItem;