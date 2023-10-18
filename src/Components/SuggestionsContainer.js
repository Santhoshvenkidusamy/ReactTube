
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { toggleMenu } from "../utils/appSlice";
import SuggestionsCard from "./SuggestionsCard";
const SuggestionsContainer = () =>{
    const [videos, setVideos] = useState([]);
    const category = useSelector(store =>store.category.category)
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
                <Link to={`/watch?v=${category === 'Home'? videos?.id: videos?.id?.videoId}&id=${videos?.snippet?.channelId}`}>
                <SuggestionsCard key={videos.id} data={videos}/>
                </Link>
            )
        })}  
        </div>
        </div>
    )
}
export default SuggestionsContainer;