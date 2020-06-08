import { request } from './request'
import Qs from 'qs'

export function getCategory(params) {
  return request({
    url: '/manage/category/list',
    method: 'GET',
    params,
  })
}
export function getAddCategory(data) {
  return request({
    url: '/manage/category/add',
    method: 'POST',
    data,
  })
}
export function getUpdateCategory(data) {
  return request({
    url: '/manage/category/update',
    method: 'POST',
    data,
  })
}
