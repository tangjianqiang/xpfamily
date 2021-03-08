$(function(){
	/*首页轮播图*/
	$(".owl-banner .owl-carousel").owlCarousel({
        items:1,
        lazyLoad:true,
        thumbs:false,
        autoPlay:true,
        autoHeight: true,
        pagination:true, 
        paginationSpeed:400,
        singleItem:true,
        stopOnHover:true,
        addClassActive:true
        /*afterInit:function(e,i){
        },
        afterMove:function(e,i){
             console.log();
             let $imgsrc = $(e).find(".owl-item.active").find("img").attr("src");
             if($(document).width() < 768){
                 if($imgsrc.indexOf("wap") === -1){
                     let $spImgSrc =  $imgsrc.substring($imgsrc.lastIndexOf("/") + 1);
                     let $wapImgSrc = "wap-" + $spImgSrc;
                     $(e).find(".owl-item.active").find("img").attr("src","/static/upload/image/banner/" + $wapImgSrc);
                 }
             }
        }*/
    });
    /*首页新闻发布*/
    $(".owl-banner2 .owl-carousel").owlCarousel({
        items:1,
        lazyLoad:true,
        thumbs:false,
        autoPlay:true,
        autoHeight: true,
        pagination:true, 
        paginationSpeed:400,
        singleItem:true,
        stopOnHover:true
    });
    /*首页健康团队*/
    $(".owl-team .owl-carousel").owlCarousel({
        items:1,
        autoPlay:true,
        lazyLoad:true,
        stopOnHover:true,
        thumbs:false,
        pagination:false, 
        paginationSpeed:400,
        singleItem:true
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    /*图片懒加载*/
    $("img.lazy").lazyload({  
        effect : "fadeIn",
        threshold:200,
    });	
    /*首页健康育儿交互*/
    $(".yuer-ii-block").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    })
    /*杏璞育儿交互*/
    $(".yuer-item-block2").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    })
    $(".yuer-item-block3").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    })
    $(".yuer-block-icon").hover(function(){
        let index = parseFloat($(this).index()) + 1;
        console.log($(this).find("img.lazy").attr("src"));
        $(this).find("img").attr("src","picture/yuer-btn"+index+"-active.png");
        $(this).find("span").css("color","#036361");
    }, function() {
        let index = parseFloat($(this).index()) + 1;
        $(this).find("img.lazy").attr("src","picture/yuer-btn"+index+".png");
        $(this).find("span").css("color","#666666");
    })
    /*健康团队交互*/
    $(".team-item-block").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    })
    /*杏璞产品交互*/
    $(".product-item-block").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    })

    /*if($(document).width() < 768){
         $(".owl-banner .item").each(function(item,val){
            console.log($(this).find("img").data("src"));
             /*let $imgsrc = $(this).find("img").data("src");
             if($(document).width() < 768){
                 let $spImgSrc =  $imgsrc.substring($imgsrc.lastIndexOf("/") + 1);
                 let $wapImgSrc = "wap-" + $spImgSrc;
                 $(this).find("img").attr("src","/static/upload/image/banner/" + $wapImgSrc);
             }
         })             
    }*/
    /*人才招聘tab*/
    $(".jobs-tabpage-all .jobs-all-title").on("click",function(){
        if($(this).siblings("div").hasClass("jobs-active")){
           $(this).children("span").removeClass("arrow-up");
           $(this).siblings("div.jobs-all-duty").removeClass("jobs-active");
        }else{
           $(this).children("span").addClass("arrow-up");
           $(this).siblings("div.jobs-all-duty").addClass("jobs-active");
           $(this).parent().siblings(".jobs-tabpage-all").children(".jobs-all-title").children("span").removeClass("arrow-up"); 
           $(this).parent().siblings(".jobs-tabpage-all").children(".jobs-all-duty").removeClass("jobs-active"); 
        }
        if(!jobsActive().length){
           $(".container .mt-tabpage-count").height("35%");
           $(".container .mt-tabpage-count").css("minHeight","450px");
        }else{
           $(".container .mt-tabpage-count").height("35%");
           $(".container .mt-tabpage-count").css("minHeight","930px"); 
        }
    })
    /*人才招聘板块高度响应式适配<480、768、992、1200*/
    $domHeight = $(".container .mt-tabpage-count").height();
    $(".mt-tabpage-title .mt-tabpage-item").on("click",function(){
        $clientWidth = $(document).width(); //获取屏幕宽度
        console.log("屏幕宽度"+$clientWidth+"dom高度"+$domHeight);
        if($(this).hasClass("minHeight")){
            $(".container .mt-tabpage-count").height($domHeight);
            if(!jobsActive().length){
               $(".container .mt-tabpage-count").height("35%");
               $(".container .mt-tabpage-count").css("minHeight","450px");
            }else{
               $(".container .mt-tabpage-count").height("35%");
               $(".container .mt-tabpage-count").css("minHeight","930px"); 
            }
        }else{
            if($clientWidth<480){
                $(".container .mt-tabpage-count").height("35%");
                $(".container .mt-tabpage-count").css("minHeight","450px");
            }
            if($clientWidth<768){
                $(".container .mt-tabpage-count").height("40%");
                $(".container .mt-tabpage-count").css("minHeight","450px");
            }
            if($clientWidth<992){
                $(".container .mt-tabpage-count").height("45%");
                $(".container .mt-tabpage-count").css("minHeight","450px");
            }
            if($clientWidth<1200){
                $(".container .mt-tabpage-count").height("55%");
                $(".container .mt-tabpage-count").css("minHeight","450px");
            }
            if($clientWidth>1200){
                $(".container .mt-tabpage-count").height("65%");
                $(".container .mt-tabpage-count").css("minHeight","450px");
            }
        }
    })
    function jobsActive(){
        let n1 = [];
        $(".jobs-tabpage-all").each(function(item,val){
           let n = $(val).find(".jobs-all-duty").hasClass("jobs-active") === true ? n1.push("1") : false;
        })
        return n1;
    }
    /*验证*/
    $("#form-test").bootstrapValidator({
　　　　message: 'This value is not valid',
        feedbackIcons: {
　　　　　　　　valid: 'glyphicon glyphicon-ok',
　　　　　　　　invalid: 'glyphicon glyphicon-remove',
　　　　　　　　validating: 'glyphicon glyphicon-refresh'
　　　　},
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    },
                    callback: {
                        message: '姓名格式错误',
                        callback: function (value, validator) {
                            if (!value) {
                                return true
                            } else if (isCardNo(value)) {
                                return true;
                            } else {

                                return false;
                            }
                        }
                    }
                }
            },
            telphone: {
                message: '电话验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    regexp:{
                        regexp: /^1\d{10}$/,
                        message: '手机号格式错误'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: '用户留言不能为空' 
                    }
                }
            }
        }
   });
   var bootstrapValidator = $("#form-test").data("bootstrapValidator");
   
   $("#offer-sub").on("click",function(){
         bootstrapValidator.validate();
         if (bootstrapValidator.isValid()) {
            //表单提交的方法、比如ajax提交
            alert('success');
         }
   })
   function isCardNo(card) {
        let reg = /^[\u4E00-\u9FA5]{2,4}$/;
        if (reg.test(card) === false) {
            return false
        } else {
            return true
        }
   }
});