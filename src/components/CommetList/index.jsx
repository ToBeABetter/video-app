import React from "react";
import { List } from "antd-mobile";
import './index.css'
export default function CommentList() {
  const comments = [
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    },
    {
      nickName: '这个杀手不太冷',
      content: '这也太美好了吧',
      time: '2023-1-10'
    }
  ]

  return (
        <List header={'评论（3）'}>
          {comments.map(item => 
            <List.Item>
              <div className="title">
                <span>{item.nickName}</span>
                <span>{item.time}</span>
              </div>
              <div className="content">
                <span>{item.content}</span>
              </div>
            </List.Item>
            )
          }
        </List>
    )
}