document.onmousemove = function(ev){
    var ball = document.getElementById('ball');
    //鼠标坐标获取模块
    var x = ev.pageY;
    var y = ev.pageX;
    //小球跟随模块
    ball.style.top = x - parseInt(window.getComputedStyle(ball).width)/2 + 'px';
    ball.style.left = y - parseInt(window.getComputedStyle(ball).height)/2 + 'px';
    //坐标显示模块
    var txt = document.getElementById('txt');
    txt.innerHTML ='鼠标坐标：' + x + 'px' + ' ' + y + 'px';
}
