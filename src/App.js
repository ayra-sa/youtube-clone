import React, {useState} from 'react'
import './App.css';
import api from './api/youtube.js'
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleSubmit = async (searchTerm) => {
    const response = await api.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDzX6yNClzY1wAEhtIHK3UIb_NveMxUm60',
        q: searchTerm,
      }
    })
    console.log(response)
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }
  // const handleSubmit = async (searchTerm) => {
  //   const { data: {items: videos} } = await api.get('search', {
  //     params: {
  //       part: 'snippet',
  //       maxResults: 5,
  //       key: 'AIzaSyDzX6yNClzY1wAEhtIHK3UIb_NveMxUm60',
  //       q: searchTerm,
  //     }
  //   })
  //   setVideos(videos)
  //   setSelectedVideo(selectedVideo)
  // }

  return (
    <div className='App'>
      <SearchBar onSubmit={handleSubmit} />
      <div className='video-container'>
        <VideoDetail video={selectedVideo} />
        <VideoList video={videos} onSelectVideo={setSelectedVideo} />
      </div>
    </div>
  );
}

export default App;
