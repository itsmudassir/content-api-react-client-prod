import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import section4Image from "../../images/section4-Image.png";
import { SearchIcon } from "@heroicons/react/outline";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import three60Image from "../../images/360.JPG";
import curated from "../../images/curated.JPG";
import quotes from "../../images/Quotes.JPG";
import coverStories from "../../images/coverStories.JPG";
import customTopics from "../../images/customTopics.JPG";


const LandingPageSection4 = ({ className = "", rightImg = section4Image }) => {
  return (
    <>
      <div
        className={`px-5 nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-start  ${className}`}
        data-nc-id="SectionBecomeAnAuthor"
      >
        <div className="flex-grow">
          <NcImage src={rightImg} />
        </div>

        <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
          <span className="flex items-center space-x-3 mb-10">
            <SearchIcon
              className="w-10 h-10 text-white p-2 bg-black rounded-full"
              style={{ transform: "scaleX(-1)" }}
            />
            <p>Topics</p>
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
            Group content into custom topics or follow existing curated topics to access it all in one place.{" "}
          </h2>
          <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
            Single place to access your grouped custom topics, followed topics and you can also add any article to favorite.
          </span>

          {/* cards div */}
          <div className="flex flex-col mt-12 w-full">
            <div className="flex flex-col lg:flex-row">
              <SimpleCard
                title="Curated topics"
                desc="Built-in content categories can be followed and accessed in topics area"
                image={curated}
                className="border-0"
              />
              <SimpleCard
                title="Custom Topics"
                desc="Make your own categories using filters, search terms and sorts"
                image={customTopics}
                className="border-0"
              />
            </div>

            <div className="flex flex-col lg:flex-row">
              <SimpleCard
                title="Favorites"
                desc="Make multiple folders to organize/store any articles that you like" 
                image={coverStories}
                className="border-0"
              />
              {/* <SimpleCard
                title="Quotes"
                desc="Search and share inspirational quotations on all topics with your audience"
                image={quotes}
                className="border-0"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageSection4;
