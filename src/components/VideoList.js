import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({video, onSelectVideo}) => {
    const listVideos = video.map(vi => (
        <VideoItem onSelectVideo={onSelectVideo} key={vi.id.channelId} video={vi} />
        ))

    return (
        <div className='video-list'>
            {listVideos}
        </div>
    )
}

export default VideoList
