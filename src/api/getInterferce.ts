import axios from 'axios';

// import config from '@/config'
// const baseUrl=process.env.NODE_ENV

// 根据配置文件判断当前环境
const baseUrl = '';
class HttpRequest{
  baseUrl:string
  constructor(baseUrl:string){
    this.baseUrl=baseUrl;
  }
  // 统一的options
  getInsideConfig(){
    const config={
      baseUrl:this.baseUrl
    }
    return config;
  }
  // 拦截器
  interceptors(instance){
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      console.log('config',config)

      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      console.log('response',response)
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }
  request(options:any={}){
    console.log(options)
    // 初始化options
    options={...this.getInsideConfig(),...options};
    // 创建axios实例
    const instance = axios.create();
    this.interceptors(instance);
    return instance(options);

  }
}
export default new HttpRequest(baseUrl)

