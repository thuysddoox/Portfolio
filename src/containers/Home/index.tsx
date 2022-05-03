import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ImageIntro from '../../components/ImageIntro';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faSkype, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import AppConfig from "../../contants/AppConfig";
import { FadeComponent } from '../../utils/common/fade';
const HomePage = () => {
  return (
    <HomeWrapper>
      <div className="bgVideo relative" style={{ background: `url(images/bg.png) left top / cover no-repeat scroll` }}>
        {/* <iframe src="https://player.vimeo.com/video/700226830?h=ede1c8134e&&html5=1&autopause=0&autoplay=1&title=0&badge=0&byline=0&portrait=0&loop=1&muted=1&quality=1080p&controls=0" allow="autoplay; fullscreen; picture-in-picture"></iframe> */}
        <FadeComponent duration={"3000"} direction="up" className="relative h-full " triggerOnce={false}>
          <ImageIntro hasBug={false} />
        </FadeComponent>
        <FadeComponent duration={"1500"} direction="left" triggerOnce={false}>
          <ul className="flex items-center flex-col justify-start fixed bottom-1/3 md:bottom-14 left-0 ml-0 md:ml-2">
            <li>
              <a href={`tel:${AppConfig?.facebook}`} className="inline-block px-4 py-1 radius-round social-item" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href={`tel:${AppConfig?.instagram}`} className="inline-block px-4 py-1 radius-round social-item" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href={`tel:${AppConfig?.linkedin}`} className="inline-block px-4 py-1 radius-round social-item" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href={`tel:${AppConfig?.twitter}`} className="inline-block px-4 py-1 radius-round social-item" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href={`tel:${AppConfig?.skype}`} className="inline-block px-4 py-1 radius-round social-item" target="_blank">
                <FontAwesomeIcon icon={faSkype} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href={`tel:${AppConfig?.github}`} className="inline-block px-4 py-1 radius-round social-item" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size="lg" color="white" />
              </a>
            </li>
          </ul>
        </FadeComponent>
      </div>
    </HomeWrapper >
  )
}
const HomeWrapper = styled.div`
.bgVideo{
  width: 100%;
  height: 100vh;
  /* pointer-events: none; */
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
.social-item:hover{
  path{
    fill: red;
    transition: all 0.3s linear;
  }
}
`;
export default HomePage;