
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
const Body = ({category, setCategory})=>{
    const isMenuOpen = useSelector(store =>store.app.isMenuOpen);
    console.log(category);
    return(
    <>
    <Header />
    <div className='grid grid-flow-col'>
    {isMenuOpen &&<div className="col-span-3"><SideBar category={category} setCategory={setCategory}/></div>}
    <div className={isMenuOpen?'ml-30':'ml-36'}><Outlet category={category} setCategory={setCategory}/></div>
    </div>
    </>
    )
}
export default Body;