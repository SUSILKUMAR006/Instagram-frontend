import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ViewStories() {
    const { id , tot} = useParams();
    const [story, setStory] = useState(null);
    const Navigate = useNavigate();
    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(res => {
                const foundStory = res.Stories.find(s => s.id === parseInt(id));
                setStory(foundStory);
            })
            .catch(err => console.log(err));
    }, [id]);
    if(id>tot || id<=0){
      Navigate('/');
    }
    return (
        <div className='text-white min-h-screen flex flex-col bg-black'>
            <div className='p-4 flex items-center border-b border-gray-800'>
                <button onClick={() => Navigate('/')} className='text-white hover:text-gray-400 transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className='ml-4 font-semibold text-lg'>Stories</h2>
            </div>
            <div className='flex-1 flex items-center justify-center'>
            {story ? (
                <div className='flex items-center gap-6 max-w-4xl w-full px-4'>
                    {Number(id) > 1 && (
                        <Link to={`/Story/${Number(id)-1}/${tot}`} className='hover:scale-110 transition-transform'>
                            <div className='bg-gray-800 hover:bg-gray-700 rounded-full p-3 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                        </Link>
                    )}
                    <div className='flex-1 max-w-md mx-auto'>
                        <div className='bg-gray-900 rounded-lg overflow-hidden'>
                            <img className='w-full max-h-[600px] object-cover' src={story.image} alt={story.user.username} />
                            <div className='p-4 flex items-center gap-3'>
                                <img className='w-10 h-10 rounded-full object-cover' src={story.user.profile_pic} alt="" />
                                <p className='text-white font-semibold'>{story.user.username}</p>
                            </div>
                        </div>
                    </div>
                    {Number(id) < tot && (
                        <Link to={`/Story/${Number(id)+1}/${tot}`} className='hover:scale-110 transition-transform'>
                            <div className='bg-gray-800 hover:bg-gray-700 rounded-full p-3 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </Link>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
            </div>
        </div>
    );
}

export default ViewStories;