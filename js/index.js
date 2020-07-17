// JavaScript Document
jQuery(function () {
    //if(typeof(Worker) == "undefined"){window.location = "noHtml5.html";}
    window.scrollTo(0, 0)
    $('.hdBtn').click(function () {
        $(this).toggleClass('active')
        $('.navList').toggleClass('active')
        if ($('.navList').hasClass('active')) {
            $('.navList li').each(function (index) {
                $(this).css('transition-delay', index / 3 + 's')
            })
        } else {
            $('.navList li').each(function (index) {
                $(this).css('transition-delay', 0 + 's')
            })
        }
    })
    var h2 = 150
    var ss = $(document).scrollTop()
    $(window).scroll(function () {
        var s = $(document).scrollTop()
        if (s > h2) {
            if (s > ss) {
                $('.headBg').removeClass('hdFixed')
            } else {
                $('.headBg').addClass('hdFixed')
            }
            ss = s
            $('.headBg').removeClass('noBg')
            $('.caseTip').show()
        } else {
            $('.headBg').addClass('noBg')
            $('.caseTip').hide()
        }
    })
    //imgBg
    $('.imgBg').each(function (index, element) {
        $('.imgBg')
            .eq(index)
            .css(
                'background-image',
                'url(' + $('.imgBg').eq(index).find('img').attr('src') + ')'
            )
    })
    $('.banner .swiper-slide').each(function (index) {
        $(this).addClass('ban' + (index + 1))
    })
    var banner = new Swiper('.banner .swiper-container', {
        //loop:true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        speed: 1500,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        effect: 'fade',
        prevButton: '.banPrev',
        nextButton: '.banNext',
        pagination: '.banner .banPage',
        paginationClickable: true,
        /*onInit: function(swiper){
			swiperAnimateCache(swiper); 
			swiperAnimate(swiper);
		}, 
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper);
		},
		onSlideChangeStart: function(swiper){
			$(".box1P1").removeClass("active")
			swiper.find(".box1P1").addClass("active");
			$(".box1P2").removeClass("active")
			swiper.find(".box1P2").addClass("active");
			setTimeout(function(){swiper.find(".box1P1").addClass("active");},0);
			setTimeout(function(){swiper.find(".box1P2").addClass("active");},800);
		}*/
        onInit: function (swiper) {
            slide = swiper.slides.eq(0)
            setTimeout(function () {
                slide.find('.box1P1').addClass('active')
            }, 0)
            setTimeout(function () {
                slide.find('.box1P2').addClass('active')
            }, 800)
        },
        onSlideChangeStart: function (swiper) {
            for (i = 0; i < swiper.slides.length; i++) {
                slide = swiper.slides.eq(i)
                slide.removeClass('active')
                slide.find('.box1P1').removeClass('active')
                slide.find('.box1P2').removeClass('active')
            }
        },
        onSlideChangeEnd: function (swiper) {
            slide = swiper.slides.eq(swiper.realIndex)
            slide.addClass('active')
            setTimeout(function () {
                slide.find('.box1P1').addClass('active')
            }, 0)
            setTimeout(function () {
                slide.find('.box1P2').addClass('active')
            }, 800)
        },
    })
    var GetRandomNum = function (Min, Max) {
        var Range = Max - Min
        var Rand = Math.random()
        return Min + Math.round(Rand * Range)
    }
    function settit(e) {
        //$(e).addClass("showTit");
        var text = $(e).text()
        text = text.replace(/ /g, '^')
        var arr = text.split('')
        var html = ''
        for (var i = 0; i < arr.length; i++) {
            html +=
                "<i style='transition-delay:0." +
                GetRandomNum(1, 6) +
                's;-webkit-transition-delay:0.' +
                GetRandomNum(1, 6) +
                "s'>" +
                arr[i] +
                '</i>'
            //html+="<i style='animation-delay:"+i*0.1+"s;-webkit-animation-delay:"+i*0.1+"s'>"+arr[i]+"</i>";
        }
        html = html.replace(/\^/g, '&nbsp;')
        html = html.replace('> <', '>&nbsp;<')
        html = '<span>' + html + '<b></b><b></b></span>'
        $(e).html(html)
    }
    $('.box1P1').each(function (index, element) {
        settit($(this))
    })
    $('.box1P2').each(function (index, element) {
        settit($(this))
    })

    $('.box2List li').each(function (index, element) {
        $(this).addClass('box2Li' + (index + 1))
    })
    //$(".box3List li").each(function(index){$(this).attr("data-animated-delay-time",Math.random() + 0.4 +"s");});
    $('.shareBtn').click(function () {
        $(this).toggleClass('active')
        $('.shareCon').toggleClass('active')
    })

    $('.oneB3Rig li').each(function (index) {
        $(this).attr('data-wow-delay', Math.random() + 's')
    })

    var team = new Swiper('.team .swiper-container', {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        spaceBetween: 40,
        slidesPerView: 4,
        pagination: '.teamPage',
        paginationClickable: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            1600: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            460: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
        },
    })

    //+parseInt($(".hmBox1 li.active").css("margin-top"))
    $('.banArrow').click(function () {
        $('html,body').animate(
            { scrollTop: $('.hmBox1').offset().top - $('.navRig').height() },
            'slow'
        )
    })
    //top
    $('.Top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000)
        return false
    })

    //box3
    //news
    $('.newsImg').each(function (index, element) {
        if ($(this).find('img').attr('src') == '') {
            $(this).parent().hide()
        }
    })
    //Lay
    $('.onWxBtn').click(function () {
        $(this).toggleClass('on')
    })
    $('.onLine').hover(
        function () {
            return false
        },
        function () {
            $('.onWxBtn').removeClass('on')
        }
    )

    $('.openLay').click(function () {
        $('.LayBox').addClass('active')
    })
    $('.LayClose').click(function () {
        $('.LayBox').removeClass('active')
    })

    function equip() {
        $('nav.navbar.bootsnav.no-full .navbar-collapse').css(
            'max-height',
            $(window).height() - $('.navRig').height() + 2
        )
        var sUserAgent = navigator.userAgent.toLowerCase()
        if (
            sUserAgent.match(
                /(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i
            )
        ) {
            $('.myVideo').addClass('mob')
            $('.myVideo').remove()
            $('.boxBg2').addClass('mob')
            $('.boxBg4').addClass('mob')
        } else {
            $('.myVideo').removeClass('mob')
            $('.boxBg2').removeClass('mob')
            $('.boxBg4').removeClass('mob')
        }
    }
    equip()
    $(window).resize(function () {
        equip()
    })
})
