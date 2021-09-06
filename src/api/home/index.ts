import getInterferce from '@/api/getInterferce.ts';

const getHomeData=()=>{
  return getInterferce.request({
    url:'http://10.136.214.70:3001/home',
    methods:'get',
  })
}
export { getHomeData };