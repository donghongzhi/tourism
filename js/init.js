$(function(){
	$("#nav").load("header.html");
	$("#container-footer").load("container-footer.html");
	$("#footer").load("footer.html");

	var $imgList=$("#container div.slider img");
	var $liList=$("#container div.slider li");
	var index=0;
	var timer=setInterval(function(){
		index++;
		index>4&&(index=0);
		$imgList.eq(index)
			.addClass("active")
			.siblings()
			.removeClass("active");
		$liList.eq(index)
			.addClass("active")
			.siblings()
			.removeClass("active");
	},1500);
	$liList.click(function(){
		var index=parseInt($(this).html())-1;
		$liList.eq(index)
			.addClass("active")
			.siblings()
			.removeClass("active");
		$imgList.eq(index)
			.addClass("active")
			.siblings()
			.removeClass("active");
	});
});