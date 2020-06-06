import { request } from './request'
import Qs from 'qs'

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
