import React, { Fragment } from "react";
import "./index.css";
import VideoBox from "../Video";
export default function VideoList(props) {
  const {homeVideoList} = props
  return (
    <Fragment>
      {homeVideoList.map((item, index) => {
        const {data: {header: {title}, content: {data: {playUrl, cover: {detail}}}}} = item
        return (
          <VideoBox playUrl={playUrl} title={title} key={index} index={index} cover={detail}></VideoBox>
        );
      })}
    </Fragment>
  );
}
