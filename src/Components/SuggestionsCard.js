const SuggestionsCard =({data})=>{
    const {snippet, statistics} = data;
    const{title, thumbnails, channelTitle} = snippet;
    return(
        <div className="m-2">
            <div className="flex">
        <img  className='rounded-lg'src={thumbnails.default.url} />  
        <div className="ml-4">   
        <div className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2">{title}</div>
        <div className="text-gray-600 text-sm">{channelTitle}</div>
        <div className="text-gray-500 text-sm">{statistics.viewCount} views</div>
        </div>
        </div>
        </div>
    )
}
export default SuggestionsCard;