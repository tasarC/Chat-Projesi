import React from 'react'
import Share from '../share/Share'
import "./feed.css"
function Feed() {
  return (
    <div className='feed' >
      <div className="feedWrapper"></div>
      <Share/>
    </div>
  )
}

export default Feed