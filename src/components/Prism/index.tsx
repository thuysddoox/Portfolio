import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
export interface ItemWeb {
  name: string;
  link: string;
  thumbnail: string;
}

const Prism = () => {
  const list: Array<ItemWeb> = [
    {
      name: "FudGud",
      link: "https://fudgud-thuysddoox.vercel.app",
      thumbnail: "images/prism/lindsey.png",
    },
    {
      name: "Ultilities",
      link: "https://thuysddoox.github.io/Ultilities/",
      thumbnail: "images/prism/reece.png",
    },
    {
      name: "SetSail Clone",
      link: "https://thuysddoox.github.io/SetSail_Copy/",
      thumbnail: "images/prism/halloran.png",
    },
    {
      name: "2021",
      link: "https://thuysddoox.github.io/2021/",
      thumbnail: "images/prism/patriot.png",
    },

    {
      name: "Cloverdale Agistment",
      link: "http://cloverdaleagistment.prism.horse/",
      thumbnail: "images/prism/clover.png",
    },
    {
      name: "Danny Williams Racing",
      link: "http://dannywilliamsracing.prism.horse/",
      thumbnail: "images/prism/danny.png",
    },
    { name: "Fulmen Park", link: "https://fulmenpark.com.au/", thumbnail: "images/prism/fulmen.png" },
  ];
  return (
    <PrismWrapper>
      <div className="text-gray-500 px-4 py-2 sm:p-2">Prism is the best value platform on the market, making it affordable for stables, farms and equine operations of all sizes big and small to access the very best technology to improve their business. Prism is a big project. And I join to do tasks about creating website for client. I use React and NextJs to develop interface website base on available template and component. These are some website I created:</div>
      <div className="flex flex-wrap justify-between items-start">
        {list.map((item) => (
          <div className="prism-item w-full sm:w-1/2 lg:w-1/3 relative px-4 py-2 sm:p-2 " key={item.name}>
            <div
              className="w-full item-img border border-white"
              style={{ background: `url(${item.thumbnail}) center center / contain no-repeat scroll` }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center w-4/5 mx-auto block">
              {/* <h3 className="font-semibold text-white text-lg">{item.name}</h3> */}
              <a href={item.link} target="_blank" className="inline-block p-3 cursor-pointer radius-round bg-red-500">
                <FontAwesomeIcon icon={faLink} size="lg" color="white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </PrismWrapper>
  );
};
const PrismWrapper = styled.div`
	.prism-item {
		.item-img {
			overflow: hidden;
			padding-bottom: 60%;
		}
		.item-img:after {
			transition: all 0.3s linear;
			position: absolute;
			content: "";
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			/* background-color: rgba(0, 0, 0, 0.4); */
		}
		&:hover {
			.item-img:after {
				background-color: rgba(255, 255, 255, 0.2);
			}
			a {
				background-color: rgba(0, 0, 0, 0.4);
				transition: all 0.3s linear;
			}
		}
		a:hover {
			background-color: rgba(0, 0, 0, 0.4);
			transition: all 0.3s linear;
		}
	}
`;
export default Prism;
