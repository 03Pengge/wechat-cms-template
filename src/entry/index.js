import "./index.less";

window.onload = () => {
  const dom = document.querySelector;
  console.log(dom);
  document.querySelector(".comp-draggable").ondragstart = function (e) {
    e.dataTransfer.setData("Text", e.target.id);
    console.log(e);
  };
  document.querySelector(".dai-preview-content").ondragover = (e) => {
    e.preventDefault();
  };

  document.querySelector(".dai-preview-content").ondrop = function (e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    const dragDom = document.getElementById(id);
    const node = dragDom.cloneNode(true);
    const timeStamp = new Date().getTime();
    node.setAttribute("id", timeStamp);
    document.querySelector(".dai-preview-content").appendChild(node);
  };
};
// https://blog.csdn.net/weixin_37722222/article/details/81530629
