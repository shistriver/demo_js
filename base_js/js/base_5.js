/**
 * Created by shi on 2016/4/15.
 */
window.onload = function(){
    var arrText = ['图片1','图片2','图片3','图片4'];
    var arrImg = ['img/detail_1.jpg','img/detail_2.jpg','img/detail_4.jpg','img/detail_5.jpg'];
    var list = document.getElementById('list');
    var oH = list.getElementsByTagName('h2')[0];
    var oP = list.getElementsByTagName('p')[0];
    var oImg = list.getElementsByTagName('img')[0];
    var oL = document.getElementsByTagName('ol')[0];
    var aLi = oL.getElementsByTagName('li');

    //初始化
    var num = 0;
    var oldLi = null; //前一个
    oH.innerHTML = 1 + num + '/' + arrImg.length;
    oP.innerHTML = arrText[num];
    oImg.src = arrImg[num];

    for(var i=0; i<arrImg.length; i++) {
        oL.innerHTML += '<li>'+(i+1)+'</li>';
    }
    aLi[num].className = 'active';
    oldLi = aLi[num];

    //点击事件
    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onclick = function(){
            oImg.src = arrImg[this.index];
            oP.innerHTML = arrText[this.index];
            oH.innerHTML = 1 + this.index + '/' + arrImg.length;
            //添加当前颜色
            //思路1：全部清空，当前添加
            /*for(var i=0; i<aLi.length; i++){
             aLi[i].className = '';
             }
             this.className = 'active';*/

            //思路2：清空前一个，当前添加
            oldLi.className = '';
            oldLi = this;
            this.className = 'active';
        }
    }
}