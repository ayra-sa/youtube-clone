import React from 'react'

const VideoDetail = ({video}) => {
    if (!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    
    return (
        <div className='video-detail'>
            <iframe title='Video play' src={videoSrc} />
            <div className='info'>
                <h4>{video.snippet.title}</h4>
                <hr></hr>
                <h5>{video.snippet.channelTitle}</h5>
                <p>{video.snippet.description}</p>

            </div>
        </div>
    )
}

export default VideoDetail
