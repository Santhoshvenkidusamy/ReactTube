import { useEffect, useState } from "react";
import { UseChannelAPI } from "../utils/constants";

const formatViewCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)} million`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else {
      return count.toString();
    }
  };
  

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, thumbnails, channelTitle, channelId } = snippet;

  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const response = await UseChannelAPI(channelId);
        setChannelData(response);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };
    fetchChannelData();
  }, [channelId]);

  return (
    <div className="w-72 m-2 mx-4">
      <img className="rounded-lg" src={thumbnails.medium.url} />
      <div className="flex">
        <div className="flex-items-start">
          <div className="h-9 w-9 m-1 rounded-full">
            <img
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
      </div>
    </div>
  );
};

export default VideoCard;
