import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
// import { SlArrowLeft } from "react-icons/sl";

export const categories = [
	{ name: "Home", icon: <AiFillHome />, type: "home" },
	{ name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
	{ name: "Music", icon: <CgMusicNote />, type: "category" },
	{ name: "Films", icon: <FiFilm />, type: "category" },
	{ name: "Live", icon: <MdLiveTv />, type: "category" },
	{ name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
	{ name: "News", icon: <ImNewspaper />, type: "category" },
	{ name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
	{ name: "Learning", icon: <RiLightbulbLine />, type: "category" },
	{
		name: "Fashion & beauty",
		icon: <GiEclipse />,
		type: "category",
		divider: true,
	},
	{ name: "Settings", icon: <FiSettings />, type: "menu" },
	{ name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
	{ name: "Help", icon: <FiHelpCircle />, type: "menu" },
	{ name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
// const GOOGLE_API_KEY = 'AIzaSyDjxFu39XuwnhwWRkmhfditSoNT6VD5ULY'
// export const SEARCH_API_KEY = '&key=AIzaSyDjxFu39XuwnhwWRkmhfditSoNT6VD5ULY'

// const GOOGLE_API_KEY = 'AIzaSyBq-RccqbVBQ_KwyxvFLuI1CpGxQ4Qxogo'
// export const SEARCH_API_KEY = '&key=AIzaSyBq-RccqbVBQ_KwyxvFLuI1CpGxQ4Qxogo'

const GOOGLE_API_KEY = 'AIzaSyCgcrdSz6qkj_JValVXCWKCn7HfQzqta-k'
export const SEARCH_API_KEY = '&key=AIzaSyCgcrdSz6qkj_JValVXCWKCn7HfQzqta-k'

export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=100&key=${GOOGLE_API_KEY}`;

export const SUGGEST_API ='https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=`;

export const UseChannelAPI = async(id) =>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${GOOGLE_API_KEY}`);
    const json = await data.json();
    // console.log(json);
    return json;
}



const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e030e85c94msh9e1a7666a64f4a7p17488ejsn8e169c4eecdc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchDataFromApi = async (url) => {
try {
	const response = await fetch(`${BASE_URL}/${url}`, options);
	const result = await response.json();
	console.log(result);
  return result;
} catch (error) {
	console.error(error);
}
}

export const formatViewCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    } else {
      return count.toString();
    }
  };