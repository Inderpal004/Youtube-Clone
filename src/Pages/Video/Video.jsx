import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommanded from '../../Components/Recommanded/Recommanded';
import { useParams } from 'react-router-dom';

export default function Video() {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
        <PlayVideo videoId={videoId} />
        <Recommanded categoryId={categoryId}/>
    </div>
  )
}
