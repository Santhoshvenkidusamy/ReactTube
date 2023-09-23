import hamburg from '../Components/Images/hamburg.jpg';
import youtube from '../Components/Images/youtube.jpg';
import user from '../Components/Images/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { SUGGEST_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';
const Header = ()=>{
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(toggleMenu());
    }
    const searchCache = useSelector(store =>store.search);

    const[search,setSearch]=useState('');
    const[suggestions,setSuggestions]=useState([])
    const[showSuggestions,setShowSuggestions]=useState(false)
    const getSuggestions = async ()=>{
        if(searchCache[search]){
            setSuggestions(searchCache[search])
        }
        else{
        const data = await fetch(SUGGEST_API+search);
        const json = await data.json();
        setSuggestions(json[1]);
        
        dispatch(cacheResults({
            [search]:json[1],
        }))
        }
    }
    useEffect(()=>{
        const time = setTimeout(()=>{
            getSuggestions()
    },300)

        return()=> clearInterval(time);
    },[search])

    const handleBlur =()=>{
        setTimeout(()=>{
            setShowSuggestions(false)
        },300)
    }

    return(
        <div className='fixed top-0 z-50  w-full bg-white grid grid-flow-col shadow-lg p-4'>
            <div className='flex col-span-1'>
         <img src={hamburg}
            onClick={(()=>handleClick())} 
            alt='icon'
            className="h-8 mt-3 cursor-pointer"
            />
           <Link to=''>
             <img src={youtube}
            alt='icon'
            className="h-14"
            />
            </Link>
            </div>
            <div className='col-span-10 ml-12 flex justify-center'>
                <div>
                <input 
                className='w-96 p-2 rounded-l-full border border-b-gray-300'
                value={search}
                 onFocus={()=>setShowSuggestions(true)}
                 onBlur={handleBlur}
                onChange={(e)=>setSearch(e.target.value)}
                >
                </input>
                <button 
                className='p-2 rounded-r-full border border-b-gray-300'
                >
                    Search
                    </button>
                    </div>
                    {suggestions.length>0 && showSuggestions && (
                    <div className='fixed bg-white rounded-lg p-2 shadow-xl w-96 border border-gray-100'>
                    <ul>
                        {suggestions?.map((data)=>{
                        return <Link to={'/search?query='+data}><li className='my-2 p-1 text-md font-medium shadow-sm'
                         onClick={()=>setShowSuggestions(false)}
                         >
                            {data}
                            </li>
                            </Link>
                        })}
                    </ul>
                    </div>
                    )}
            </div>

            <div className='col-span-1'>
             <img src={user} className='h-8' />
            </div>
        </div>
        )
}
export default Header;