import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [Profile, setProfile] = useState(null);
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((data) => data.json())
      .then((data) => {
        setProfile(data.Profile);
        setSuggestions(data.Suggestions);
      })
      .catch((error) => console.log(error));
  }, []);

  const FollowHandle = async(id,username) =>{
    alert('Follow feature disabled in static mode. Data is read-only.');
  }
  return (
    <div className='hidden lg:block px-8 py-8 text-white sticky top-0 max-w-xs'>
      {Profile ?
        <div className='text-white mb-6' key={Profile.id}>
          <div className="flex items-center gap-3 mb-4">
            <img className='rounded-full h-14 w-14 object-cover' src={Profile.profile_pic} alt="" />
            <div className='flex-1'>
              <h5 className='font-semibold text-white text-sm'>{Profile.username}</h5>
              <p className='text-gray-400 text-xs'>John Doe</p>
            </div>
            <button className='text-blue-400 text-xs font-semibold hover:text-blue-300'>Switch</button>
          </div>
        </div>
        : <div className='text-white'>Loading...</div>}
      <div className='flex items-center mb-4'>
        <p className='text-gray-400 text-sm font-semibold'>Suggested for you</p>
        <button className='ml-auto text-xs font-semibold text-white hover:text-gray-400'>See All</button>
      </div>
      {Suggestions.length > 0 ?(
         Suggestions.map((Suggestion) => <div className='flex items-center gap-3 mb-3' key={Suggestion.id}>
          <img className='rounded-full w-11 h-11 object-cover' src={Suggestion.user.profile_pic} alt="" />
          <div className='flex-1'>
            <p className='text-sm text-white font-semibold'>{Suggestion.user.username}</p>
            <p className='text-xs text-gray-400'>Suggested for you</p>
          </div>
          <button onClick={()=>FollowHandle(Suggestion.id,Suggestion.user.username)} className='text-xs bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg font-semibold'>Follow</button>
          </div>) )
        :( <div>
          <p className='text-white'>Loading...</p>
        </div>)}
    </div>
  )
}

export default Suggestions