import styled from '@emotion/styled';
import React from 'react';
import ImageIntro from '../../components/ImageIntro';
const HomePage = () => {
  return (
    <HomeWrapper>
      <div className="bgVideo relative">
        <iframe src="https://player.vimeo.com/video/700226830?h=ede1c8134e&&html5=1&autopause=0&autoplay=1&title=0&badge=0&byline=0&portrait=0&loop=1&muted=1&quality=1080p&controls=0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        <ImageIntro />
      </div>
    </HomeWrapper >
  )
}
const HomeWrapper = styled.div`
.bgVideo{
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  max-height: 100vh;
}
iframe{ 
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
}

`;
export default HomePage;