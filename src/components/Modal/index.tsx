import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SlideComponent } from "../../utils/common/slide";

const Modal = ({ isOpen, handleOpen, children }: { isOpen?: boolean, handleOpen: Function, children?: ReactNode; }) => {
  if (isOpen) {
    window.document.body.style.overflowY = 'hidden';
    window.document.body.style.height = '100vh';
  }
  else {
    window.document.body.style.overflowY = 'scroll';
    window.document.body.style.height = 'auto';
  }
  return (

    <div className={`modal py-5 top-0 left-0 fixed w-full h-full ${isOpen ? 'block' : 'hidden'}`}>
      <SlideComponent duration={"1000"} direction="up" className="absolute top-0 left-0 w-full h-full">
        <ModalComponent className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-lg">
          <div className="flex justify-end w-full border-b border-gray-500 items-center py-2 px-5">
            <span onClick={() => handleOpen()} className="cursor-pointer inline-block pl-3" >
              <FontAwesomeIcon icon={faXmark} size="2x" color="red" />
            </span>
          </div>
          <div className="p-5 mx-h-65 modal-body border-b border-gray-500">
            {children}
          </div>
        </ModalComponent>
      </SlideComponent>
    </div>

  );
};
const ModalComponent = styled.div`
  min-height: 75vh;
  min-width: 75vw;
  max-height:80vh;
  z-index: 12;
  .mx-h-65{
    max-height:60vh;
    overflow-y: auto;
  }
  @media screen and (max-width:1200px){
    min-width: 90vw;
    max-height:90vh;

  }
  @media screen and (max-width:768px){
    min-width: 95vw;
    max-height:95vh;
  }
`;
export { Modal };