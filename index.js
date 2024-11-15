mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 自由面板1 = new 自由面板("自由面板1","88px");
var 二维码1 = new 二维码("二维码1");
var 自由面板2 = new 自由面板("自由面板2","57px");
var 标签3 = new 标签("标签3",null);
var 标签1 = new 标签("标签1",null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 标签2 = new 标签("标签2",null);
var 编辑框2 = new 编辑框("编辑框2",null,null,null,null,null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 二生成1 = new 二生成("二生成1");



function 按钮1_被单击(){
	二维码1.生成二维码(二生成1.字符生成(编辑框1.取内容() ,编辑框2.取内容(),"12345678901234567890123456789012"),200,"#000000","#FFFFFF");
	标签3.置标题("到期日期： "+编辑框1.取内容()+"  23:59:59");

}


