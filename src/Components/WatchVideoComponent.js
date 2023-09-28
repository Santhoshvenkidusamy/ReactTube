import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";
import SuggestionsContainer from "./SuggestionsContainer";

const WatchVideoComponent = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="ml-4">
      <div className="ml flex flex-col w-full justify-center">
        <div className="mt-28 flex w-full">
          <iframe
            className="p-2 mx-5 rounded-lg"
            width="850"
            height="500"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            allowfullscreen
          ></iframe>
          <div className="w-3/12">
            <LiveChat />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <CommentsContainer />
        </div>
        <div className="col-span-5">
          <SuggestionsContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchVideoComponent;
