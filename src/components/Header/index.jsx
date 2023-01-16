import React from "react"
import './index.css'
import { useNavigate } from "react-router-dom"
import { Tabs } from 'antd-mobile'

export default function Header() {
  // 路由跳转
  const navigate = useNavigate()
  const changeTab = (path) => {
    navigate(path)
  }
  return (
    <div className="header">
      <Tabs onChange={changeTab} className='tab'>
        <Tabs.Tab title='首页' key='home'>
        </Tabs.Tab>
        <Tabs.Tab title='推荐' key='recommend'>
        </Tabs.Tab>
        <Tabs.Tab title='关注' key='follow'>
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}

