import { Link, useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import { YOUTUBE_SEARCH_API, SEARCH_API_KEY} from "../utils/constants";
import { useEffect, useState } from "react";

const SearchContainer= () =>{
    let [searchResults,setSearchResults]=useState('')
    const [searchparams]=useSearchParams();
    useEffect(()=>{
        suggestData();
    },[searchparams.get('query')])
    const suggestData = async() =>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchparams.get('query')+SEARCH_API_KEY)
        const json = await data.json()
        setSearchResults(json);
    }
    return(
        <div className='w-3/4 mt-28 mx-20'>
        {searchResults?.items?.map((videos)=>{
            return (
                <Link to={`/watch?v=${videos?.id?.videoId}&id=${videos?.snippet?.channelId}`}>
                <SearchCard key={videos.id} data={videos}/>
                </Link>
            )
        })}  
        </div>
    )
}
export default SearchContainer;