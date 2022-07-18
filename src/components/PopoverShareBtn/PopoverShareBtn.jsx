import Popover from "@idui/react-popover";
import { ShareIcon } from "@heroicons/react/outline";
import "./popover.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const PopoverShareBtn = ({ postData }) => {
  const url = postData?.fields?.url || postData?.url;
  const title = postData?.fields?.title || postData?.title;

  return (
    <>
      <Popover
        trigger="click"
        withArrow={false}
        guessBetterPosition={true}
        className="popover"
        content={
          <div className="flex justify-center items-center space-x-4 h-14 w-52">
            <FacebookShareButton url={url} title={title}>
              <i className="lab la-facebook-f text-2xl text-white bg-blue-600 hover:scale-125 p-2 rounded-full" />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
              <i className="lab la-twitter text-2xl text-white bg-blue-400 hover:scale-125 p-2 rounded-full" />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={title}>
              <i className="lab la-linkedin-in text-2xl text-white bg-blue-700 hover:scale-125 p-2 rounded-full" />
            </LinkedinShareButton>
            {/* <i className="lab la-instagram text-2xl text-white bg-rose-600 p-2 rounded-full" /> */}
          </div>
        }
      >
        <button className="flex justify-center items-center hover:bg-rose-200 p-1 rounded-full">
          <ShareIcon className="w-4 h-4" />
        </button>
      </Popover>
    </>
  );
};

export default PopoverShareBtn;
