/**
 * Created by shi on 2016/4/15.
 */
window.onload = function(){
    var arrText = ['ͼƬ1','ͼƬ2','ͼƬ3','ͼƬ4'];
    var arrImg = ['img/detail_1.jpg','img/detail_2.jpg','img/detail_4.jpg','img/detail_5.jpg'];
    var list = document.getElementById('list');
    var oH = list.getElementsByTagName('h2')[0];
    var oP = list.getElementsByTagName('p')[0];
    var oImg = list.getElementsByTagName('img')[0];
    var oL = document.getElementsByTagName('ol')[0];
    var aLi = oL.getElementsByTagName('li');

    //��ʼ��
    var num = 0;
    var oldLi = null; //ǰһ��
    oH.innerHTML = 1 + num + '/' + arrImg.length;
    oP.innerHTML = arrText[num];
    oImg.src = arrImg[num];

    for(var i=0; i<arrImg.length; i++) {
        oL.innerHTML += '<li>'+(i+1)+'</li>';
    }
    aLi[num].className = 'active';
    oldLi = aLi[num];

    //����¼�
    for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onclick = function(){
            oImg.src = arrImg[this.index];
            oP.innerHTML = arrText[this.index];
            oH.innerHTML = 1 + this.index + '/' + arrImg.length;
            //��ӵ�ǰ��ɫ
            //˼·1��ȫ����գ���ǰ���
            /*for(var i=0; i<aLi.length; i++){
             aLi[i].className = '';
             }
             this.className = 'active';*/

            //˼·2�����ǰһ������ǰ���
            oldLi.className = '';
            oldLi = this;
            this.className = 'active';
        }
    }
}