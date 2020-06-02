import request from '../utils/request';
const proxy = "/apis"
export function query() {
  return request('/api/users');
}
export function textCnode() {
  return request(proxy+'/api/v1/topics');
}
export function mokeData() {
  return request('/api/mockdata');
}
