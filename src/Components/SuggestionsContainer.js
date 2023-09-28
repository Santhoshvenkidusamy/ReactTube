
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from '../Components/VideoCard';
import ButtonContainer from "./ButtonContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import SuggestionsCard from "./SuggestionsCard";
const SuggestionsContainer = () =>{
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
      <div className=''>
        <div className="mt-4 ml-2">
        <span className="font-semibold ml-4">Suggestions:</span>
        {videos.map((videos)=>{
            return (
                <a href={'/watch?v='+videos.id}>
                <SuggestionsCard key={videos.id} data={videos}/>
                </a>
            )
        })}  
        </div>
        </div>
    )
}
export default SuggestionsContainer;