
import { useEffect, useState } from "react";
import { YOUTUBE_API, YOUTUBE_SEARCH_API,SEARCH_API_KEY } from "../utils/constants";
import VideoCard from '../Components/VideoCard';
import ButtonContainer from "./ButtonContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const VideoContainer = () =>{
    const category = useSelector(store =>store.category.category)
    console.log(category);
    const [videos, setVideos] = useState([]);
    const dispatch  = useDispatch();
    useEffect(()=>{
        console.log(category === 'Home')
        if(category === 'Home'){
            console.log('hi');
        getYoutubeData();
        }else{
        suggestData()
        }
        // dispatch(toggleMenu())
    },[category])

    const getYoutubeData = async() =>{
        const data = await fetch(YOUTUBE_API);
        const json =await data.json();
        setVideos(json.items);
        
    }
    const suggestData = async() =>{
        const data = await fetch(YOUTUBE_SEARCH_API+category+SEARCH_API_KEY)
        const json = await data.json()
        setVideos(json.items);
    }
    return(
        <div className="mt-24">
            <div className="ml-4">
            <ButtonContainer />
            </div>
        <div className="flex flex-wrap mt-4 ml-2">
        {videos?.map((videos)=>{
            return (
                <Link to={`/watch?v=${videos?.id}&id=${videos?.snippet?.channelId}`}>
                <VideoCard key={videos?.id} data={videos}/>
                </Link>
            )
        })}  
        </div>
        </div>
    )
}
export default VideoContainer;