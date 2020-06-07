import { request } from './request'
import jsonp from 'jsonp'
import Qs from 'qs'
import { message } from 'antd'

export function getLogin(data) {
  return request({
    url: '/login',
    method: 'POST',
    data,
  })
}
export function getAddUser(data) {
  return request({
    url: '/manage/user/add',
    method: 'POST',
    data,
  })
}
