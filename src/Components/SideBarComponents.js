import React from "react";

const SideBarComponent = ({ text, icon, className, action }) => {
    console.log(text);
	return (
		<div
			className={`text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg  ${className} center`}
			onClick={action}
		>
			<span className={"text-xl mr-5"}>{icon}</span>
            {text}
		</div>
	);
};
export default SideBarComponent;