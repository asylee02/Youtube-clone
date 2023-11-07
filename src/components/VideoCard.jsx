import React from 'react';
import {format, register} from 'timeago.js';
import {useNavigate} from 'react-router-dom'

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  const handleClick = function(){
    navigate(`/videos/watch/${video.id}`, {state: {video: video}})
  }
  const {title, thumbnails,channelTitle, publishedAt} = video.snippet;
  return <li>
    <img onClick={handleClick} className='w-full hover:cursor-pointer' src={thumbnails.medium.url} alt ={title}/>
    <div>
      <p className='font-semibold my-2 line-clamp-2'>{title}</p>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80 '>{format(publishedAt)}</p>
    </div>
  </li>;

}
