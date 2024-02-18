import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/cwh.jpg';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, valueConverter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

export default function PlayVideo() {

  const {videoId} = useParams()

  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData] = useState(null);
  const [commentData,setCommentData] = useState([]);

  const fetchVideoData = async()=>{
    const videoDetails_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(videoDetails_Url);
    const data = await response.json();
    setApiData(data.items[0])
  }

  const fetchOtherData = async()=>{
    if (apiData) {
      // fetching channel Data
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const response = await fetch(channelData_url);
      const data = await response.json();
      setChannelData(data.items[0]);
    }

    // fetching comment data
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    const response1 = await fetch(commentUrl);
    const data1 = await response1.json();
    setCommentData(data1.items)
  }

  useEffect(()=>{
    fetchVideoData();
  },[videoId])

  useEffect(()=>{
    fetchOtherData();
  },[apiData])

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?valueConverter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} alt="" />{apiData?valueConverter(apiData.statistics.likeCount):155}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:"Channel Image"} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?valueConverter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description:"Description Here"}</p>
        <hr />
        <h4>{apiData?valueConverter(apiData.statistics.commentCount):"102"} Comments</h4>

        {commentData.map((item,index)=>{
          return (
            <div className="comment" key={index}>
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
    </div>
  )
}
