import { useEffect, useState } from "react";
import { UseChannelAPI } from "../utils/constants";

const SearchCard =({data})=>{
    const {snippet} = data;
    const{title, thumbnails, channelTitle, channelId,description} = snippet;
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
    return(
        <div className="m-2 flex flex-row">
        <img  alt='' className='rounded-lg'src={thumbnails.medium.url} />  
        <div className="ml-4">
        <div className=" text-md line-clamp-2">{title}</div>
        <div className="flex mt-8">
        <div className="flex-items-start">
          <div className="h-6 w-6 m-1 rounded-full">
            <img
            alt=''
              className="h-full w-full rounded-full"
              src={channelData?.items[0]?.snippet?.thumbnails?.default?.url}
            />
          </div>
        </div>
        <div className="mt-2 ml-1 text-sm text-gray-600">{channelTitle}</div>
        </div>
        <div className="mt-4 text-sm text-gray-500">{description}</div>
        </div> 
        </div>
    )
}
export default SearchCard;