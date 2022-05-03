import styled from '@emotion/styled';
import React from 'react';
import Slider from 'react-slick';
import HotNewsItem from '../../components/HotNewsItem';
import Line from '../../components/Line';
import { News } from '../../components/NewsItem';
import { FadeComponent } from '../../utils/common/fade';
const settings = {
  dots: true,
  infinite: true,
  loop: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
};
const pinnedNews: Array<News> = [
  // {}
]
const BlogPage = () => {
  return (
    <BlogPageWrapper className="relative w-full" style={{ background: `url(images/bg.png) left top / cover no-repeat scroll` }}>
      <div className="wrapper bg-transparent p-5 container">
        <div>
          <FadeComponent duration={"2000"} direction="left">
            <div className="flex items-center justify-start mb-6">
              <Line />
              <h3 className="inline-block text-white font-bold text-lg sm:text-2xl">What's hot in this week? </h3>
            </div>
          </FadeComponent>
          <FadeComponent duration={"2000"} >
            <div className="mt-8 lg:w-11/12 mx-auto px-4 sm:px-10 md:px-5 xl:px-14">
              {pinnedNews.length > 0 ? (
                <Slider {...settings}>
                  {pinnedNews.map((newsItem, id) => {
                    return <HotNewsItem key={id} news={newsItem} />;
                  })}
                </Slider>
              ) : (
                <p className="text-center text-xl font-medium text-gray-600">
                  No news in this week.
                </p>
              )}
            </div>
          </FadeComponent>
        </div>
        <div className="mt-16">
          <FadeComponent duration={"2000"} direction="left">
            <div className="flex items-center justify-start mb-6">
              <Line />
              <h3 className="inline-block text-white font-bold text-lg sm:text-2xl">For You</h3>
            </div>
          </FadeComponent>
          <FadeComponent duration={"3000"} >
            <div>
              {pinnedNews.length > 0 ? <></> : (
                <p className="text-center text-xl font-medium text-gray-600">
                  There is no data to show.
                </p>
              )}
            </div>
          </FadeComponent>
        </div>
      </div>
    </BlogPageWrapper>
  )
}
const BlogPageWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  .wrapper{
    margin-top: 150px;
    max-width: 85%;
    @media screen and (max-width:768px){
      width: 100%;
    }
  }
`;
export default BlogPage;