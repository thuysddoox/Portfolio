import React from 'react';

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={`py-4 bg-red-500 ${className && className}`}>
      <div className="container text-white text-center">
        <p>© {new Date().getFullYear()} thuysddoox. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;