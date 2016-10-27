var mySwiper=new Swiper(".swiper-container",{
    direction:'horizontal',
    /*loop:true,*/
    pagination : '.swiper-pagination',
    paginationType : 'progress',
    onSlideChangeEnd:function (swiper){
        var slides=swiper.slides;/*所有滑块*/
        var curIndex=swiper.activeIndex;/*当前的活动滑块索引*/
        [].forEach.call(slides,function(item,index){
            item.id="";/*所有滑块的id名去掉*/
            if(index==curIndex){
                switch (index){
                    case 0:
                        item.id="page"+(curIndex+1);
                        break;
                    default :
                        item.id="page"+(curIndex+1);
                }
            }
        })
    },
    onInit:function(swiper){
        var slides=swiper.slides;
         slides[0].id="page1";
    }

});

var beyond=document.querySelector("#beyond");
 var music=document.querySelector(".music");
 window.setTimeout(function(){
 /*beyond.play();//音频会边放边缓存*/
 beyond.addEventListener("canplay",function(){
 music.className="music musicMove";
 music.style.opacity=1;
 });

 },1000);
 music.addEventListener('click',function(){
 if(beyond.paused){
 beyond.play();
 music.className="music musicMove";
 }else{
 beyond.pause();
 music.className="music";
 }
 })