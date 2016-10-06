window.onload = function() {
    var btns = document.getElementsByClassName("container");
    var divDemo = document.getElementsByClassName("init")[0];
    // 采用事件代理
    btns[0].addEventListener("click", function(e) {
        switch (e.target.className) {
            case "changeWidth":
            	divDemo.className.indexOf("width")
                divDemo.className += divDemo.className.indexOf("width")==-1 ?"  width" : "";//已有样式则不再添加类
                break;
            case "changeHigh":
                divDemo.className += divDemo.className.indexOf("height")==-1 ?"  height" : "";
                break;
            case "changeColor":
                divDemo.className += divDemo.className.indexOf("redColor")==-1 ? " redColor" : "";
                break; 
            case "changeDisplay":
                divDemo.className += divDemo.className.indexOf("hide")==-1 ? " hide" : "";
                break;
            case "reset":
                divDemo.className = "init";
                break;
            default:
                break;
        }
    })
}
