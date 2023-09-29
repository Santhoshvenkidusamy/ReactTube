
// const GOOGLE_API_KEY = 'AIzaSyDjxFu39XuwnhwWRkmhfditSoNT6VD5ULY'
// export const SEARCH_API_KEY = '&key=AIzaSyDjxFu39XuwnhwWRkmhfditSoNT6VD5ULY'

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

export const formatViewCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)} million`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else {
      return count.toString();
    }
  };