
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
import Header from "./Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Body = ()=>{
    const isMenuOpen = useSelector(store =>store.app.isMenuOpen);
    return(
    <>
    <Header />
    <div className='grid grid-flow-col'>
    {isMenuOpen &&<div className="col-span-3"><SideBar /></div>}
    <div className={isMenuOpen?'ml-30':'ml-36'}><Outlet /></div>
    </div>
    </>
    )
}
export default Body;