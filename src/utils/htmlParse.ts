const EOF = Symbol('EOF');// End of file(处理文件是否结束)
// 初始状态
function data(c){
  if(c=='<') return tagOpen;
  if(c==EOF) return ;
  return data;
}
function tagOpen(c){
  if(c=='/')return endTagOpen;
  if(c.match(/^[a-zA-Z]$/)) return tagName(c);
  return data;

}
function tagName(c){
  // beforeAttributeName
  // selfClosingStrarTag
  // tagName
}
function endTagOpen(c){
  
}

let parseHTML = function(html){
  let state = data;
  for (let c of html){
    state = state(c);
  }
  state = state(EOF);
}