$(function() {
    $("#container-footer").load("container-footer.html");
    $("#footer").load("footer.html");
    $("#nav").load("header.html");
    // 上方图片轮播
    var $imgList = $("#container div.slider img");
    var $liList = $("#container div.slider li");
    var index = 0;
    var timer = setInterval(function() {
        index++;
        index > 4 && (index = 0);
        $imgList.eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $liList.eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
    }, 1500);
    $liList.click(function() {
        var index = parseInt($(this).html()) - 1;
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
// $(document).ready(function(){
//     $("#container-footer").load("container-footer.html");
//     $("#footer").load("footer.html");
//     $("#nav").load("header.html"),function(){
//         //导航条点击切换
//         $("#nav>ul>li").click(function() {
//              var index = $(this).index();
//              $("#nav>ul>li").eq(index).addClass("active").siblings().removeClass("active");
//              console.log($(this));
//         });
//     });
// });


// 其他部分
// 回到顶部
$(window).scroll(function() {
    if (document.body.scrollTop > 500) {
        $("#scrollTop").css("display", "block");
    } else {
        $("#scrollTop").css("display", "none");
    }
});
