import styled from '@emotion/styled';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useState } from 'react';
import { Modal } from '../Modal';
import Prism from '../Prism';
export interface Project {
  name?: string;
  intro?: string;
  link?: string;
  hasDetail?: boolean;
  thumbnail?: string;
}

const ProjectItem = ({ name, intro, link, hasDetail, thumbnail }: Project) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  return (
    <ProjectItemWrapper className="border-2 border-white relative w-full rounded-2xl ">
      <div className="bg-item" style={{ background: `url(${thumbnail}) center center / contain no-repeat scroll` }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/4 w-4/5 text-white text-center">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="mb-2 text-sm">{intro}</p>
        {hasDetail ? <button className="py-1 px-2 bg-red-500 rounded-lg text-sm" onClick={() => setIsOpen(true)}>Readmore</button> :
          <a href={link} target="_blank" className="inline-block p-3 cursor-pointer radius-round bg-red-500">
            <FontAwesomeIcon icon={faLink} size="lg" color="white" />
          </a>
        }
      </div>
      <Modal isOpen={isOpen} handleOpen={handleOpenModal}>
        <Prism />
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
      background-color: rgba(0,0,0,0.7);
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