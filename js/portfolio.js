$(function(){
	// console.log('123',$("#handleClick>li"));
	$("#handleClick>li:even").click(function(){
		//console.log($(this));
		$("#main-img>div>p:odd").css({"background-color":"#fff","opacity":"0.9"});
		$("#main-img>div>p:even").css({"background-color":"#fff","opacity":"0"});
	});
	$("#handleClick>li:odd").click(function(){
		$("#main-img>div>p:even").css({"background-color":"#fff","opacity":"0.9"});
		$("#main-img>div>p:odd").css({"background-color":"#fff","opacity":"0"});
	});
	$("#handleClick>li:eq(0)").click(function(){
		$("#main-img>div>p").css({"background-color":"#fff","opacity":"0.9"});
	});
});
