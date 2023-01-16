import React from 'react'
import './index.css'
import {TabBar} from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UserOutline,
} from 'antd-mobile-icons'
export default function Footer() {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key: 'message',
      title: '消息',
      icon: (active) =>
        active ? <MessageFill /> : <MessageOutline />
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className='footer'>
      <TabBar>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

