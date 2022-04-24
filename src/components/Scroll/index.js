/**
 *
 * Mouse Scroll
 *
 */

import React from 'react';
import { MouseScroll } from './style';

const Scroll = (props) => {
  return (
    <MouseScroll className="mouse-scroll cursor-pointer hidden lg:block" onClick={() => props?.handleScroll()}>
      <div className="mouse">
        <div className="wheel" />
      </div>

      <div className="arrows">
        <span className="first" />
        <span className="second" />
        <span className="third" />
      </div>
    </MouseScroll>
  );
}

export default Scroll;
