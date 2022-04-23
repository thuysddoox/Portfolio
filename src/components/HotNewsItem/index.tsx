import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { News } from "../NewsItem";

const { convert } = require('html-to-text');

const HotNewsItem = ({ news }: { news: News }) => {
  return (
    <HotNewsItemWrap>
      <div className="flex mb-flex-col flex-row justify-between items-center w-full p-6 sm:p-10 lg:p-12">
        <div className="text-blue-900 mb-w-full w-2/5 mb-mr-0 mr-12">
          <Link to={'/news/[id]'} /*as={`/news/${news?.attributes?.slugUrl}`}*/>
            <h3 className="title font-semibold  transition-all text-xl lg:text-2xl leading-8 md:leading-9 mb-6 sm:mb-8 cursor-pointer">
              {news?.attributes?.Title}
            </h3>
          </Link>
          <Link to={'/news/[id]'} /*as={`/news/${news?.attributes?.slugUrl}`}*/>
            <div>
              <div className="description cursor-pointer relative mb-mb-6 mb-font-15 text-base md:text-lg leading-6 md:leading-7 pt-6 max-h-80 overflow-hidden break-words">
                {convert(news?.attributes?.content, {
                  wordwrap: 200,
                  selectors: [
                    { selector: 'img', format: 'skip' },
                    { selector: 'figure', format: 'skip' },
                    { selector: 'figcaption', format: 'skip' },
                  ],
                })}
              </div>
            </div>
          </Link>
        </div>
        <div
          className="mb-w-full w-3/5 aspect-ratio-custom rounded-lg"
          style={{
            background: `url(images/bg.png) center center / cover no-repeat scroll`,
          }}
        ></div>
      </div>
    </HotNewsItemWrap>
  );
};

const HotNewsItemWrap = styled.div`
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  h3.title:hover {
    color: var(--blue2-secondary) !important;
    transition: all 0.3s linear;
  }
  }
  h3.title,
  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-word;
    hyphens: auto;
    overflow: hidden;
  }
  .description {
    -webkit-line-clamp: 7;
    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0%;
      border-top: 1px solid #000000;
      width: 80px;
      height: 0;
      display: inline-block;
      z-index: 3;
    }
  }
  .aspect-ratio-custom {
    padding-top: 36% !important;
  }
  @media screen and (max-width: 992px) {
    .mb-text-base {
      font-size: 16px !important;
    }
    .description {
      -webkit-line-clamp: 5;
    }
    h3.title {
      -webkit-line-clamp: 2 !important;
      line-height: 32px !important;
    }
  }
  @media screen and (max-width: 675px) {
    .aspect-ratio-custom {
      padding-top: 56.25% !important;
    }
    .mb-flex-col {
      flex-direction: column !important;
    }
    .mb-mr-0 {
      margin-right: 0 !important;
    }
    .mb-w-full {
      width: 100% !important;
    }
    .mb-mb-6 {
      margin-bottom: 1.25rem !important;
    }
    .mb-font-15 {
      font-size: 15px !important;
    }
    h3.title {
      font-size: 18px !important;
      line-height: 25px !important;
      margin-bottom: 1rem !important;
      height: 50px;
    }
    .description {
      padding-top: 1rem !important;
    }
  }
`;

export default HotNewsItem;