var tables = ['table1','table2','table3','table4']

for(var i=0;i<tables.length;i++){

    sets = '<div class="heading">今日推荐</div>\
        <div class="more"><img src="images/more.png" /></div>'

    for(var items=1;items<=8;items++){
        sets+='<div class="item A'+items+'">这里是图</div>\
        <div class="title B'+items+'">这里是标题</div>\
        <div class="commit C'+items+'">这里是作者</div>\
        <div class="star D'+items+'"><button type="button">收藏★</button></div>'
    }

    document.getElementById(tables[i]).innerHTML = sets;

}

