import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../utils/categorySlice";

const ButtonComponent = ({data}) =>{
    const categorys = useSelector((store) => store.category.category);
    const dispatch = useDispatch();
	const navigate = useNavigate();
	const [category,setAddCategory] = useState(categorys);
	useEffect(()=>{
		dispatch(addCategory(category))
	},[category])
    return(
        <button onClick={()=>{
            setAddCategory(data?.url)
            navigate('/')
        }
    } className="p-1 mx-3 mt-2 px-5 bg-gray-300 rounded-lg">{data?.name}</button>
    )
}

export default ButtonComponent;