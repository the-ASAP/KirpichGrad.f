"use strict";function stopScroll(e){var t=parseInt(document.documentElement.clientWidth),i=parseInt(window.innerWidth),s=i-t;$(e).attr("style","overflow: hidden; padding-right: "+s+"px")}function freeScroll(e){$(e).attr("style","")}function mainMenu(e,t){$(e).on("click",function(){stopScroll("body"),$(t).fadeIn().addClass("visible")}),$(".mainMenu__close").on("click",function(){$(t).removeClass("visible"),setTimeout(function(){$(t).hide()},800)})}function modalOpen(e,t){$(e).on("click",function(){stopScroll("body"),$(t).fadeIn().css({display:"flex"})})}function modalClose(e,t){$(e).on("click",function(){$(this).closest(t).fadeOut(),$("body").attr("style",""),freeScroll("body")})}function escClosing(e){$(document).keydown(function(t){return 27===t.keyCode?($(e).fadeOut(),$("body").attr("style",""),!1):void 0})}function owls(){var e=$(".showroom__slider");e.owlCarousel({nav:!0,navContainer:".showroom__sliderNav",navText:['<svg class="showroom__sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>','<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],dots:!1,items:1,touchDrag:!1,mouseDrag:!1,animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:1e3,lazyLoad:!0,margin:10}).on("change.owl.carousel",function(e){var t=$(".showroom__slider").find(".owl-item").eq(e.property.value).find("img");$(".showroom__sliderInfo").hide().fadeIn(500),$(".showroom__sliderOption-name").text(t.attr("data-title")),$(".showroom__sliderOption-size").text(t.attr("data-size")),$(".showroom__sliderOption-price").text(t.attr("data-price"))})}function detailOwls(){$(".detail__slider").owlCarousel({items:1,margin:10,dots:!1,lazyLoad:!0,thumbs:!0,thumbImage:!0,thumbsPrerendered:!0,thumbContainerClass:"owl-thumbs",thumbItemClass:"owl-thumbs-item",smartSpeed:400})}function itemsCounter(e,t){function i(e,t){$(e).text(Number($(this).text())*Number(t))}var s,e=$(e),n=e.find("input"),a=e.find("button"),o=1;""==n.val()&&n.attr("value",1).val(1),$(a).eq(0).addClass("subtract"),$(a).eq(1).addClass("addition"),$(".subtract").prop("disabled",!0),$(a).on("click",function(){s=Number($(this).siblings("input").attr("value")),o=s,$(this).prop("disabled")||($(this).closest(e).find(a).prop("disabled",!1),$(this).hasClass("addition")?o++:(1>=o-1&&$(this).prop("disabled",!0),o--)),$(this).siblings(n).attr("value",o).val(o),i(t,o)}),$(n).on("mouseenter",function(){$(this).focus()}).on("input",function(e){var s=Number($(this).val());$(this).siblings(a).prop("disabled",!1),(""===s||1>s||0==s)&&$(this).attr("value","").val("").siblings("button").prop("disabled",!0),$(this).attr("value",e.target.value).val(e.target.value),i(t,e.target.value)})}function objectSlider(){$(".object__gallery").on("initialized.owl.carousel changed.owl.carousel",function(e){if(e.namespace){var t=e.relatedTarget,i="0"+(t.relative(t.current())+1),s="0"+t.items().length;$(".object__itemCurrent").html(i),$(".object__itemLength").html(s)}}).owlCarousel({items:1,margin:10,dots:!1,lazyLoad:!0,touchDrag:!1,mouseDrag:!1,animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:1e3,thumbs:!1,navContainer:".object__itemControls",navText:['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>','<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>']})}function hashTabs(e,t){function i(e){$(a).filter("[data-index = "+e+"]").addClass(o),setTimeout(function(){$(".active").addClass("visible");var e=a.filter(".active").height();$(t).css({height:e})},100)}for(var s,n=$(e).children("button"),a=$(t).children(),o="active",l=$(n).length,r=location.hash,d=0;l>d;d++)$(n[d]).attr("data-index",d+1),$(a[d]).attr("data-index",d+1);if(r>""){var c=r.replace("#","");$(n).filter("[data-index = "+c+"]").addClass(o),i(c)}else $(n).eq(0).addClass(o),i(1);$(n).on("click",function(){$(this).hasClass(o)||(s=$(this).attr("data-index"),location.hash=s,$(n).removeClass(o),$(this).addClass(o),$(a).removeClass("active visible"),i(s))})}function youTubeInit(){$(".events__videoBtn").on("click",function(){var e=$(this).attr("data-video");$(this).after('<iframe class="events__videoFrame" src="'.concat(e,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')).remove()})}function tips(e){var e=$(e),t=e.find("button");t.on("click",function(){var e=$(this).siblings(".content");$(this).hasClass("isOpen")?($(this).removeClass("isOpen"),e.slideUp()):($(this).addClass("isOpen"),e.slideDown())})}function showMenu(e,t){var i=$(".aside"),t=$(t),e=t.siblings(e),s=!0;s===!0&&(s=!1,$(document).on("scroll",function(){i.removeClass("open")})),t.on("click",function(){$(this).hasClass("isOpen")?($(this).removeClass("isOpen"),e.fadeOut(200)):($(this).addClass("isOpen"),e.fadeIn(200))}),$(document).on("mousedown",function(i){$(e).parent().is(i.target)||0!==$(e).parent().has(i.target).length||(e.fadeOut(200),t.removeClass(".isOpen"))})}function yandexMap(){$("#map").length>0&&ymaps.ready(function(){var e=new ymaps.Map("map",{center:[51.869051532878736,44.99647525936559],zoom:17,multiTouch:!1,controls:["zoomControl"]},{suppressMapOpenBlock:!0}),t=new ymaps.Placemark([51.86911130776214,44.996507445873775],{hintContent:"Россия, Саратовская область, Аткарск, улица Гагарина, 91"});e.geoObjects.add(t),e.controls.remove("routeEditor"),e.behaviors.disable("scrollZoom")})}function toggleList(e){function t(e,t){$(e).removeClass(s),$(t).height(0)}var e=$(e),i=e.find("button"),s="isOpen";$(i).on("click",function(){var n=$(this).siblings("input"),a=$(this).siblings("div"),o=a.find("div"),l=($(this).height(),o.length),r=o.height();$(this).hasClass(s)?t($(this),a):(t($(i),a),$(this).addClass(s),$(a).height(l*r)),$(o).on("click",function(){n.val($(this).text()),t($(i),a)}),$(document).on("mousedown",function(s){$(e).is(s.target)||0!==$(e).has(s.target).length||t($(i),a)})})}function activeItemOnClick(e){var e=$(e),t=e.find("button");t.on("click",function(){t.removeClass("active"),$(this).addClass("active")})}function animationInit(){$(".animation").css({"animation-name":"slideTo"}).hide().show(0)}function inputTypeNumberCheck(){$("input[data-number]").keydown(function(e){$(this).hasClass("error")&&$(this).removeClass("error"),46==e.keyCode||17==e.keyCode||8==e.keyCode||9==e.keyCode||27==e.keyCode||65==e.keyCode&&e.ctrlKey===!0||e.keyCode>=35&&e.keyCode<=39||(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()})}var filterModal=function(e,t){$(e).on("click",function(){$(this).hasClass("isOpen")?($(this).removeClass("isOpen"),$(t).fadeOut()):($(this).addClass("isOpen"),$(t).fadeIn())}),$(".catalog__otherFilterApply",".catalog__otherFilterCancel").on("click",function(){$(e).removeClass("isOpen"),$(t).fadeOut()})},owlSlider=function(e,t){void 0==t&&(t="");var i=$(e);i.addClass("owl-carousel owl-theme").owlCarousel(Object.assign(t,{nav:!0,navText:['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>','<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],dots:!1,items:1,touchDrag:!1,mouseDrag:!1,animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:1e3,margin:10}))},owlItems=function(e,t){void 0==t&&(t="");var i=$(e);i.addClass("owl-carousel owl-theme").owlCarousel(Object.assign(t,{dots:!1,nav:!0,navText:['<svg class="sliderNavBtn" width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>','<svg class="sliderNavBtn"  width="20" height="20" viewBox="0 0 20 20" fill="none"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd"d="M17.5983 10.5776H0V9.23071H17.413L9.40289 0.95237L10.3244 0L20.0003 9.99988L10.3244 19.9998L9.40289 19.0474L17.5983 10.5776Z"fill="#4F4F4F" /></svg>'],lazyLoad:!0,thumbs:!1,smartSpeed:1e3,responsive:{0:{items:1,margin:10},768:{items:3,margin:40}}}))},owlGallery=function(e,t){void 0==t&&(t="");var i=$(e);i.each(function(e,i){$(i).addClass("owl-carousel owl-theme").owlCarousel(Object.assign(t,{items:1,dots:!0,lazyLoad:!0,nav:!1,margin:10,smartSpeed:1e3}))})},inputSetValue=function(){$("input").each(function(e,t){""==$(t).val()&&$(t).attr("value","")}).on("input",function(){$(this).removeClass("error").attr("value",$(this).val())})};$().ready(function(){inputTypeNumberCheck(),inputSetValue(),mainMenu(".aside__toggle",".mainMenu"),modalClose(".modal__close",".modal"),escClosing(".modal"),owls(),owlSlider(".events__slider",{navContainer:".events__controls"}),owlItems(".offers__slider",{navContainer:".offers__nav"}),owlItems(".offers-set__slider",{navContainer:".offers-set__nav"}),owlGallery(".goods__gallerySlider"),owlGallery(".catalog__itemGallery"),tips(".tips__item"),showMenu(".catalog__other",".catalog__otherBtn"),toggleList(".catalog__select"),activeItemOnClick(".catalog__listHeader"),activeItemOnClick(".goods__nav"),$(".detail").length>""&&(detailOwls(),hashTabs(".detail__contentTabs",".detail__contentWindows"),itemsCounter(".offers-set__counter",".priceResult")),$(".object").length>""&&objectSlider(),$(".contacts-page").length>""&&yandexMap(),$(".category").length>""&&owlGallery(".category__itemGallery"),$(".catalog").length>""&&(filterModal(".catalog__other",".catalog__otherFilter"),filterModal(".catalog__filtersBtn",".catalog__otherFilter")),null==sessionStorage.getItem("loaded")?(animationInit(),$(".preloader").fadeOut(300,function(){$(".preloader").remove()}),sessionStorage.setItem("loaded",!0)):($(".preloader").fadeOut(300,function(){$(".preloader").remove()}),animationInit(),sessionStorage.setItem("loaded",!0))});var sliderNav=function(e){var e=$(e),t=e.addClass("owl-carousel owl-theme").owlCarousel({margin:15,dots:!1,autoWidth:!0,thumbs:!1,smartSpeed:200}).on("click",function(e){var i=$(e.target).parent().index();i>0&&t.trigger("to.owl.carousel",i-1)})},filtersSlideToggle=function(){$(".catalog__otherFilterTitle").on("click",function(){$(this).hasClass("isOpen")?$(this).removeClass("isOpen").siblings(".catalog__otherFilterBox").slideUp(200):$(this).addClass("isOpen").siblings(".catalog__otherFilterBox").slideDown(200).css({display:"flex"})})},hideContentAndToggle=function(){$(".mainMenu__listTitle").on("click",function(e){e.preventDefault(),$(this).hasClass("isOpen")?$(this).removeClass("isOpen").siblings(".mainMenu__listItem").slideUp():$(this).addClass("isOpen").siblings(".mainMenu__listItem").slideDown(200,function(){$(this).css({display:"block"})})}),$(".mainMenu__item").on("click",function(e){e.preventDefault(),$(this).hasClass("isOpen")?$(this).removeClass("isOpen").siblings(".mainMenu__itemSub").slideUp():$(this).addClass("isOpen").siblings(".mainMenu__itemSub").slideDown(200,function(){$(this).css({display:"block"})})})};$().ready(function(){$(window).width()<768&&(sliderNav(".goods__nav"),sliderNav(".detail__contentTabs")),$(window).width()<1200&&(filtersSlideToggle(),hideContentAndToggle())});