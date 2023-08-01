$(document).ready(function(){
    $("#downarrow").click(function(){
        $("#other").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#searchbtn").click(function(){
        $("#search").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#menu").click(function(){
        $("#nav").slideToggle("slow");
    });
});

var swiper = new Swiper(".proslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
      1080: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1580: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".heroslider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".productslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
      690: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1080: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1580: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  $(document).ready(function(){
    $("#faqarrow").click(function(){
        $("#para").slideToggle("slow");
    });
});

$(document).ready(function(){
  $("#arrow1").click(function(){
      $("#para1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#arrow2").click(function(){
      $("#para2").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#arrow3").click(function(){
      $("#para3").slideToggle("slow");
  });
});