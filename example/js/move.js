/**
 * Created by shi on 2016/4/23.
 */
//取样式函数
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//运动函数
function doMove(obj,attr,dir,target,endFn){

    dir = target >parseInt(getStyle(obj, attr)) ? dir : -dir;

    clearInterval( obj.timer );

    obj.timer = setInterval(function(){

        var speed = parseInt(getStyle(obj, attr)) + dir;

        if(speed > target && dir > 0 || speed < target && dir < 0){

            speed = target;
        }
        obj.style[attr] = speed + 'px';

        if(speed === target){

            clearInterval(obj.timer);

            endFn && endFn();
        }
    },30);
}

