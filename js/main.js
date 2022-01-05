$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "flip",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  
  var menuButton = $(".menu-button");
  menuButton.on('click', function () {
    console.log("Клик по кнопке меню");
    $(".navbar__bottom")
      .toggleClass("navbar__bottom--visible");
    document
      .querySelector("body")
      .classList.toggle(".lock");
  });
  
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    // console.log($(this).attr("data-href"));
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  function ESCclose(event) {
    if (event.keyCode == 27) 
      window.close();
  }
  // $(document).on("keydown"), function(event) {
  //   if (event.keyCode == 27) {
  //     window.close();

  // Обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlenght: "Your must be at least 2 letters"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Your phone is required",
        },
      },
    });
  });
  // $(".input").each(function() {
  //   $('#phone').mask('+7(999) 999-99-99');
  // });
  $('.phone').mask('+7 (999) 999-99-99', {
    'translation': { 9: {pattern: /[0-9]/}}});
});
