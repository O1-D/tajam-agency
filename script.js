'use strict'

// Scroll 
$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 3000);
return false;
});
})


// Header Script
// vars

var header = document.getElementById("header-main"),
    headerDots = Array.prototype.slice.call(document.getElementById("dots").children),
    headerContent = Array.prototype.slice.call(document.getElementById("header-content").children),
    headerSpeed = 4500,
    crntSlide = 0,
    crntActive = 0,
    headerTimer
    ;

//Script
    window.addEventListener('load', function () {
        function playSlide(slide) {
            for (var d = 0; d < headerDots.length; d++) {
                headerContent[d].classList.remove("active");
                headerContent[d].classList.remove("inactive");
                headerContent[d].classList.remove("active");
                headerDots[d].classList.remove("active");
                headerDots[d].classList.remove("inactive");
                headerDots[d].classList.remove("active");
            }
            if (slide < 0) {
                slide = crntSlide = headerContent.length - 1;
            }
            if (slide > headerContent.length - 1) {
                slide = crntSlide = 0;
            }
            if (crntActive != crntSlide) {
                headerContent[crntActive].classList.add("inactive");
                // headerDots[crntActive].classList.add("inactive");
            }
            headerContent[slide].classList.add("active");
            headerDots[slide].classList.add("active");


            crntActive = crntSlide;


            clearTimeout(headerTimer);
        
    
            headerTimer = setTimeout(function () {
                playSlide(crntSlide += 1);
            }, headerSpeed)
        }
        for (var f = 0; f < headerDots.length; f++) {
            headerDots[f].addEventListener("click", function () {
                playSlide(crntSlide = headerDots.indexOf(this));
            })
        }
        playSlide(crntSlide);

    });

            

    // Video
    // vars
    var overlay = document.getElementById('video_container');
    var vid = document.getElementById('video');
    var btn = document.getElementById('play');


    overlay.addEventListener('click', function () {
        if (video.paused) {  // если видео остановлено, запускаем
            video.play();
            overlay.className = "o";
        } else if (video.play){
            video.pause();
            overlay.className = "a";
        }
    }, false);
    // Hide button - ховаємо кнопку
    function myFunction() {
        if (btn.style.display === 'none') {
            btn.style.display = 'block';
        }
        else {
            btn.style.display = 'none';
        }
    }



    //Works load
    // vars 
    var block = document.getElementById('works__part-two');
    var more = document.getElementById('load-more');
    var text = document.getElementById('works-end');

    function load() {
        if (block.style.display === 'none') {
            block.style.display = 'grid';
        }
        else {
            block.style.display = 'grid';
            text.style.display = 'inline-block';
            more.style.display = 'none';
        }    
    }



// Feedback
// Vars

var feedback = document.getElementById("feedback__container"),
    feedbackDots = Array.prototype.slice.call(document.getElementById("feedback-dots").children),
    feedbackContent = Array.prototype.slice.call(document.getElementById("feedback__content").children),
    feedbackleftArrow = document.getElementById("left-arrow"),
    feedbackRightArrow = document.getElementById("right-arrow"),
    feedbackSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    feedbackTimer
    ;
window.addEventListener('load', function () {
    //Script
    function playSlide(slide) {
        for (var k = 0; k < feedbackDots.length; k++) {
            feedbackContent[k].classList.remove("active");
            feedbackContent[k].classList.remove("inactive");
            feedbackContent[k].classList.remove("active");
            feedbackDots[k].classList.remove("active");
            feedbackDots[k].classList.remove("inactive");
            feedbackDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = feedbackContent.length - 1;
            slide = currentSlide = feedbackDots.length - 1;
        }
       
        if (slide > feedbackContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            feedbackContent[currentActive].classList.add("inactive");
         
        }
        feedbackContent[slide].classList.add("active");
        feedbackDots[slide].classList.add("active");


        currentActive = currentSlide;


        clearTimeout(feedbackTimer);
      
   
        feedbackTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, feedbackSpeed)
    }

    feedbackleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    feedbackRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })
    
    for (var l = 0; l < feedbackDots.length; l++) {
        feedbackDots[l].addEventListener("click", function () {
            playSlide(currentSlide = feedbackDots.indexOf(this));
        })
    }
    playSlide(currentSlide);
    
});
// window.onload = function () {
        
 
// Form 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else
                if (input.value === '') {
                    formAddError(input);
            }

        }
    }
        function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('error');
          }
         function formRemoveError(input) {
            input.parentElement.classList.add('_error');
             input.classList.add('error');
          }
   
        //Valid email
    function emailTest(input) {
        return !/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});