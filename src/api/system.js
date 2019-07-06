import request from '@/utils/request'

export function getSysAdmin(code) {
  console.log(code+' -----code')
  const data = {
    code: code,
    token: 'token'
  }
  return request({
    url: '/system/demo',
    method: 'get',
    params: data
  }
  )
}