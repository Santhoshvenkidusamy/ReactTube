const SearchCard =({data})=>{
    const {snippet, id} = data;
    const{title, thumbnails, channelTitle,description} = snippet;
    return(
        <div className="m-2 flex flex-row">
        <img  className='rounded-lg'src={thumbnails.medium.url} />  
        <div className="ml-4">  
        <div className=" font-bold">{title}</div>
        <div className="mt-2 text-gray-600">{channelTitle}</div>
        <div className="mt-4 text-sm text-gray-500">{description}</div>
        </div> 
        </div>
    )
}
export default SearchCard;