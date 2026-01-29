import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div className="max-w-[630px] mx-auto">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Feed