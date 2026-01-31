import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Profile';
import Sidebar from './Sidebar';

function ProfileMain() {
    const [follower, setFollower] = useState([]);

    // Fetch followers data on component mount
    useEffect(() => {
        fetch('/db.json')
            .then((response) => response.json())
            .then((data) => setFollower(data.followers))
            .catch((err) => console.log(err));
    }, []);

    // Handle unfollow action (disabled in static mode)
    const UnfollowHandle = async (id) => {
        toast.warning('Unfollow feature is disabled in static mode. Data is read-only.');
    };

    return (
        <div className="container h-lvh flex bg-black text-white">
            {/* Sidebar */}
            <div className="w-25 lg:w-2/6 hidden md:block">
                <Sidebar />
            </div>

            {/* Main Profile Content */}
            <div className="w-full px-5 md:px-0 md:w-5/6">
                <Profile />
            </div>

            {/* Followers Section */}
            <div className="hidden lg:block ml-8 mt-8 sticky top-4 max-w-xs">
                <h1 className='mb-6 text-white font-semibold text-lg'>Unwatched Followers</h1>
                {follower.length > 0 ? (
                    <div className='space-y-3'>
                        {follower.map((follow) => (
                            <div key={follow.id} className="flex items-center justify-between gap-3 py-2">
                                <div className='flex items-center gap-3 flex-1'>
                                    <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold'>
                                        {follow.username.charAt(0).toUpperCase()}
                                    </div>
                                    <p className="text-white text-sm font-semibold">{follow.username}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        UnfollowHandle(follow.id);
                                    }}
                                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1.5 rounded-lg text-xs font-semibold"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Loading followers...</div>
                )}
            </div>

            {/* Toast Container for Notifications */}
            <ToastContainer />
        </div>
    );
}

export default ProfileMain;