import getInterferce from '@/api/getInterferce.ts';

const getHomeData=()=>{
  return getInterferce.request({
    url:'/home',
    methods:'get',
    responseType:'blob'
  })
}
const getList=()=>{
  return getInterferce.request({
    url:'/list',
    methods:'post',
    responseType:'uploadFile'
  })
}
export { getHomeData, getList };