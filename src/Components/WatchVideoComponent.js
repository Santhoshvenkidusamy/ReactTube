import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestionsContainer from "./SuggestionsContainer";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/constants";
 import { formatViewCount } from "../utils/constants";

const WatchVideoComponent = () => {
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();
  const videoId = searchparams.get('v');
  const channelId = searchparams.get('id');
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [channelData, setChannelData] = useState(null);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    fetchDataFromApi(`videos?part=contentDetails%2Csnippet%2Cstatistics%2Cdetails&id=${videoId}`).then((res) => {
      console.log(res.items[0]);
      setVideo(res);
    });
  },[channelId])

  useEffect(() => {
    fetchDataFromApi(`channels?part=snippet%2Cstatistics&id=${channelId}`).then((res) => {
      console.log(res);
      setChannelData(res);
    });
  },[channelId])

  return (
    <div className="ml-4">
      <div className="ml flex flex-col w-full justify-center">
        <div className="mt-28 flex w-full">
          <div>
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
        <div className="p-1 mx-7 text-md mt-1 line-clamp-2 font-semibold">{video?.items[0]?.snippet?.title}</div>
        
        <div className="flex">
        <div className="flex-items-start">
          <div className="h-12 w-12  ml-7 rounded-full">
            <img
            alt=''
              className="h-full w-full rounded-full"
              src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
            />
          </div>
        </div>
        <div className="ml-2 mt-1">
          <div className="text-gray-600 text-sm">{channelData?.items[0]?.snippet?.title}</div>
          <div className="text-gray-500 text-sm">
            {formatViewCount(Number(channelData?.items[0]?.statistics?.subscriberCount))} Subscribers
          </div>
        </div>
      </div>
      </div>
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
