import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import section3Image from "../../images/section3-Image.png";
import { SearchIcon } from "@heroicons/react/outline";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import three60Image from "../../images/360.JPG";
import search from "../../images/search.JPG";
import filter from "../../images/filter.JPG";
import insights from "../../images/insights.JPG";

const LandingPageSection3 = ({ className = "", rightImg = section3Image }) => {
  return (
    <>
      <div
        className={`px-5 nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-start  ${className}`}
        data-nc-id="SectionBecomeAnAuthor"
      >
        <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
          <span className="flex items-center space-x-3 mb-10">
            <SearchIcon
              className="w-10 h-10 text-white p-2 bg-black rounded-full"
              style={{ transform: "scaleX(-1)" }}
            />
            <p>Search</p>
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
            Search content with in your niche and share it on your social channels
          </h2>
          <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
            Our Keyword search enables you to find the hot content that people have shared.
            With topic insights you can get all stats of what topic works and what doesnt.
           
          </span>
        </div>

        <div className="flex-grow">
          <NcImage src={rightImg} />
        </div>
      </div>

      {/* cards div */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-7 mt-12 w-full">
        <SimpleCard
          title="Search Everywhere"
          desc="Search for all kinds of articles  
          from the web,
           and see what's trending on Facebook and Twitter from one 
           place 
           "
          image={three60Image}
          className="md:h-96 lg:h-56"
        />
        <SimpleCard
          title="Powerful Sorting"
          desc="Sort content by freshness, social media engagement and length"
          image={search}
          className="md:h-96 lg:h-56"
        />
        <SimpleCard
          title="Useful Filters"
          desc="Get relevant content by filtering search results by Author, Lenguage, Region, Date"
          image={filter}
          className="md:h-96 lg:h-56"
        />
        <SimpleCard
          title="Insights"
          desc="Measure any topics performance from the analytics provided by the insights feature "
          image={insights}
          className="md:h-96 lg:h-56"
        />
      </div>
    </>
  );
};

export default LandingPageSection3;
