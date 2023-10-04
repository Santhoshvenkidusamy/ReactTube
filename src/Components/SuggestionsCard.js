import { useEffect, useState } from "react";
import { UseChannelAPI, formatViewCount } from "../utils/constants";

const SuggestionsCard = ({ data }) => {
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
    <div className="m-2">
      <div className="flex">
        <img alt='' className="rounded-lg" src={thumbnails.default.url} />
        <div className="flex">
          <div className="ml-2">
            <div className="text-sm lg:text-xs xl:text-sm  line-clamp-2">
              {title}
            </div>
            <div className="flex">
              <div className="flex-items-start">
                <div className="h-5 w-5 m-1 rounded-full">
                  <img
                  alt=''
                    className="h-full w-full rounded-full"
                    src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
                  />
                </div>
              </div>
              <div className="text-gray-600 mt-1 text-sm">{channelTitle}</div>
            </div>
            <div className="text-gray-500 text-sm ml-1">
              {formatViewCount(statistics.viewCount)} views
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
