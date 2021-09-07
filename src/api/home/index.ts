import getInterferce from '@/api/getInterferce.ts';

const getHomeData=()=>{
  return getInterferce.request({
    url:'http://10.136.214.60:3001/home',
    methods:'get',
    responseType:'blob'
  })
}
const getList=()=>{
  return getInterferce.request({
    url:'http://10.136.214.60:3001/list',
    methods:'post',
    responseType:'uploadFile'
  })
}
export { getHomeData, getList };