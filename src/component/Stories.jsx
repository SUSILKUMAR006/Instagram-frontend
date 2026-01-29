import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Stories() {

  const [Stories, SetSories] = useState([]);
  const Navigate = useNavigate();
  let tot =0;
  useEffect(() => {
    fetch('/db.json')
      .then((responce) => responce.json())
      .then((responce) => SetSories(responce.Stories))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className='py-6 border-b border-gray-800'>
      <div className='hidden'>{ tot = Stories.length}</div>
      <div>
        {Stories.length > 0 ? (
          <div className='flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-start px-4 md:px-0'>
            {Stories.map((storie) => <div className='flex flex-col items-center flex-shrink-0 cursor-pointer' key={storie.id} onClick={()=>{Navigate(`/Story/${storie.id}/${tot}`)}}>
              <div className="w-16 h-16 flex items-center justify-center p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full">
                <img className='w-full h-full object-cover rounded-full border-2 border-black' src={storie.user.profile_pic} alt="" />
              </div>

              <p className='text-xs text-white mt-1 w-16 truncate text-center'>{storie.user.username}</p>

            </div>)}
          </div>
        ) : (<div className='text-white'>
          Loading...
        </div>

        )}

      </div>
    </div>
  )
}

export default Stories