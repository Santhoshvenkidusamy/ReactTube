
import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { randomMessages, randomNames } from '../utils/helper';
const LiveChat = () =>{
const dispatch = useDispatch();
const data = useSelector(store=> store.chat.messages)
const [message,setMessage] = useState('')
    useEffect(()=>{
        const i=setInterval(()=>{
            // console.log('hi');
            dispatch(addMessage({
                name:randomNames(),
                message:randomMessages(20),
            }))
        },1000)

        return()=> clearInterval(i)
    },[])
    return(
        <>
        <div className=" h-[490px] ml-2 m-2 p-2 border border-bg-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {data?.map((data,index)=><ChatMessage key={index} name={data?.name} message={data?.message}/>)}
            </div>
            <form className='w-full p-2 ml-2 m-2 border border-black rounded-lg' 
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage(
                    {name:'Santhosh',
                    message:message
                }))
                setMessage('')
            }}
            >
                <input 
                type='text'
                className='p-1 border border-gray-200'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
                <button className='rounded-md p-1 ml-4 bg-cyan-300'>Send</button>
            </form>
            </>
    )
}
export default LiveChat;