$(function() {
    /*首页轮播图*/
    $(".owl-banner .owl-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        thumbs: false,
        autoPlay: true,
        autoHeight: true,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true
    });
    /*首页新闻发布*/
    $(".owl-banner2 .owl-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        thumbs: false,
        autoPlay: true,
        autoHeight: true,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true
    });
    /*首页健康团队*/
    $(".owl-team .owl-carousel").owlCarousel({
        items: 1,
        autoPlay: true,
        lazyLoad: true,
        stopOnHover: true,
        thumbs: false,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true
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
        effect: "fadeIn",
        threshold: 200,
    });
    /*首页健康育儿交互*/
    $(".yuer-ii-block").hover(function() {
        $(this).addClass("active");
    },function() {
        $(this).removeClass("active");
    });
    /*杏璞育儿交互*/
    $(".yuer-item-block2").hover(function() {
        $(this).addClass("active");
    },function() {
        $(this).removeClass("active");
    });
    $(".yuer-item-block3").hover(function() {
        $(this).addClass("active");
    },function() {
        $(this).removeClass("active");
    });
    $(".yuer-block-icon").hover(function() {
        var index = parseFloat($(this).index()) + 1;
        console.log($(this).find("img.lazy").attr("src"));
        $(this).find("img").attr("src", "/template/default/picture/yuer-btn" + index + "-active.png");
        $(this).find("span").css("color", "#036361");
    },function() {
        var index = parseFloat($(this).index()) + 1;
        $(this).find("img.lazy").attr("src", "/template/default/picture/yuer-btn" + index + ".png");
        $(this).find("span").css("color", "#666666");
    });
    /*健康团队交互*/
    $(".team-item-block").hover(function() {
        $(this).addClass("active");
    },
    function() {
        $(this).removeClass("active");
    });
    /*杏璞产品交互*/
    $(".product-item-block").hover(function() {
        $(this).addClass("active");
    },
    function() {
        $(this).removeClass("active");
    });
    /*人才招聘tab*/
    $(".jobs-tabpage-all .jobs-all-title").on("click",function() {
        if ($(this).siblings("div").hasClass("jobs-active")) {
            $(this).children("span").removeClass("arrow-up");
            $(this).siblings("div.jobs-all-duty").removeClass("jobs-active");
        } else {
            $(this).children("span").addClass("arrow-up");
            $(this).siblings("div.jobs-all-duty").addClass("jobs-active");
            $(this).parent().siblings(".jobs-tabpage-all").children(".jobs-all-title").children("span").removeClass("arrow-up");
            $(this).parent().siblings(".jobs-tabpage-all").children(".jobs-all-duty").removeClass("jobs-active");
        }
        if (!jobsActive().length) {
            $(".container .mt-tabpage-count").height("35%");
            $(".container .mt-tabpage-count").css("minHeight", "450px");
        } else {
            $(".container .mt-tabpage-count").height("35%");
            $(".container .mt-tabpage-count").css("minHeight", "930px");
        }
    });
    /*人才招聘板块高度响应式适配<480、768、992、1200*/
    $domHeight = $(".container .mt-tabpage-count").height();
    $(".mt-tabpage-title .mt-tabpage-item").on("click",function() {
        $clientWidth = $(document).width(); //获取屏幕宽度
        console.log("屏幕宽度" + $clientWidth + "dom高度" + $domHeight);
        if ($(this).hasClass("minHeight")) {
            $(".container .mt-tabpage-count").height($domHeight);
            if (!jobsActive().length) {
                $(".container .mt-tabpage-count").height("35%");
                $(".container .mt-tabpage-count").css("minHeight", "450px");
            } else {
                $(".container .mt-tabpage-count").height("35%");
                $(".container .mt-tabpage-count").css("minHeight", "930px");
            }
        } else {
            if ($clientWidth < 480) {
                $(".container .mt-tabpage-count").height("35%");
                $(".container .mt-tabpage-count").css("minHeight", "450px");
            }
            if ($clientWidth < 768) {
                $(".container .mt-tabpage-count").height("40%");
                $(".container .mt-tabpage-count").css("minHeight", "450px");
            }
            if ($clientWidth < 992) {
                $(".container .mt-tabpage-count").height("45%");
                $(".container .mt-tabpage-count").css("minHeight", "450px");
            }
            if ($clientWidth < 1200) {
                $(".container .mt-tabpage-count").height("55%");
                $(".container .mt-tabpage-count").css("minHeight", "450px");
            }
            if ($clientWidth > 1200) {
                $(".container .mt-tabpage-count").height("65%");
                $(".container .mt-tabpage-count").css("minHeight", "450px");
            }
        }
    }); 
    function jobsActive() {
        var n1 = [];
        $(".jobs-tabpage-all").each(function(item, val) {
            var n = $(val).find(".jobs-all-duty").hasClass("jobs-active") === true ? n1.push("1") : false;
        }); 
        return n1;
    }
    /*点赞*/
    try{
        if(Like_status == 1){
           $(".zan-text").empty().append("已点赞");
           $(".zan").addClass("active");
        }else{
           if(navigator.userAgent.toLowerCase().indexOf("baiduboxapp") > 0) {
              $(".zan").attr("href",Like_url);
           }else{
              $(".zan").on("click",function(e){
                    $.ajax({
                        url: Like_url,
                        data: {
                            "likes": "likes"
                        },
                        success: function(data) {
                            $("#likes-num").load(location.href + " #likes-num");
                            if(data.state){}else{
                                $(".zan-text").empty().append("已点赞");
                                $(".zan").addClass("active");
                            }
                        },
                        error: function(xhr, status, error) {
                            alert('数据异常！');
                        }
                    });
               });
           }
        }
    }catch(e){ Like_status = 0; }
    /*产品内页评论*/
    jQuery(".article-avator-open > span,.article-avator-open > .article-float-right").on("click",function(){
        if(jQuery(".article-bd-form").is(":visible")){
             $(".article-bd-form").slideUp(function(){
                  $(".article-float-right").delay("slow").hide();
                  $(".article-avator-open > span").text("说点什么");
             });
        }else{ 
             $(".article-bd-form").slideDown(function(){
                 $(".article-float-right").delay("slow").show();
                 $(".article-avator-open > span").text("发表评论");
                 $("textarea.comment-box").focus();
             });
        }
    });
    /*评论数量*/
    if($(".message-list-content").length > 0){
         $(".article-mute-uk span").html($(".message-list-content").length);
    }else{
         $(".article-mute-uk span").html($(".message-list-content").length);
         $(".article-message-list").css({"border":"0"});
    }
    /*评论提交*/
    $("#comment-submit").on("click",function(){
          var url='{pboot:msgaction}',
              obj = $(".article-bd-form"),
              comment=obj.find("#comment").val(),
              qq=obj.find("#qq").val(),
              nkname=obj.find("#nkname").val(),
              email=obj.find("#email").val(),
              atid=obj.find("#atid").val(),
              atit=obj.find("#atit").val(),
              matn=obj.find("#matn").val();
              nkname == "" ? nkname = "匿名" : nkname;
              
          $.ajax({
              type: 'POST',
              url: url,
              dataType: 'json',
              data: {
                comment:comment,
                qq:qq,
                atid:atid,
                atit:atit,
                matn:matn,
                nkname:nkname,
                email:email
              },
              success: function (response, status) {
                console.log(response);
                if(response.code){
                   alert("评论成功！");
                   $("#ask-test")[0].reset(); 
                }else{ 
                   if(response.tourl!=""){
                     location.href = response.tourl; 
                   }
                   //$('.codeimg').click();
                }
              },
              error:function(xhr,status,error){
                alert('返回数据异常！');
              }
          });
          return false;
    });
    /*返回顶部*/
    if ($("meta[name=toTop]").attr("content") == "true") {
        $("<div id='toTop'><img src='/template/default/picture/top.png'></div>").appendTo('body');
        $("#toTop").css({
            width: '40px',
            height: '40px',
            bottom: '10px',
            right: '15px',
            position: 'fixed',
            cursor: 'pointer',
            zIndex: '999999',
        });
        if ($(this).scrollTop() == 0) {
            $("#toTop").hide();
        }
        $(window).scroll(function(event) {
            if ($(this).scrollTop() == 0) {
                $("#toTop").hide();
            }
            if ($(this).scrollTop() != 0) {
                $("#toTop").show();
            }
        });
        $("#toTop").click(function(event) {
            $("html,body").animate({
                scrollTop: "0px"
            },
            666)
        });
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
                        callback: function(value, validator) {
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
                        message: '电话不能为空'
                    },
                    regexp: {
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
    $("#offer-sub").on("click",function() {
        bootstrapValidator.validate();
        if (bootstrapValidator.isValid()) {
            $.ajax({
                type: "POST",
                url: "/form/2/",
                dataType: 'json',
                data: {
                    username: $("input[name='username']").val(),
                    telphone: $("input[name='telphone']").val(),
                    message: $(".message-box").val()
                },
                success: function(response, status) {
                    if (response.code) {
                        alert("数据提交成功!");
                        window.location.reload();
                    }
                },
                error: function(xhr, status, error) {
                    alert('数据提交异常！');
                }
            });
        }
    });
    function isCardNo(card) {
        var reg = /^[\u4E00-\u9FA5]{2,4}$/;
        if (reg.test(card) === false) {
            return false
        } else {
            return true
        }
    }
});