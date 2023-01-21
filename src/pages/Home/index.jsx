import React, { useEffect, useState } from "react";
import VideoList from "../../components/VideoList";
import { getVideoList } from "../../api";
import './index.css'

export default function Home() {
  let [homeVideoList, setVideo] = useState([])

  async function getData() {
    const res = await getVideoList({page: 0})
    const {itemList} = res.data
    const [firstList] = itemList
    const videoList = firstList.data.itemList
    setVideo(videoList)
  }

  useEffect(() => {
    return () => {
      getData()
    }
  }, [])
  
  return (
    <div className="home">
      {/* 视频列表 */}
      <VideoList videoList={homeVideoList} />
    </div>
  )
}