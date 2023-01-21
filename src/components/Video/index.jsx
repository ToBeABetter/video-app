import React, { useEffect } from "react";
import { Avatar, Tag } from 'antd-mobile'
import { EyeOutline, LikeOutline, MoreOutline, MessageOutline, SendOutline } from 'antd-mobile-icons'
import './index.css'
import Player from "xgplayer";
import { useNavigate } from "react-router-dom";

export default function VideoBox(props) {
  const {videoInfo, index} = props
  console.log(videoInfo)
  const {data: {header: {title, icon}, content: {data: {playUrl, author: {name}, category, cover: {detail: cover}}}}} = videoInfo
  
  const initPlayer = () => {
    new Player({
      el: document.getElementsByClassName('video')[index],
      id: 'player',
      url: playUrl,
      fluid: true,
      poster: cover
    })
  }
 
  useEffect(() => {
    return () => {
      initPlayer()
    }
  }, [])

  // 页面跳转
  const navigate = useNavigate()
  const detail = () => {
    navigate('/detail', {state: videoInfo})
  }

  return (
    <div className="video-box">
      <div className="video-box-top">
        {/* 头像 */}
        <span className="avatar-box">
          <Avatar className="avatar" src={icon}></Avatar> <b className="nick-name">{ name }</b>
        </span>
        {/* 图标 */}
        <span>
          <MoreOutline fontSize={20} />
        </span>
      </div>
      <div className="video-box-content">
        <div className="header-title" onClick={detail}>
          {title} <span style={{'color': '#aaa', 'marginLeft': '.5rem'}}>{`#${category}`}</span>
        </div>
        <div className="video">
        </div>
      </div>
      <div className="video-box-bottom">
        <span>
          <Tag round fill='outline' color='#666' className="tag">
            <EyeOutline className="eye" fontSize={16} /> <span className="view-time">232</span>
          </Tag>
          <Tag round fill='outline' color='#666' className="tag">
            <MessageOutline fontSize={16} /> 222
          </Tag>
          <Tag round fill='outline' color='#666' className="tag">
            <LikeOutline fontSize={16} /> 423
          </Tag>
        </span>
        <span>
          <SendOutline fontSize={16} />
        </span>
      </div>
    </div>
  )
}