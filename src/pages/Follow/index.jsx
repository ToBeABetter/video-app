import React, { useState, useEffect } from "react"
import VideoList from '../../components/VideoList'
import { getFollowList } from "../../api"
export default function Follow() {
  let [followList, setFollow] = useState([])
  const getData = async () => {
    const res = await getFollowList()
    setFollow( res.tabInfo.tabList )
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      {/* <VideoList videoList={followList}></VideoList> */}
    </div>
  )
}