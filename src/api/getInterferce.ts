import axios from 'axios';

// import config from '@/config'
// const baseURL=process.env.NODE_ENV

// 配置不同环境的baseURL
const baseURL = 'http://10.136.214.60:3001';
class HttpRequest{
  baseURL:string
  constructor(baseURL:string){
    this.baseURL=baseURL;
  }
  // 统一的options
  getInsideConfig(options:any={}){
    const config={
      baseURL:this.baseURL,
      timeout:10000,//10秒
      responseType:'json',//表示服务器响应的数据类型
      transformRequest:(req:any)=>{
        // 上传文件不需要将文件转为JSON字符串
        if (options.responseType == "uploadFile") {
          return req;
        }
        return JSON.stringify(req);
      },
      transformResponse:(res:any,headers:any)=>{
        console.log(res,headers)
        // 处理下载文件
        if(options.responseType=='blob'){
          // 获取文件名
          let fileName = headers['content-disposition'].split('filename=')[1];
          fileName = decodeURIComponent(fileName);
          const type = 'application/vnd.ms-excel'
          const blob = new Blob([res], { type: type })
          const a = document.createElement('a')
          // 创建URL
          const blobUrl = window.URL.createObjectURL(blob)
          a.download = fileName
          a.href = blobUrl
          document.body.appendChild(a)
          // 下载文件
          a.click()
          // 释放内存
          URL.revokeObjectURL(blobUrl)
          document.body.removeChild(a)
          return false;
        }
        // 处理json格式
        return  JSON.parse(res);
      }
    }
    return config;
  }
  // 拦截器
  interceptors(instance){
    // 添加请求拦截器
    instance.interceptors.request.use( 
      config=>{//请求数据
        return config;
      }, //请求错误
      error => {
        console.log('req--error::',error,error.request)
        return Promise.reject(error);
      });
    // 添加响应拦截器
    instance.interceptors.response.use(
      res=>{// 响应数据
        return res;
      }, // 响应错误 
      error=>{
        console.log('res-error::',error)
        if (error.response) {
          switch (error.response.status) {
            case 401:
              { };
            case 403:
              { }
          }
        }
        return Promise.reject(error);
      });
  }
  request(options:any={}){
    // 初始化options
    options={...this.getInsideConfig(options),...options};
    // 创建axios实例
    const instance = axios.create();
    // 添加拦截
    this.interceptors(instance);
    return instance(options);
  }
}
export default new HttpRequest(baseURL)

