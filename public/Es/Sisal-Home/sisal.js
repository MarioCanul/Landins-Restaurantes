// Menu header
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  // end header menu
  //   back to top
  $('#backTotop').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
});
// back to top

  $('.comments-sisal').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.Galery').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
$('.Galery-desktop').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('.Sister-Carrousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

var sliderlight = $(".modal-carrousel").owlCarousel({
    items: 1,
    center: true,
    autoHeight: true,
    autoHeightClass: "owl-height",
    margin: 10,
    loop: true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,
  
        }
    },
    navText: [
      '<span class="material-icons"> arrow_back_ios </span>',
      '<span class="material-icons"> arrow_forward_ios </span>',
    ],
    nav: false,
    items: 1,
    responsiveClass: true,
    singleItem: true,
  });
$(".itemLightBox").on("click", function () {
    let idItemGallery = $(this).data("lightboxid");
    console.log(idItemGallery);
    sliderlight.trigger("to.owl.carousel", [idItemGallery, 100]);
    setTimeout(() => {
      $(".modal-bg").addClass("bg-active");
    }, 300);
  });

  $(".modal-close").on("click", function (e) {
    console.log(e.target.id)
    
     $(".modal-bg").removeClass("bg-active");
    
   });

const linksmobile = document.querySelectorAll(".myLinksNav a");
  for (const link of linksmobile) {
    link.addEventListener("click", clickHandler);
  }
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href=='#ReserveNow') {
      var anchor = document.createElement('a');    
anchor.href = "https://www.opentable.com.mx/r/hacienda-sisal-cancun-reservations-cancun?restref=1057438&lang=es-MX&ot_source=Restaurant%20website";
anchor.target="_blank";
anchor.click();  
    }
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
  const linksdesk = document.querySelectorAll(".myLinks a");
  for (const link of linksdesk) {
    link.addEventListener("click", clickHandler);
  }
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href=='#ReserveNow') {
      var anchor = document.createElement('a');    
anchor.href = "https://www.opentable.com.mx/r/hacienda-sisal-cancun-reservations-cancun?restref=1057438&lang=es-MX&ot_source=Restaurant%20website";
anchor.target="_blank";
anchor.click();  
    }
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }