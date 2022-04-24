import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Slide } from 'react-awesome-reveal';
const Modal = ({ isOpen, handleOpen, children }: { isOpen?: boolean, handleOpen: Function, children: ReactNode; }) => {
  return (

    <div className={`modal py-5 top-0 left-0 fixed w-full h-full ${isOpen ? 'block' : 'hidden'}`}>
      {/* <Slide> */}
      <ModalComponent className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-lg">
        <div className="flex justify-end w-full border-b border-gray-500 items-center py-2 px-5">
          <span onClick={() => handleOpen()} className="cursor-pointer inline-block pl-3" >
            <FontAwesomeIcon icon={faXmark} size="2x" color="red" />
          </span>
        </div>
        <div className="p-5 mx-h-65">
          {children}
        </div>
      </ModalComponent>
      {/* </Slide> */}
    </div>

  );
};
const ModalComponent = styled.div`
  min-height: 75vh;
  min-width: 75vw;
  max-height:75vh;
  z-index: 12;
  .mx-h-65{
    max-height:65vh;
    overflow-y: auto;
  }
  @media screen and (max-width:1200px){
    min-width: 90vw;
    max-height:80vh;

  }
  @media screen and (max-width:768px){
    min-width: 99vw;
  }
`;
export { Modal };