
import { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API,SEARCH_API_KEY } from "../utils/constants";
import VideoCard from '../Components/VideoCard';
import ButtonContainer from "./ButtonContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Shimmer from "./Shimmer";
const VideoContainer = () =>{
    const category = useSelector(store =>store.category.category)
    console.log(category);
    const [videos, setVideos] = useState([]);
    const[isLoading,setIsLoading] = useState(false);
    const dispatch  = useDispatch();
    useEffect(()=>{
        setIsLoading(true);
        if(category === 'Home'){
        getYoutubeData();
        setIsLoading(false);
        }else{
        suggestData()
        setIsLoading(false);
        }
    },[category])

    const getYoutubeData = async() =>{
        const data = await fetch(YOUTUBE_API);
        const json =await data.json();
        console.log(json.items);
        setVideos(json.items);
        
    }
    const suggestData = async() =>{
        const data = await fetch(YOUTUBE_SEARCH_API+category+SEARCH_API_KEY)
        const json = await data.json()
        console.log(json.items);
        setVideos(json.items);
    }
    return(
        <div className="mt-24">
            <div className="ml-4">
            <ButtonContainer />
            </div>
            {isLoading ? 
        <Shimmer />
        :
        <div className="flex flex-wrap mt-4 ml-2">
        {videos?.map((videos)=>{
            return (
                <Link to={`/watch?v=${category === 'Home'? videos?.id: videos?.id?.videoId}&id=${videos?.snippet?.channelId}`}>
                <VideoCard key={category === 'Home'? videos?.id: videos?.id?.videoId} data={videos}/>
                </Link>
            )
        })
    }
        </div>
}
        </div>
    )
}
export default VideoContainer;