import Heading from "../../components/Heading/Heading";
import image from "../../images/discover-main.png" 

const LandingPageSection2 = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-2xl md:text-3xl text-center  md:w-[85%]">
          Our content search engine can help you with content discovery and content curation
        </p>
        <p className="text-neutral-500 text-sm  text-center  md:w-[80%] lg:w-[60%] mt-5">
          With our list of curated topics you can create tons of high quality content.
          Use our huge list of content sources or add your own sources through RSS feeds and
          get the most out of Contengizmo.
        </p>
        <img className="mt-5 lg:w-[80%]" src={image} alt="discover image" />
      </div>
    </>
  );
};

export default LandingPageSection2;
