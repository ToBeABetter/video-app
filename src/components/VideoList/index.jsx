import React, { Fragment } from "react";
import "./index.css";
import VideoBox from "../Video";
export default function VideoList(props) {
  const {videoList} = props
  return (
    <Fragment>
      {videoList.map((item, index) => {
        return (
          <VideoBox key={index} index={index} videoInfo={item}></VideoBox>
        );
      })}
    </Fragment>
  );
}
