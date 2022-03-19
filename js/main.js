/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(function () { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/ "./src/js/accordion.js":
        /*!*****************************!*\
          !*** ./src/js/accordion.js ***!
          \*****************************/
        /***/ (function () {

            eval("//****accordion****\r\n$(function() {\r\n\r\n    //BEGIN\r\n    $(\".accordion__title\").on(\"click\", function(e) {\r\n\r\n        e.preventDefault();\r\n        var $this = $(this);\r\n\r\n        if (!$this.hasClass(\"accordion-active\")) {\r\n            $(\".accordion__content\").slideUp(400);\r\n            $(\".accordion__title\").removeClass(\"accordion-active\");\r\n            $('.accordion__arrow').removeClass('accordion__rotate');\r\n        }\r\n\r\n        $this.toggleClass(\"accordion-active\");\r\n        $this.next().slideToggle();\r\n        $('.accordion__arrow',this).toggleClass('accordion__rotate');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/accordion.js?");

            /***/
        }),

        /***/ "./src/js/language.js":
        /*!****************************!*\
          !*** ./src/js/language.js ***!
          \****************************/
        /***/ (function () {

            eval("\n\n//# sourceURL=webpack://gulp_build/./src/js/language.js?");

            /***/
        }),

        /***/ "./src/js/main.js":
        /*!************************!*\
          !*** ./src/js/main.js ***!
          \************************/
        /***/ (function () {

            eval("//****confidence__slider****\r\n$('.confidence__slider-inner').slick({\r\n    dots: false,\r\n    infinite: true,\r\n    autoplay: false,\r\n    prevArrow: $('.arrow-prev'),\r\n    nextArrow: $(\".arrow-next\"),\r\n    speed: 300,\r\n    slidesToShow: 9,\r\n    slidesToScroll: 1,\r\n    responsive: [\r\n        {\r\n            breakpoint: 1300,\r\n            settings: {\r\n                slidesToShow: 6,\r\n                slidesToScroll: 2,\r\n            }\r\n        },\r\n        {\r\n            breakpoint: 992,\r\n            settings: {\r\n                slidesToShow: 5,\r\n                slidesToScroll: 2,\r\n            }\r\n        },\r\n        {\r\n            breakpoint: 768,\r\n            settings: {\r\n                slidesToShow: 5,\r\n                slidesToScroll: 2,\r\n            }\r\n        },\r\n        {\r\n            breakpoint: 550,\r\n            settings: {\r\n                slidesToShow: 4,\r\n                slidesToScroll: 2,\r\n            }\r\n        },\r\n        {\r\n            breakpoint: 400,\r\n            settings: {\r\n                slidesToShow: 3,\r\n                slidesToScroll: 2,\r\n            }\r\n        },\r\n    ]\r\n});\r\n\r\n//****tech__slider****\r\n$('.mp-carousel')\r\n    .on('init', () => {\r\n        $('.slick-slide[data-slick-index=\"-2\"]').addClass('lt2');\r\n        $('.slick-slide[data-slick-index=\"-1\"]').addClass('lt1');\r\n        $('.slick-slide[data-slick-index=\"1\"]').addClass('gt1');\r\n        $('.slick-slide[data-slick-index=\"2\"]').addClass('gt2');\r\n    })\r\n    .slick({\r\n        centerMode: true,\r\n               centerPadding: 0,\r\n        slidesToShow: 3,\r\n        focusOnSelect:true,\r\n        prevArrow: $('.arrow-prev'),\r\n        nextArrow: $(\".arrow-next\"),\r\n        responsive: [\r\n            {\r\n                breakpoint: 769,\r\n                settings: {\r\n                    slidesToShow: 1,\r\n                    slidesToScroll: 1,\r\n                    centerMode: false,\r\n                }\r\n            },\r\n        ],\r\n\r\n    }).on('beforeChange', (event, slick, current, next) => {\r\n    $('.slick-slide.gt2').removeClass('gt2');\r\n    $('.slick-slide.gt1').removeClass('gt1');\r\n    $('.slick-slide.lt1').removeClass('lt1');\r\n    $('.slick-slide.lt2').removeClass('lt2');\r\n\r\n    const lt2 = (current < next && current > 0) ? current - 1 : next - 2;\r\n    const lt1 = (current < next && current > 0) ? current : next - 1;\r\n    const gt1 = (current < next || next === 0) ? next + 1 : current;\r\n    const gt2 = (current < next || next === 0) ? next + 2 : current + 1;\r\n\r\n    $(`.slick-slide[data-slick-index=\"${lt2}\"]`).addClass('lt2');\r\n    $(`.slick-slide[data-slick-index=\"${lt1}\"]`).addClass('lt1');\r\n    $(`.slick-slide[data-slick-index=\"${gt1}\"]`).addClass('gt1');\r\n    $(`.slick-slide[data-slick-index=\"${gt2}\"]`).addClass('gt2');\r\n\r\n    // Clone processing when moving from 5 to 0\r\n    if (current === 5 && next === 0) {\r\n        $(`.slick-slide[data-slick-index=\"${current - 1}\"]`).addClass('lt2');\r\n        $(`.slick-slide[data-slick-index=\"${current}\"]`).addClass('lt1');\r\n        $(`.slick-slide[data-slick-index=\"${current + 2}\"]`).addClass('gt1');\r\n        $(`.slick-slide[data-slick-index=\"${current + 3}\"]`).addClass('gt2');\r\n    }\r\n\r\n    // Clone processing when moving from 0 to 5\r\n    if (current === 0 && next === 5) {\r\n        $(`.slick-slide[data-slick-index=\"${current - 1}\"]`).addClass('gt2');\r\n        $(`.slick-slide[data-slick-index=\"${current}\"]`).addClass('gt1');\r\n        $(`.slick-slide[data-slick-index=\"${current - 2}\"]`).addClass('lt1');\r\n        $(`.slick-slide[data-slick-index=\"${current - 3}\"]`).addClass('lt2');\r\n    }\r\n\r\n});\r\n\r\n\r\n//****tabs*****\r\n$(\".wrapper-tabs .tab\").click(function() {\r\n    $(\".wrapper-tabs .tab\").removeClass(\"active\").eq($(this).index()).addClass(\"active\");\r\n    $(\".tab_item\").hide().eq($(this).index()).fadeIn()\r\n}).eq(0).addClass(\"active\");\r\n\r\n\r\n\r\n//****video****\r\n\r\n$(function () {\r\n    var $videoContainer = $('#video'),\r\n        $videoControls = $('.video-control'),\r\n        $video = $('#myVideo')[0];\r\n\r\n    $videoControls.click(function () {\r\n        if ($video.paused) {\r\n            $video.play();\r\n            $videoContainer.addClass('video-is-playing');\r\n        } else {\r\n            $video.pause();\r\n            $videoContainer.removeClass('video-is-playing');\r\n//возвращаем постер\r\n            $video.load();\r\n        }\r\n    });\r\n});\r\n\r\nlet tags = document.querySelectorAll('.blog-items__tags button');\r\ntags.forEach((item) => {\r\n    item.addEventListener('click', function () {\r\n        item.classList.toggle('switch-color');\r\n    })\r\n});\r\n\r\n\r\n//*****BURGER********\r\nlet body = document.querySelector('body')\r\nlet burgerBtn = document.querySelector('.burger-menu');\r\nlet menuContent = document.querySelector('.dropdown-menu__mobile');\r\n\r\nburgerBtn.addEventListener('click', function () {\r\n    if(menuContent.classList.contains('flex')===false) {\r\n        menuContent.classList.add('flex');\r\n        burgerBtn.classList.add('burger-close');\r\n        menuContent.classList.remove('hide');\r\n        body.classList.add('scroll-hide');\r\n    }\r\n    else {\r\n        menuContent.classList.remove('flex');\r\n        burgerBtn.classList.remove('burger-close');\r\n        menuContent.classList.add('hide');\r\n        body.classList.remove('scroll-hide');\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/main.js?");

            /***/
        }),

        /***/ "./src/js/modal.js":
        /*!*************************!*\
          !*** ./src/js/modal.js ***!
          \*************************/
        /***/ (function () {

            eval("(function() {\r\n  \"use strict\";\r\n  let body = document.querySelector('body')\r\n  const backdrop = document.querySelector('#modal-backdrop');\r\n  document.addEventListener('click', modalHandler);\r\n\r\n\r\n  function modalHandler(evt) {\r\n    const modalBtnOpen = evt.target.closest('.js-modal');\r\n    if (modalBtnOpen) { // open btn click\r\n      const modalSelector = modalBtnOpen.dataset.modal;\r\n      showModal(document.querySelector(modalSelector));\r\n    }\r\n\r\n    const modalBtnClose = evt.target.closest('.modal-close');\r\n    if (modalBtnClose) { // close btn click\r\n      evt.preventDefault();\r\n      hideModal(modalBtnClose.closest('.modal-window'));\r\n    }\r\n\r\n    if (evt.target.matches('#modal-backdrop')) { // backdrop click\r\n      hideModal(document.querySelector('.modal-window.show'));\r\n    }\r\n  }\r\n\r\n  function showModal(modalElem) {\r\n    modalElem.classList.add('show');\r\n    backdrop.classList.remove('hidden');\r\n    body.classList.add('scroll-hide');\r\n  }\r\n\r\n  function hideModal(modalElem) {\r\n    modalElem.classList.remove('show');\r\n    backdrop.classList.add('hidden');\r\n    body.classList.remove('scroll-hide');\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/modal.js?");

            /***/
        }),

        /***/ "./src/js/select.js":
        /*!**************************!*\
          !*** ./src/js/select.js ***!
          \**************************/
        /***/ (function () {

            eval("let navigationSelect = document.querySelector('.select-wrapper');\r\n\r\n\r\nfunction initSelect(elem){\r\n    var selectHolder = elem.querySelector('.holder');\r\n    var selectOptions = elem.querySelectorAll('.dropdownOption li');\r\n    var dropHolder = elem.querySelector('.dropdown');\r\n    var selectedOption = selectOptions[0];\r\n\r\n    selectedOption.classList.add('current');\r\n\r\n    selectHolder.addEventListener('click', function () {\r\n        dropHolder.classList.toggle('active');\r\n    });\r\n\r\n    selectOptions.forEach(function(currentElement) {\r\n        currentElement.addEventListener('click', function(){\r\n            selectedOption.classList.remove('current');\r\n            selectedOption = currentElement;\r\n            currentElement.classList.add('current');\r\n            selectHolder.innerHTML = currentElement.innerHTML;\r\n            dropHolder.classList.toggle('active');\r\n        });\r\n    });\r\n};\r\n\r\ninitSelect(navigationSelect);\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/select.js?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/
    __webpack_modules__["./src/js/accordion.js"]();
    /******/
    __webpack_modules__["./src/js/language.js"]();
    /******/
    __webpack_modules__["./src/js/main.js"]();
    /******/
    __webpack_modules__["./src/js/modal.js"]();
    /******/
    var __webpack_exports__ = {};
    /******/
    __webpack_modules__["./src/js/select.js"]();
    /******/
    /******/
})()
;


$(document).ready(function () {
    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "close"
    ],
    loop: false,
    protect: false
});
$('[data-fancybox="gallery-2"]:not(.slick-cloned)').fancybox({
    buttons: [
        "close",
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
    ],
    loop: true,
    protect: true,

});

// DOWNLOAD MORE
let btnLoaded = document.querySelectorAll('.btn__download');


btnLoaded.forEach((item) => {
    item.addEventListener('click', () => {
        let parent = item.closest('.block-list__items');
        let hidden = parent.querySelectorAll('.hidden');
        hidden.forEach((el) => {
            el.classList.remove('hidden');
            item.style.display = 'none';
        })
    })
})


let homePagePathname = '/VR_soft/index.html';

$('a.scroll').click(function () {
    if (location.pathname !== homePagePathname) {
        sessionStorage.setItem('scrollToProducts', 'true');
        location.href = homePagePathname;
    } else {
        scrollToAnimate('#product-section');
    }
});

if (JSON.parse(sessionStorage.getItem('scrollToProducts'))) {
    scrollToAnimate('#product-section');
    sessionStorage.setItem('scrollToProducts', 'false');
}

function scrollToAnimate(selector, time = 1000) {
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, time);
}


$('.slick').slick({
    dots: false,
    infinite: true,
    touchThreshold: 100,
    speed: 300,
    swipe: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: $('.arrow-right'),
    prevArrow: $('.arrow-left'),
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

$(document).ready(function () {

    var $sidebarArrow = $('.sidebar-menu-arrow');
    $sidebarArrow.click(function () {
        $(this).next().slideToggle(300);
    });

});


let body = document.querySelector('body')
let butgerMenu = document.querySelector('.burger-menu')
let productu = document.querySelector('.product__el');
let dropwDownMenu = document.querySelector('.dropdown-menu__mobile');

productu.addEventListener('click', () => {
    console.log(123)
    dropwDownMenu.classList.add('hide');
    dropwDownMenu.classList.remove('flex');
    body.classList.remove('scroll-hide')
    butgerMenu.classList.remove('burger-close')
})
