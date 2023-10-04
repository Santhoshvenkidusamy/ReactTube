import React, { useEffect, useState } from "react";
import SideBarComponent from "./SideBarComponents";
import { categories } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../utils/categorySlice";

const LeftNav = () => {
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const categorys = useSelector((store) => store.category.category);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [category,setAddCategory] = useState(categorys);
	useEffect(()=>{
		dispatch(addCategory(category))
	},[category])

	const clickHandler = (name, type) => {
		switch (type) {
			case "category":
				return setAddCategory(name);
			case "home":
				return setAddCategory(name);
			case "menu":
				return false;
			default:
				break;
		}
	};
	return (
		<div
			id="sidebar"
			className={`mt-20 overflow-y-auto h-full py-4 bg-white absolute md:relative z-10  md:block w-[240px]  translate-x-[-240px] md:translate-x-0  transition-all ${
				IsMenuOpen
					? "md:block w-[240px]  translate-x-[0px]"
					: "md:block w-[70px] translate-x-[0px]"
			}`}
		>
			<div
				className={`flex px-5 flex-col items-center}`}
			>
				{categories.map((item) => {
					return (
						<React.Fragment key={item.name}>
							<SideBarComponent
								text={item.name}
								icon={item.icon}
								action={() => {
									clickHandler(item.name, item.type);
									navigate("/");
								}}
								className={`${category === item.name ? "bg-black/[0.15]" : ""}`}
							/>
							{item.divider && <hr className="my-5 border-black/[0.2]" />}
						</React.Fragment>
					);
				})}
				<hr className="my-5 border-black/[0.2]" />
				<div className="text-black/[0.5] text-[12px]">Clone by: Namaste React</div>
			</div>
		</div>
	);
};

export default LeftNav;