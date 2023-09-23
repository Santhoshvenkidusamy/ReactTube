import user from '../Components/Images/user.png'
const commentsData=[
    {
        name:'Santhosh',
        text:'commenyts djc ceimc kieie',
        replies:
        [
            {
            name:'santhosh',
            text:'commenyts djc ceimc kieie',
            replies:[{
                name:'Santhosh',
                text:'commenyts djc ceimc kieie',
                replies:[]
                },
                {
                    name:'Santhosh',
                    text:'commenyts djc ceimc kieie',
                    replies:[]
                    }, ]
            },
           {
            name:'santhosh',
            text:'commenyts djc ceimc kieie',
            replies:[ ]
           },
        ]
    },
    {
    name:'Santhosh',
    text:'commenyts djc ceimc kieie',
    replies:[]
    },
    {
        name:'Santhosh',
        text:'commenyts djc ceimc kieie',
        replies:[]
     },
        {
            name:'Santhosh',
            text:'commenyts djc ceimc kieie',
            replies:[]
            },
]

const Comment = ({data})=>{
    const {name,text,replies}=data;
    return(
    <div className='flex shadow-sm bg-gray-100 rounded-md my-2'>
         <img src={user} className='h-8' />
         <div className='p-1'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
         </div>
    </div>
    )
}

const CommentsList =({comment}) =>{
return(
 comment?.map((data,index)=> {
 return (
    <div>
        <Comment key={index} data={data}/>
        <div className='ml-5 border border-l-black'>
            <CommentsList comment={data?.replies} />
        </div>
        </div>    
 )
})
    )
}

const CommentsContainer = () =>{
    return(
        <div className="m-5 p-2 ">
        <div className='font-bold'>Comments</div>
        <CommentsList comment={commentsData}/>
        </div>
    )
}
export default CommentsContainer;