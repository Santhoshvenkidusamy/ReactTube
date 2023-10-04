import user from '../Components/Images/user.png'
const commentsData = [
    {
        name: 'Santhosh',
        text: 'commenyts djc ceimc kieie',
        replies: [
            {
                name: 'santhosh',
                text: 'commenyts djc ceimc kieie',
                replies: [
                    {
                        name: 'Santhosh',
                        text: 'commenyts djc ceimc kieie',
                        replies: []
                    },
                    {
                        name: 'Santhosh',
                        text: 'commenyts djc ceimc kieie',
                        replies: []
                    },
                ]
            },
            {
                name: 'santhosh',
                text: 'commenyts djc ceimc kieie',
                replies: []
            },
        ]
    },
    {
        name: 'Santhosh',
        text: 'commenyts djc ceimc kieie',
        replies: []
    },
    {
        name: 'Santhosh',
        text: 'commenyts djc ceimc kieie',
        replies: []
    },
    {
        name: 'Santhosh',
        text: 'commenyts djc ceimc kieie',
        replies: []
    },
    // Adding random comments
    {
        name: 'User1',
        text: 'This video is amazing!',
        replies: []
    },
    {
        name: 'User2',
        text: 'I can\'t stop watching this!',
        replies: []
    },
    {
        name: 'User3',
        text: 'Great content!',
        replies: []
    },
    {
        name: 'User4',
        text: 'Keep up the good work!',
        replies: []
    },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className='flex items-start space-x-2 shadow-sm bg-gray-100 rounded-md my-2 p-2'>
      <img src={user} className='h-8 rounded-full' alt='User' />
      <div>
        <p className='font-semibold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comment }) => {
  return (
    <div className='w-full'>
      {comment?.map((data, index) => (
        <div key={index} className='ml-5 space-y-2'>
          <Comment data={data} />
          {data?.replies && data.replies.length > 0 && (
            <div className='border-l-2 border-gray-200 pl-2'>
              <CommentsList comment={data?.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-full'>
      <div className='font-bold text-md mb-4'>Comments</div>
      <CommentsList comment={commentsData} />
    </div>
  );
};

export default CommentsContainer;
