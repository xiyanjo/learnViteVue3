export default function (url: string) {
  // 一个带有地址的image实例加载完成的过程
  return new Promise((resolve, reject) => {
    // 创建一个image实例 
    var image = new Image();
    // 加载完成resolve
    image.onload = function () {
      console.log('------')
      resolve(image);
    };
    image.onerror = function () {
      reject(new Error(url));
    };
    // 给image实例赋值地址
    image.src = url;
  });
}