
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
            <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Santhosh',
              message: message,
            })
          );
          setMessage('');
        }}
        className="flex p-2 space-x-2 border-t border-gray-300"
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>
            </>
    )
}
export default LiveChat;