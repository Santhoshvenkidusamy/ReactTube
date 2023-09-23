const VideoCard =({data})=>{
    const {snippet, statistics} = data;
    const{title, thumbnails, channelTitle} = snippet;
    return(
        <div className="w-72 m-2">
        <img  className='rounded-lg'src={thumbnails.medium.url} />     
        <div className="font-semibold text-md mt-1">{title}</div>
        <div className="text-gray-600 text-sm">{channelTitle}</div>
        <div className="text-gray-500 text-sm">{statistics.viewCount} views</div>
        </div>
    )
}
export default VideoCard;