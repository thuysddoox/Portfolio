import { keyframes, jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { css } from "@emotion/css";
import { FadeComponent } from "../../utils/common/fade";
const ImageIntro = ({ hasBug }: { hasBug?: boolean }) => {
	const theme = useTheme();
	return (
		<ImageIntroWrapper className="img-intro relative">
			<div className={`circle-bg w-52 sm:w-80 lg:w-96 bg-red-600 relative ${hasBug && "rotate"}`}>
				{hasBug && <img src="images/icons/ladybug.png" alt="bug" className="absolute bug" />}
				<FadeComponent duration={"1000"} delay={3000}>
					<img
						src="images/avatar.png"
						alt="thuysddoox"
						className={`avatar absolute ${!hasBug ? "block" : "hidden"}`}
					/>
				</FadeComponent>
			</div>
		</ImageIntroWrapper>
	);
};
const rotate = keyframes`
  0%{
    transform: rotate(0deg) ;
  } 
  100%{
    transform: rotate(360deg) ;
  } 
`;

const ImageIntroWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	.bug {
		top: -40px;
		left: 50%;
		transform: translateX(-50%);
	}
	.circle-bg {
		padding-bottom: 100%;
		border-radius: 50%;
		box-shadow: #ff9b9b86 0px 0px 30px -5px inset, #ff9b9b86 0px 0px 30px 2px inset, #fd5d5dc4 1px 1px 90px 2px;
		&.rotate {
			transform-origin: center center;
			animation: ${rotate} 20s linear infinite;
		}
	}
	
  .avatar {
    height: 550px;
    top: -165px;
    left: -90px;
  }
	@media screen and (max-width: 1170px) and (min-width:769px) {
		.avatar {
			height: 500px;
			top: -180px;
			left: -90px;
		}
	}
	@media screen and (max-width: 768px) {
		.avatar {
			height: 400px;
			top: -180px;
			left: -100px;
		}
	}
`;
export default ImageIntro;
