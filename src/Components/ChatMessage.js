import user from '../Components/Images/user.png'
const ChatMessage = ({name,message}) =>{
    return(
        <div className='flex items-center my-2'>
        <img  alt='' src={user} className='h-8 rounded-full' />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        </div>
    )
}
export default ChatMessage;