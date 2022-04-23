import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';


const { convert } = require('html-to-text');

export interface News {
  id: number;
  attributes: {
    Title: string;
    archived: boolean;
    author: string;
    content: string;
    createdAt: string;
    pinned: true;
    publishedAt: string;
    publishedDate: string;
    slugUrl: string;
    tags: any;
    updatedAt: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
          name: string;
        };
      };
    };
  };
}
const NewsWrap = styled.div`
  width: 100%;
  h3.title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
  }
  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-word;
    line-height: 20px;
    overflow: hidden;
    &:after {
      position: absolute;
      content: '';
      top: 0%;
      left: 0%;
      border-top: 1px solid #000000;
      width: 80px;
      height: 0;
      display: inline-block;
    }
  }
  &:hover {
    box-shadow: 0px 0px 10px var(--blue2-secondary);
    transition: all 0.3 linear;
  }
  .title:hover {
    color: var(--blue2-secondary) !important;
    transition: all 0.3 linear;
  }
  .text-10 {
    font-size: 10px;
  }
  .thumbnail-square {
    padding-top: 100%;
  }
`;
const NewsItem = ({
  news,
  className,
  isThumbnailSquare,
}: {
  news: News;
  className?: string;
  isThumbnailSquare?: boolean;
}) => {
  return (
    <NewsWrap
      className={`flex flex-col bg-white p-3 sm:p-4 news-item transition-all ${className}`}
    >
      <Link to={'/news/[id]'} /*as={`/news/${news?.attributes?.slugUrl}`}*/>
        {!isThumbnailSquare ? (
          <div className="thumbnail block cursor-pointer">
            <img
              src={`${process.env.NEXT_PUBLIC_HOST_URL}${news?.attributes?.thumbnail?.data?.attributes?.url}`}
              className="rounded-lg"
            />
          </div>
        ) : (
          <div
            className="thumbnail-square block cursor-pointer"
            style={{
              background: `url(${process.env.NEXT_PUBLIC_HOST_URL}${news?.attributes?.thumbnail?.data?.attributes?.url}) center center / cover no-repeat scroll`,
            }}
          ></div>
        )}
      </Link>
      <div className="text-blue-900 pb-4 news-intro">
        <span className="text-10 text-blue-900 mb-1 inline-block">
          {new Date(news?.attributes?.publishedDate).toLocaleDateString(
            'en-US',
            { month: 'long', day: 'numeric', year: 'numeric' }
          )}
        </span>
        <Link to={'/news/[id]'} /*as={`/news/${news?.attributes?.slugUrl}`}*/>
          <h3 className="text-blue-900 text-sm sm:text-base font-semibold leading-5 transition-all sm:leading-7 title relative mb-4 sm:mb-1 cursor-pointer">
            {news?.attributes?.Title}
          </h3>
        </Link>
        <div className="text-xs sm:text-sm font-normal leading-4 sm:leading-5 relative description pt-4 sm:pt-5">
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
    </NewsWrap>
  );
};

export default NewsItem;
