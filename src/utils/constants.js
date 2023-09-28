
const GOOGLE_API_KEY = 'AIzaSyBEtyYjuL9h5aueaIb2lVbGFQ2XY74gpbQ'
export const SEARCH_API_KEY = '&key=AIzaSyBEtyYjuL9h5aueaIb2lVbGFQ2XY74gpbQ'
export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=100&key=${GOOGLE_API_KEY}`;

export const SUGGEST_API ='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=`;

export const UseChannelAPI = async(id) =>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${GOOGLE_API_KEY}`);
    const json = await data.json();
    // console.log(json);
    return json;
}