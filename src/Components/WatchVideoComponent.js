import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestionsContainer from "./SuggestionsContainer";
import { useEffect } from "react";
// import { UseChannelAPI, formatViewCount } from "../utils/constants";

const WatchVideoComponent = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();
  // const channelId = searchparams.get('id');
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // const [channelData, setChannelData] = useState(null);

  // useEffect(() => {
  //   const fetchChannelData = async () => {
  //     try {
  //       const response = await UseChannelAPI(channelId);
  //       setChannelData(response);
  //     } catch (error) {
  //       console.error("Error fetching channel data:", error);
  //     }
  //   };
  //   fetchChannelData();
  // }, [channelId]);

  return (
    <div className="ml-4">
      <div className="ml flex flex-col w-full justify-center">
        <div className="mt-28 flex w-full">
          <iframe
            className="p-2 mx-5 rounded-lg"
            width="850"
            height="500"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            allowFullScreen
            autoPlay
            title="YouTube video player"
            frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
        {/* <div className="flex">
        <div className="flex-items-start">
          <div className="h-9 w-9 m-1 rounded-full">
            <img
            alt=''
              className="h-full w-full rounded-full"
              src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
            />
          </div>
        </div>
        <div className="ml-2">
          <div className="font-semibold text-sm mt-1 line-clamp-2">{title}</div>
          <div className="text-gray-600 text-sm">{channelTitle}</div>
          <div className="text-gray-500 text-sm">
            {formatViewCount(statistics.viewCount)} views
          </div>
        </div>
      </div> */}
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
