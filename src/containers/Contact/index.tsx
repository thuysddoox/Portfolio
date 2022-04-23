import styled from "@emotion/styled";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faSkype } from "@fortawesome/free-brands-svg-icons";
import FormContact from "../../components/FormContact";
import AppConfig from "../../contants/AppConfig";
const ContactPage = () => {
  return (
    <ContactPageWrapper
      className="relative w-full"
      style={{ background: `url(images/bg.png) center center / cover no-repeat scroll` }}>
      <div className="wrapper flex bg-gray-900 p-5">
        <div className="w-1/2 text-white p-5">
          <h3 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3">Get In Touch</h3>
          <p>Fill up the form and I will get back to you within 24 hours.</p>
          <div className="ml-2 sm:ml-4 lg:ml-6">
            <ul className="my-4 md:my-8">
              <li>
                <a href={`tel:${AppConfig.phonenumber}`} className="inline-flex items-center py-2">
                  <span className="inline-flex items-center justify-center radius-round bg-gray-200 w-8 h-8 ">
                    <FontAwesomeIcon icon={faPhone} color="red" />
                  </span>
                  <div className="inline-block mx-5 ">
                    <h3 className="font-semibold text-red-500 text-lg">Call me</h3>
                    <span className="inline-block my-1">+{AppConfig.phonenumber}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${AppConfig.email}`} className="inline-flex items-center py-2">
                  <span className="inline-flex items-center justify-center radius-round bg-gray-200 w-8 h-8 ">
                    <FontAwesomeIcon icon={faEnvelope} color="red" />
                  </span>
                  <div className="inline-block mx-5 ">
                    <h3 className="font-semibold text-red-500 text-lg">Email Address</h3>
                    <span className="inline-block  my-1">{AppConfig.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="inline-flex items-center py-2" target="_blank">
                  <span className="inline-flex items-center justify-center radius-round bg-gray-200 w-8 h-8 ">
                    <FontAwesomeIcon icon={faLocationDot} color="red" />
                  </span>
                  <div className="inline-block mx-5 ">
                    <h3 className="font-semibold text-red-500 text-lg">My Address</h3>
                    <span className="inline-block my-1">Hanoi,Vietnam</span>
                  </div>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center py-2">
                  <span className="inline-flex items-center justify-center radius-round bg-gray-200 w-8 h-8 ">
                    <FontAwesomeIcon icon={faShareNodes} color="red" />
                  </span>
                  <div className="inline-block mx-5 ">
                    <h3 className="font-semibold text-red-500 text-lg">Socials</h3>
                    <ul className="inline-flex items-center justify-start">
                      <li className="mr-1">
                        <a href={`tel:${AppConfig?.facebook}`} className="inline-block p-1 radius-round social-item" target="_blank">
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href={`tel:${AppConfig?.instagram}`} className="inline-block p-1 radius-round social-item" target="_blank">
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href={`tel:${AppConfig?.linkedin}`} className="inline-block p-1 radius-round social-item" target="_blank">
                          <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href={`tel:${AppConfig?.twitter}`} className="inline-block p-1 radius-round social-item" target="_blank">
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href={`tel:${AppConfig?.skype}`} className="inline-block p-1 radius-round social-item" target="_blank">
                          <FontAwesomeIcon icon={faSkype} size="lg" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 p-5">
          <FormContact />
        </div>
      </div>
    </ContactPageWrapper>
  );
};
const ContactPageWrapper = styled.div`
	max-height: 100vh;
	height: 100vh;
	overflow: hidden;
	.wrapper {
		width: 85%;
		margin: auto;
		margin-top: 130px;
		max-height: 85vh;
		overflow: hidden;
		box-shadow: 1px 1px 15px black;
		border-radius: 10px;
    .social-item:hover{
      path{
        fill: red;
        transition: all 0.3s linear;
      }
    }
    @media screen and (max-width:768px){
      width: 95%;
    }
	}
`;
export default ContactPage;
