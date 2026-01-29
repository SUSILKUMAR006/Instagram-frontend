import React, { useEffect, useState } from 'react'

function Posts() {
    const [Post, setPost] = useState([]);
    useEffect(() => {
        fetch('/db.json')
            .then((data) => data.json())
            .then((data) => setPost(data.posts))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className='w-full px-4 md:px-0'>
            {Post.length > 0 ?
                (
                    <div className='bg-black'>
                        {Post.map((feed) => (
                            <div className='mb-6 border-b border-gray-800 pb-4' key={feed.id}>
                                <div className="flex gap-3 items-center mb-3">
                                    <img className='rounded-full h-10 w-10 object-cover' src={feed.user.profile_pic} alt="" />

                                    <div className='flex-1'>
                                        <h6 className='text-white font-semibold text-sm'>{feed.user.username} <span className='text-gray-400 font-normal text-xs'>• 1d</span></h6>
                                        <p className='text-gray-400 text-xs'>Original audio: Anirudh Ravichander, Yogi Sekar, Amogh Balaji</p>
                                    </div>
                                    <button className='text-white'><i className="bi bi-three-dots"></i></button>
                                </div>
                                <div className='w-full mb-3 bg-black'>
                                    <img className='w-full h-auto object-cover' src={feed.image} alt="" />
                                </div>
                                <div className='flex gap-4 text-2xl mb-2 text-white'>
                                    <button className='hover:text-gray-400'><i className="bi bi-heart"></i></button>
                                    <button className='hover:text-gray-400'><i className="bi bi-chat"></i></button>
                                    <button className='hover:text-gray-400'><i className="bi bi-send"></i></button>
                                    <button className='ml-auto hover:text-gray-400'><i className="bi bi-bookmark"></i></button>
                                </div>
                                <div className='mb-2'>
                                    <p className='font-semibold text-sm text-white flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                        </svg>
                                        {feed.likes.toLocaleString()} likes
                                    </p>
                                </div>
                                <p className='text-white text-sm'>
                                    <span className='font-semibold'>{feed.user.username}</span> {feed.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-white'>Loading...</div>
                )
            }
        </div>
    )
}

export default Posts