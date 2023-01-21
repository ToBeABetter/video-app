import fetch from "../util/config";

export const getVideoList = (data) => {
  return fetch(
    {
      url: '/api/v5/index/tab/allRec',
      method: 'get',
      data
    }
  )
}

export const getTabList = (data) => {
  return fetch(
    {
      url: '/api/v5/index/tab/list',
      method: 'get',
      data
    }
  )
}
// 关注列表
export const getFollowList = (data) => {
  return fetch(
    {
      url: '/api/v5/community/tab/list',
      method: 'get',
      data
    }
  )
}
// 视频详情
export const getVideoDetail = (data) => {
  return fetch(
    {
      url: '/api/v4/video/related',
      method: 'get',
      data
    }
  )
}