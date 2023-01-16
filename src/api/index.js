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