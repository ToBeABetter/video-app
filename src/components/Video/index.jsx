import React, { useEffect } from "react";
import { Avatar, Tag } from 'antd-mobile'
import { EyeOutline, LikeOutline, MoreOutline, MessageOutline, SendOutline } from 'antd-mobile-icons'
import './index.css'
import Player from "xgplayer";

export default function VideoBox(props) {
  const {playUrl, title, index, cover} = props
  
  const initPlayer = () => {
    let player = new Player({
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

  return (
    <div className="video-box">
      <div className="video-box-top">
        {/* 头像 */}
        <span className="avatar-box">
          <Avatar className="avatar" src={'./assets/img/tom.jpg'}></Avatar> <b className="nick-name">打开眼戒</b>
        </span>
        {/* 图标 */}
        <span>
          <MoreOutline fontSize={20} />
        </span>
      </div>
      <div className="video-box-content">
        <div className="header-title">
          {title}
        </div>
        {/* <video
          className="video"
          src={playUrl}
          width="100%"
          controls
        ></video> */}
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