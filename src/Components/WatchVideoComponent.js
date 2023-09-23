import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideoComponent =()=>{
    const dispatch  = useDispatch();
    const [searchparams] = useSearchParams();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    return(
        <div className="ml-20 flex flex-col w-full justify-center">
        <div className="mt-28 flex w-full">
            <iframe  className='p-2 mx-5 rounded-lg' width="850" height="500" src={"https://www.youtube.com/embed/"+searchparams.get('v')}  allowfullscreen></iframe>
            <div className="w-3/12">
            <LiveChat />
        </div>
        </div>
        <CommentsContainer />
        </div>
    )
}
export default WatchVideoComponent;