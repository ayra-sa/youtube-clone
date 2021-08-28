import React from 'react'

const VideoItem = ({video, onSelectVideo}) => {
    return (
        <figure onClick={() => onSelectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt='video' />
            <figcaption>
                <p className='title'>{video.snippet.title}</p>
                <p className='channel'>{video.snippet.channelTitle}</p>
            </figcaption>
        </figure>
    )
}

export default VideoItem
