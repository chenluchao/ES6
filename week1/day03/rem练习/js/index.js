var mySwiper = new Swiper('.swiper-container',{
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,//自动轮播
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    }
});
$(".tab").tab1("active")