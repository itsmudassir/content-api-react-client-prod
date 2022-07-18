import React from "react";
import NcImage from "../../components/NcImage/NcImage";
import section5Image from "../../images/section5-Image.png";
import { SearchIcon } from "@heroicons/react/outline";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import topicOverview from "../../images/topicOverview.JPG";
import topDomains from "../../images/topDomains.JPG";
import topAuthors from "../../images/topAuthors.JPG";
import contentKPIs from "../../images/contentKPIs.JPG";

const LandingPageSection5 = ({ className = "", rightImg = section5Image }) => {
  return (
    <>
      <div
        className={`px-5 nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-start ${className}`}
        data-nc-id="SectionBecomeAnAuthor"
      >
        <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
          <span className="flex items-center space-x-3 mb-10">
            <SearchIcon
              className="w-10 h-10 text-white p-2 bg-black rounded-full"
              style={{ transform: "scaleX(-1)" }}
            />
            <p>Insights</p>
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
            Insights metrics help you measure topics performance with respect to its social media engagement
          </h2>
          {/* <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
            Create your personal library of top content sources and access
            relevant articles as they get published. Discover, read, and share
            the best content
          </span> */}
        </div>

        <div className="flex-grow">
          <NcImage src={rightImg} />
        </div>
      </div>

      {/* cards div */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-7 mt-12 w-full">
        <SimpleCard
          title="Overview"
          desc="Get several performance metrics of topics with respect to social engagement"
          image={topicOverview}
          className="md:h-96 lg:h-56"
        />
        <SimpleCard
          title="Top Domains"
          desc="discover which domains publish the most about your specific topic or niche"
          image={topDomains}
          className="md:h-96 lg:h-56"
        />
        <SimpleCard
          title="Top Authors"
          desc="Recognise the best authors that write the most about your topic"
          image={topAuthors}
          className="md:h-96 lg:h-56"
        />
        <SimpleCard
          title="Other Metrics"
          desc="Explore performance measures such as popular days to publish, word count, and reading dificulty"
          image={contentKPIs}
          className="md:h-96 lg:h-56"
        />
      </div>
    </>
  );
};

export default LandingPageSection5;
