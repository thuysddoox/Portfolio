/**
 *
 * Mouse Scroll
 *
 */

import React from 'react';
import { MouseScroll } from './style';

function Scroll() {
  return (
    <MouseScroll className="mouse-scroll cursor-pointer hidden sm:block">
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
