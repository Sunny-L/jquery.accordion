## jquery手风琴效果插件
## 用法

1、加载插件

    <script src="src/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="src/jquery.accordion.js"></script>

2、样式

    *{padding:0;}
    .clearfix{clear:both;}
    ul{list-style: none;}
    .brand-species{width: 1000px;height: 398px;overflow: hidden;margin:0 auto;}
    .brand-species li{width:166.6px;height:398px;float:left;}

3、启动

    $(function(){
        $('.brand-species').accordion({
            currentWidth:'874',
            otherWidth:'25',
            itemDefautWidth:'166'
        })
    })
## 参数
* currentWidth 874 hover时当前元素元素宽度
* otherWidth 25 hover时其它元素宽度
* itemDefautWidth 166 常态时元素默认宽度
* speed  500 组件收缩速度
