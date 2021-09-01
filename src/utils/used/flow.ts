/**
 * 先请求接口获取n个图片
 * 计算一行能放几个图片 count
 * 遍历图片：
 *    i<count 第一行
 *    i>count 第二行第三行……
 * 判断最后一个图片是否出现
 *    出现： 窗口高度+滚动高度>最后一个图片的offsetTop  加载图片
 * ??????这个版本算的有问题
 */
let count, imgs;

let flow = function (root, iW, gap = 10) {
  let  arrH: [] = [];
   // 获取一行能放几个图片
  count = Math.floor(root.offsetWidth / (iW + gap));
  imgs = getImg(count * 3)
  for (let i = 0; i < imgs.length; i++){
    // 第一行
    if (i < count) {
        //根据请求的图片设置生成元素和定位
      setPosition(root, (iW + gap) * i, 0, imgs[i].h, iW);
      arrH.push( imgs[i].h);
    } else {
      // 第二行 将最新的图片放到最小高度下面
      let min = Math.min(...arrH);
      let minInd = arrH.indexOf(min);
      setPosition(root, (iW + gap) * minInd, (min + gap), imgs[i].h, iW);
      // 更新最小高度
      arrH[minInd] = min+gap + imgs[i].h;
    }
  }
}

let isLast = function (root, iW, lastEl) {
  console.log('---',document.body.clientHeight, root.scrollTop,lastEl.offsetTop);
  
  if (document.body.clientHeight + root.scrollTop > lastEl.offsetTop) {
    console.log('last');
    imgs.concat(getImg(count * 3))
    flow(root, iW)
  }
}
// 创建图片并设置图片定位
function setPosition(root, left, top, h, w, src) {
  console.log('h',h)
  // 创建一个虚拟节点
  let d = document.createDocumentFragment();
  let div = document.createElement('div');
  div.src = 'src';
  // 批量修改的方法比较好
  // let style = `height:${h}px;`
  // img.setAttribute('style',style)
  div.style.height = h + 'px';
  div.style.width = w+'px';
  div.style.left = left + 'px'
  div.style.top = top + 'px'
  div.style.position = 'absolute';
  div.style.border = "1px solid red";

  d.appendChild(div);
  root?.appendChild(d);
}

// mock获取图片数组
function getImg(count) {
  let imgs = [
    {h: 189.0280868641905, color: "pink"},
    {h: 218.210698362035103, color: "pink"} ,
    {h: 160.25385965566561, color: "pink"} ,
    {h: 297.11534139872877, color: "pink"} ,
    {h: 188.58383299739702, color: "pink"} ,
    {h: 214.838209732190633, color: "pink"} ,
    {h: 122.189497945586155, color: "pink"} ,
    {h: 217.351498517599452, color: "pink"} ,
    {h: 199.53641791167063, color: "pink"} ,
    {h: 147.29610288791655, color: "pink"} ,
    {h: 288.90755643840413, color: "pink"} ,
    { h: 175.27896586090202, color: "pink" },
    {h: 260.25385965566561, color: "pink"} ,
    {h: 197.11534139872877, color: "pink"} ,
    {h: 188.58383299739702, color: "pink"} ,
    {h: 114.838209732190633, color: "pink"} ,
    {h: 222.189497945586155, color: "pink"} ,
    {h: 317.351498517599452, color: "pink"} ,
    {h: 199.53641791167063, color: "pink"} ,
    {h: 347.29610288791655, color: "pink"} ,
    {h: 188.90755643840413, color: "pink"} ,
    { h: 275.27896586090202, color: "pink" },
    { h: 175.27896586090202, color: "pink" },
    {h: 260.25385965566561, color: "pink"} ,
    {h: 197.11534139872877, color: "pink"} ,
    {h: 188.58383299739702, color: "pink"} ,
    {h: 114.838209732190633, color: "pink"} ,
    {h: 222.189497945586155, color: "pink"} ,
    {h: 317.351498517599452, color: "pink"} ,
    {h: 199.53641791167063, color: "pink"} ,
    {h: 347.29610288791655, color: "pink"} ,
    {h: 188.90755643840413, color: "pink"} ,
    { h: 275.27896586090202, color: "pink" },    { h: 175.27896586090202, color: "pink" },
    {h: 260.25385965566561, color: "pink"} ,
    {h: 197.11534139872877, color: "pink"} ,
    {h: 188.58383299739702, color: "pink"} ,
    {h: 114.838209732190633, color: "pink"} ,
    {h: 222.189497945586155, color: "pink"} ,
    {h: 317.351498517599452, color: "pink"} ,
    {h: 199.53641791167063, color: "pink"} ,
    {h: 347.29610288791655, color: "pink"} ,
    {h: 188.90755643840413, color: "pink"} ,
    { h: 275.27896586090202, color: "pink" },
  ]
  return imgs.slice(0, count);
}
export {flow,isLast} 