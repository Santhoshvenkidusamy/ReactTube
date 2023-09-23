import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () =>{
    return(
        <div className=" px-14 mt-28 h-full">
            <ul className="my-2">
                <Link to='/'><li className="my-2">Home</li></Link>
                <li className="my-2">Shorts</li>
                <li className="my-2">Videos</li>
                <li className="my-2">Live</li>
               
            </ul>
            <h1 className="font-bold my-2"> Trending</h1>
            <ul className=" my-2">
                <li className="my-2">Music</li>
                <li className="my-2">Sports</li>
                <li className="my-2">gaming</li>
                <li className="my-2">News</li>
               
            </ul>
            <h1 className="font-bold my-2">Watch Later</h1>
            <ul className="my-2">
                <li className="my-2">Music</li>
                <li className="my-2">Sports</li>
                <li className="my-2">gaming</li>
                <li className="my-2">News</li>
               
            </ul>
        </div>
    )
}
export default SideBar;