import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  })
  console.log(renderedList);
  return (
    <div>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  )
}

export default VideoList;