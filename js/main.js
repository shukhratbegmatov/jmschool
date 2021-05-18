function myFunction(x) {
  x.classList.toggle("change");
}
  
$( document ).ready(function() {
  $(".buttom-btn").click(function(){
    $(".top-btn").addClass('top-btn-show');
    $(".contact-form-page").addClass('show-profile');
    $(this).addClass('buttom-btn-hide')
  });

  $(".top-btn").click(function(){
    $(".buttom-btn").removeClass('buttom-btn-hide');
    $(".contact-form-page").removeClass('show-profile');
  });
})
let x=0,y=0,z=0;
    let xy=setInterval(function(){
        x+=1;
      if (x<450) {
      child.style.left=x+'px';
      }
      else{
        clearInterval(xy);
      parend.style.display="none";
      chat.style.display="inline";

      }
    },1);


           var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('.customNextBtn').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.customPrevBtn').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })

      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      })

      
       var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 50,
        shadowScale: 1,
      },
      pagination: {
        el: '.swiper-pagination',  
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
