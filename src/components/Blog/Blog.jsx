import React from "react";
import Banner4 from "../../assets/Banner4.png";
import Banner5 from "../../assets/Banner5.jpg";
import Banner6 from "../../assets/Banner6.jpg";

export const Blog = () => {
  return (
    <div className='className="bg-customBackground min-h-screen"'>
      <div className="absolute left-[550px] top-[2380px]">
        <h1
          className="font-bold text-4xl leading-31 text-red"
          style={{ fontFamily: "Inika", display: "inline-block" }}
        >
          Recommended Blogs
        </h1>
      </div>
      <div className="absolute w-[400px] h-[800px] left-[72px] top-[2460px] bg-cover bg-center">
        <img src={Banner4} alt="" />
        <div
          className="w-396 h-23 left-0 top-0 leading-26 text-brown"
          style={{ fontFamily: "Inika" }}
        >
          <h3 className="text-lg font-bold text-left mt-6 max-w-[400px]">
            10 Must-Read Books to Transform Your Summer Reading List
          </h3>
          <h4 className="text-small text-left font-normal mt-3">
            March 12, 2024
          </h4>
          <p className="text-small text-left font-normal mt-3 max-w-[400px]">
            Discover a curated selection of ten captivating books perfect for
            elevating your summer reading experience.
          </p>
        </div>
        <div className="absolute w-[400px] h-[800px] left-[440px] top-[0px] bg-cover bg-center">
          <img src={Banner5} alt="" />
          <div
            className="w-396 h-23 left-0 top-0 leading-26 text-brown"
            style={{ fontFamily: "Inika" }}
          >
            <h3 className="text-lg font-bold text-left mt-6 max-w-[400px]">
            The Ultimate Guide to Building Your Home Library: Top Picks for Every Genre
            </h3>
            <h4 className="text-small text-left font-normal mt-3">
              February 16, 2024
            </h4>
            <p className="text-small text-left font-normal mt-3 max-w-[400px]">
            Explore our comprehensive guide to essential books across all genres to create the perfect home library collection.
            </p>
          </div>
        </div>
        <div className="absolute w-[400px] h-[800px] left-[883px] top-[0px] bg-cover bg-center">
          <img src={Banner6} alt="" />
          <div
            className="w-396 h-23 left-0 top-0 leading-26 text-brown"
            style={{ fontFamily: "Inika" }}
          >
            <h3 className="text-lg font-bold text-left mt-6 max-w-[400px]">
            From Page to Screen: Bestselling Books You Need to Read Before Watching the Movie
            </h3>
            <h4 className="text-small text-left font-normal mt-3">
              March 12, 2023
            </h4>
            <p className="text-small text-left font-normal mt-3 max-w-[400px]">
            Uncover the best books that have inspired blockbuster movies, and why you should read them before watching the adaptations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
