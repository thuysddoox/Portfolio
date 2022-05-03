import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navId, setNavId] = useState<number>(0);
  function handleScroll() {
    if (window.scrollY > 20) setIsScroll(true);
    else setIsScroll(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); }
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navId])
  return (
    <HeaderWrapper className={`${isScroll ? 'bg-red-500 my-0 shadow' : 'bg-tranparent '} w-full fixed top-0 left-0 z-10`}>
      <div className="flex items-center justify-between px-4 w-95 md:w-11/12 py-2 sm:py-6 mx-auto relative">
        <div>
          <Link to="/" className="inline-block">
            <img src='images/logo.png' alt="thuysddoox" className="h-8 md:h-10 xl:h-12" />
          </Link>
        </div>
        <nav className={`${isOpen ? 'block h-screen ' : 'h-0'} left-0 overflow-hidden sm:overflow-visible duration-200 ease-in transition-all absolute sm:relative top-full w-full sm:w-auto text-center bg-gray-900 sm:bg-transparent sm:h-auto sm:block`}>
          <ul className={`sm:pt-0 block sm:flex justify-center border-t ${isOpen ? 'pt-12 border-white' : 'border-transparent'} sm:border-transparent`}>
            {NAV_LIST.map((item, id) => (
              <li key={item.label} className="text-white nav-item sm:mx-4 lg:mx-6 text-lg sm:text-sm md:text-base font-medium my-6 sm:my-0" onClick={() => { setIsOpen(false); setNavId(id + 1); }}>
                <NavLink to={item.href} className={({ isActive }) =>
                  isActive ? 'active' : ''
                }>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="block sm:hidden">
            <span className="text-base sm:text-base font-medium inline-block bg-gray-200 radius-round p-2">EN</span>
          </div>
        </nav>
        <div className="block sm:hidden cursor-pointer pl-6" onClick={() => { setIsOpen(!isOpen); }}>
          <img src={!isOpen ? 'images/icons/menu.png' : 'images/icons/close.png'} alt="button" className="h-5 sm:h-10" />
        </div>
        <div className="hidden sm:block">
          <span className="text-base sm:text-base font-medium inline-block bg-gray-200 radius-round p-2">EN</span>
        </div>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
&.shadow{
  box-shadow: 1px 1px 5px rgba(255,255,255,0.7);
}
  .nav-item a{
    display: inline-block;
    position: relative;
    transition: all 0.3s linear;
    pointer-events: visible ;
    padding: 10px 0;
    /* cursor: pointer!important ; */
    &:after{
      position: absolute;
      transform: scale(0);
      transform-origin: center center;
      transition: all 0.3s linear;
      content: '';
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: white ;
    }
    &.active,&:hover{
      text-shadow: 1px 0px 0px white;
      &:after{
        transform: scale(1);
      }
    }
  },
  .h-50{
    height: 60px;
  }

`;
// const NavListComponent = styled.nav``;
// const NavItemComponent = styled.li``;
interface NavItem {
  label: string;
  href: string;
}
const NAV_LIST: Array<NavItem> = [
  {
    label: 'ABOUT',
    href: 'about',
  },
  {
    label: 'PROJECTS',
    href: 'projects',
  },
  {
    label: 'EXPERIENCE',
    href: 'experience',
  },
  {
    label: 'BLOG',
    href: '/blog',
  },
  {
    label: 'CONTACT',
    href: 'contact',
  },

]
export default Header;