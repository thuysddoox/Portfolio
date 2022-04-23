import React from 'react';


const Line = () => {
  return (
    <div className="inline-flex items-center justify-start mr-4">
      <span className="inline-flex radius-round h-5 w-5 sm:h-7 sm:w-7 border-2 border-white items-center justify-center shadow-line"><span className="inline-block radius-round h-2 sm:h-4 w-2 sm:w-4 bg-red-500"></span></span>
      <span className="inline-block w-8 sm:w-12 border-t-2 border-white"></span>
    </div>
  )
}

export default Line;