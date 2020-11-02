var button = $('.center');
var buatnavbar=$(".navigasi").offset().top;
var buatberanda=$(".container").offset().top;
var slideIndex = 0;




$(document).ready(function(){
TweenMax.to('.loading',2,{display:"none",opacity:0,delay:1,ease:Back.easeIn},2);
TweenMax.to('.besar',2,{display:"block",delay:3,ease:Back.easeIn},2);

  showSlides();

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("kedalam");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
  }




  button.click(function(){
    TweenMax.to(".containerabout",2);
  });

    setTimeout(function(){
          $('.fly-in-text').removeClass('hidden');
    },500);

    $('.handle').on('click', function(){
          $('nav ul').toggleClass('showing');

    });

  $(document).scroll(function(){
    if($(this).scrollTop() > buatnavbar){
          TweenMax.to(".navigasi",0,{position:'fixed',top:'0'});
          $(".navigasi").removeClass(".fixed");
          $(".navigasi").addClass(".normal");
    }

    else{
          $(".navigasi").removeClass("fixed");
          TweenMax.to(".navigasi",0,{position:'relative',top:'0'});
          $(".navigasi").addClass("normal");
          TweenMax.to(".navigasi",1,{x:0});
    }


  });


});
