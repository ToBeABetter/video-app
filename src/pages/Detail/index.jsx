import React, {useEffect} from "react"
import Player from "xgplayer"
import { EyeOutline, LikeOutline } from 'antd-mobile-icons'
import { Divider, Tag, Input, Button } from "antd-mobile"
import { useLocation } from "react-router-dom"
import './index.css'
import CommentList from "../../components/CommetList"
import { getVideoDetail } from "../../api"

export default function Detail() {
  const _getVideoDetail = async (id) => {
    const res = await getVideoDetail({id})
    console.log(res)
  }
  const {state} = useLocation()
  console.log(state)
  const {data: {header: {title}, content: {data: {playUrl, cover: {detail: cover}}}}} = state
  const initPlayer = () => {
    new Player({
      id: 'player',
      url: playUrl,
      fluid: true,
      poster: cover
    })
  }
 
  useEffect(() => {
    return () => {
      initPlayer()
      _getVideoDetail()
    }
  }, [])
  return (
    <div className="detail">
      {/* 视频播放器 */}
      <div className="video-box">
        <div id="player">
        </div>
        <div className="video-title">
          {title}
        </div>
        {/* 点赞 */}
        <div className="review">
          <span className="view-time">
            <EyeOutline fontSize={16}/> 333
          </span>
          <span className="like">
            <Tag round fill='outline' color='#666' className="tag">
              <LikeOutline fontSize={16} color='red' /> 12
            </Tag>
          </span>
        </div>
      </div>
      <Divider />
      
      {/* 评论 */}
      <div className="comment">
        <CommentList />
      </div>
      <div className="comment-input">
      </div>
    </div>
  )
} 