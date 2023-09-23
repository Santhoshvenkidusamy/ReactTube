
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from '../Components/VideoCard';
import ButtonContainer from "./ButtonContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const VideoContainer = () =>{
    const [videos, setVideos] = useState([]);
    const dispatch  = useDispatch();
    useEffect(()=>{
        getYoutubeData();
        dispatch(toggleMenu())
    },[])

    const getYoutubeData = async() =>{
        const data = await fetch(YOUTUBE_API);
        const json =await data.json();
        setVideos(json.items);
        
    }
    console.log(videos);
    return(
        <div className="mt-20">
        <ButtonContainer />
        <div className="flex flex-wrap mt-4 ml-2">
        {videos.map((videos)=>{
            return (
                <Link to={'/watch?v='+videos.id}>
                <VideoCard key={videos.id} data={videos}/>
                </Link>
            )
        })}  
        </div>
        </div>
    )
}
export default VideoContainer;