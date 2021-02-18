let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我是任艺，
* 现在我要把背景变成灰色，
*/
body{
    background-color: #ddd;
}
/* 画一个八卦
* 先画一个圆
*/
#div1{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #fff;
}
/* 然后给它变成一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
#div1::before{
    border-radius: 50%;
    background: #000;
}
#div1::after{
    border-radius: 50%;
    background: #fff;
}
/* 再加上两个神秘的小球
*/
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/* 看！画好了
*/
`;

let n = 0;
let string2 = "";

// html.innerHTML = string.substring(0, n) //连续出现

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};

step();
