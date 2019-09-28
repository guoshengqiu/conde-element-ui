// 首页api
import request from '@/http'

// 获取主题列表
export function getTopic (params) {
  return request({
    url: '/topics',
    method: 'get',
    params
  })
}

// 获取主题列表
export function getDatails (id, params) {
  return request({
    url: `/topic/${id}`,
    method: 'get',
    params
  })
}

// accesstoken 验证 accessToken 的正确性
export function postAccessToken (params) {
  return request({
    url: '/accesstoken',
    method: 'post',
    params
  })
}

// 根据accesstoken验证正确返回的loginname请求用户详情
export function getUserDetails (loginname) {
  return request({
    url: `/user/${loginname}`,
    method: 'get'
  })
}

// 收藏主题
export function topicCollect (params) {
  return request({
    url: '/topic_collect/collect',
    method: 'post',
    params
  })
}

// 取消主题
export function deleteCollect (params) {
  return request({
    url: '/topic_collect/de_collect',
    method: 'post',
    params
  })
}
