(function ($) {
    "use strict";
  
    // Canvas menu activation
    $(".canvas_open").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvars_overlay").addClass("active");
    });
  
    $(".canvas_close, .off_canvars_overlay").on("click", function () {
        $(".offcanvas_menu_wrapper, .off_canvars_overlay").removeClass("active");
    });
  
    // Off-canvas menu
    var $offcanvasNav = $(".offcanvas_main_menu"),
        $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
        .parent()
        .prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
  
    $offcanvasNavSubMenu.slideUp();
  
    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.siblings("ul").slideUp("slow");
            } else {
                $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
                $this.siblings("ul").slideDown("slow");
            }
        }
  
        if (
            $this.is("a") ||
            $this.is("span") ||
            $this.attr("class").match(/\b(menu-expand)\b/)
        ) {
            $this.parent().toggleClass("menu-open");
        } else if (
            $this.is("li") &&
            $this.attr("class").match(/\b('menu-item-has-children')\b/)
        ) {
            $this.toggleClass("menu-open");
        }
    });
  
    // Search box slidetoggle activation
    $(".search_box > a").on("click", function () {
        $(this).toggleClass("active");
        $(".search_widget").slideToggle("medium");
    });
  
    // Slide toggle activation of mini cart
    $(".mini_cart_wrapper > a").on("click", function () {
        if ($(window).width() < 991) {
            $(".mini_cart").slideToggle("medium");
        }
    });
  
    // Sticky header
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });
  
    function dataBackgroundImage() {
        $("[data-bgimg]").each(function () {
            var bgImgUrl = $(this).data("bgimg");
            $(this).css({
                "background-image": "url(" + bgImgUrl + ")",
            });
        });
    }
  
    $(window).on("load", function () {
        dataBackgroundImage();
    });
  
    // Slider activation
    $(".slider_area").owlCarousel({
        animateOut: "fadeOut",
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 1,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
    });
  
    // Product column of 4 activation
    $(".product_column4").on("changed.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target)
            .find(".owl-item")
            .removeClass("last")
            .eq(event.item.index + event.page.size - 1)
            .addClass("last");
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
    });
  
    // Tooltip activation
    $(".action_links ul li a, .add_to_cart a, .footer_social_link ul li a").tooltip({
        animated: "fade",
        placement: "top",
        container: "body",
    });
  
    // Activation of one column of deal product
    $(".product_column1").on("changed.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target)
            .find(".owl-item")
            .removeClass("last")
            .eq(event.item.index + event.page.size - 1)
            .addClass("last");
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 1,
            },
        },
    });
  
    // Countdown activation
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(
                event.strftime('<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">Hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>')
            );
        });
    });
  
    // Activation of one column of best seller product
    $(".sidebar_product_column1").on("changed.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target)
            .find(".owl-item")
            .removeClass("last")
            .eq(event.item.index + event.page.size - 1)
            .addClass("last");
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
                margin: 30,
            },
            992: {
                items: 1,
            },
        },
    });
  
    // Testimonial activation
    $(".testimonial_sidebar_carousel").owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 1,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
    });
  
    // Activation of one column of best seller product
    $(".product_column3").on("changed.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target)
            .find(".owl-item")
            .removeClass("last")
            .eq(event.item.index + event.page.size - 1)
            .addClass("last");
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            567: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
        },
    });
  
    // Activation of blog section
    $(".blog_column3").owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
  
    // Small product column 1 activation
    $(".small_product_column1").on("changed.owl.carousel initialized.owl.carousel", function (event) {
        $(event.target)
            .find(".owl-item")
            .removeClass("last")
            .eq(event.item.index + event.page.size - 1)
            .addClass("last");
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            568: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 1,
            },
        },
    });
  
    // Activation of small nav active
    $(".product_navactive").owlCarousel({
        autoplay: false,
        loop: true,
        nav: true,
        items: 4,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            250: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 4,
            },
        },
    });
  
    $(".modal").on("shown.bs.modal", function (e) {
        $(".product_navactive").resize();
    });
    $(".product_navactive a").on("click", function (e) {
        e.preventDefault();
  
        var $href = $(this).attr("href");
  
        $(".product_navactive a").removeClass("active");
        $(this).addClass("active");
  
        $(".product-details-large .tab-pane").removeClass("active show");
        $(".product-details-large " + $href).addClass("active show");
    });
  
    $(".select_option").niceSelect();
  })(jQuery);
  
  
  // Define variables and function in the global scope
  const cartIcon = document.getElementById('cart-icon');
  const wishlistIcon = document.getElementById('wishlist-icon');
  const cartQuantityDisplay = document.querySelector('.cart-quantity');
  const wishlistQuantityDisplay = document.querySelector('.wishlist-quantity');
  
  function increaseQuantity(icon, quantityDisplay, attributeName) {
      let currentQuantity = parseInt(icon.getAttribute(attributeName)) || 0;
      currentQuantity++;
      icon.setAttribute(attributeName, currentQuantity);
      quantityDisplay.textContent = currentQuantity;
  }
  
  // DOMContentLoaded event listener for wishlist functionality
  document.addEventListener('DOMContentLoaded', function() {
  
  
  
  
  document.getElementById('add-to-cart-form-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  
  
  
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 2-1->6
  
  document.getElementById('add-to-cart-form-2-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-2-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-2-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-2-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-2-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-2-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 3-1->6
  
  document.getElementById('add-to-cart-form-3-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-3-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-3-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-3-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-3-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-3-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 5-1->6
  
  document.getElementById('add-to-cart-form-4-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-4-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  })
  
  document.getElementById('add-to-cart-form-4-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-4-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-4-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-4-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 5-1->6
  
  document.getElementById('add-to-cart-form-5-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-5-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  })
  
  document.getElementById('add-to-cart-form-5-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-5-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-5-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-5-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 6-1->6
  
  document.getElementById('add-to-cart-form-6-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-6-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  })
  
  document.getElementById('add-to-cart-form-6-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-6-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-6-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-6-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 7-1->6
  
  document.getElementById('add-to-cart-form-7-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-7-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-7-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-7-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-7-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-7-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-7-7').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-7-8').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-7-9').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 8-1->6
  
  document.getElementById('add-to-cart-form-8-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-8-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  })
  
  document.getElementById('add-to-cart-form-8-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-8-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-8-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-8-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  // Add event listener for "Thêm Vào Giỏ Hàng" button in modal section 9-1->6
  
  document.getElementById('add-to-cart-form-9-1').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-9-2').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  })
  
  document.getElementById('add-to-cart-form-9-3').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  document.getElementById('add-to-cart-form-9-4').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-9-5').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  document.getElementById('add-to-cart-form-9-6').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      increaseQuantity(cartIcon, cartQuantityDisplay, 'data-quantity-cart');
  });
  
  });
  
  // Function to add a product to the cart
  function addToCart(productIdInputId, quantityInputId) {
      // Get the product ID and quantity from the inputs
      const productId = document.getElementById(productIdInputId).value;
      const quantity = document.getElementById(quantityInputId).value;
  
      // Call addToCart with the extracted productId and quantity
      addToCart(productId, quantity);
  
      // Prevent the form from submitting
      return false;
  }
  
  // Products Array
  let products = [
    
      {
          id: 2,
          title: "Versace Men Dylan",
          price: 2199000,
          image: "images/products/Men/2-1.png",
      },
      {
          id: 3,
          title: "Giorgio Armani Aqua Digio",
          price: 2759000,
          image: "images/products/Men/3-1.png",
      },
      {
          id: 4,
          title: "Dunhill Men Icon Elite",
          price: 2400000,
          image: "images/products/Men/4-1.png",
      },
      {
          id: 5,
          title: "Paco Rabbane Men Invictus",
          price: 1780000,
          image: "images/products/Men/5-1.png",
      },
      {
          id: 6,
          title: "Corolina Harrera Bad Boy",
          price: 2800000,
          image: "images/products/Men/6-1.png",
      },
      {
          id: 7,
          title: "Paco Rabbane Pure XS For Her   ",
          price: 1950000,
          image: "images/onsale/D1-1.png",
      },
      {
          id: 8,
          title: "Paco Rabanne Olympean",
          price: 2400000,
          image: "images/onsale/D2-1.png",
      },
      {
          id: 9,
          title: "Issey Miyake Women L'Eau",
          price: 1800000,
          image: "images/onsale/D3-1.png",
      },
      {
          id: 10,
          title: "Paco Rabbane Million",
          price: 1800000,
          image: "images/onsale/D4-1.png",
      },
      {
          id: 11,
          title: "lacoste Women",
          price: 3200000,
          image: "images/onsale/D5-1.png",
      },
      {
          id: 12,
          title: "Narciso Rodiguez For him",
          price: 2800000,
          image: "images/onsale/D6-1.png",
      }, {
          id: 13,
          title: "Bvlgari Women Splendid ",
          price: 2180000,
          image: "images/new-product/N1-2.png",
      },
      {
          id: 14,
          title: "Coach Women Foral Blush",
          price: 1950000,
          image: "images/new-product/N2-1.png",
      },
      {
          id: 15,
          title: "Versace Women Eros",
          price: 2000000,
          image: "images/new-product/N3.png",
      },
      {
          id: 16,
          title: "Salvatore Ferragamo Women Signorina",
          price: 1650000,
          image: "images/new-product/N4-1.png",
      },
      {
          id: 17,
          title: "Signoria Misteriosa",
          price: 1000000,
          image: "images/new-product/N5-1.png",
      },
      {
          id: 18,
          title: "Kenzo Women World",
          price: 980000,
          image: "images/new-product/N6-1.png",
      },
      {
          id: 19,
          title: "Boss Men Bottled Infinite EAU ",
          price: 1850000,
          image: "images/Deals/D1-1.png",
      },
      {
          id: 20,
          title: "Ralph Lauren Men Polo Blue Bear",
          price: 33000000,
          image: "images/Deals/D2-1.png",
      },
      {
          id: 21,
          title: "Bvlgari Man In Black Orient",
          price: 7400000,
          image: "images/Deals/D3-1.png",
      },
      {
          id: 22,
          title: "Dolce & Gabbana Women",
          price: 1900000,
          image: "images/best-product/B1-1.png",
      },
      {
          id: 23,
          title: "Jean Paul Gaultier",
          price: 1900000,
          image: "images/best-product/B2-1.png",
      },
      {
          id: 24,
          title: "Corolina Harrera Women 212 VIP",
          price: 2200000,
          image: "images/best-product/B3-1.png",
      },
      {
          id: 25,
          title: "Dior Sauvage Eau De Perfume ",
          price: "2149000",
          image: "images/best-product-vn/1.png",
      },
      {
          id: 26,
          title: "Nautica Voyage ",
          price: 880000,
          image: "images/best-product-vn/3.png",
      },
      {
          id: 27,
          title: "Club De Nuit",
          price: 950000,
          image: "images/best-product-vn/5.png",
      },
      {
          id: 28,
          title: "Kilian Black PhanTom Memento Mori EDP",
          price: 4999999,
          image: "images/best-product-vn/7.png",
      },
      {
          id: 29,
          title: "Tom Ford Oud Wood",
          price: 5690000,
          image: "images/best-product-vn/9.png",
      },
      {
          id: 30,
          title: "Creed Aventus",
          price: 8500000,
          image: "images/best-product-vn/11.png",
      },
      {
          id: 31,
          title: "Vitok And Rolf Spicebomb Extreme EDP",
          price: 1900000,
          image: "images/product-of-the-year/1.png",
      },
      {
          id: 32,
          title: "Yves Saint Laurent Y Eau De Parfume Intense",
          price: 2800000,
          image: "images/product-of-the-year/3.png",
      },
      {
          id: 33,
          title: "Valentino Donna In Roma",
          price: 2150000,
          image: "images/product-of-the-year/5.png",
      },
      {
          id: 34,
          title: "Gucci Bloom EDP",
          price: 2400000,
          image: "images/product-of-the-year/7.png",
      },
      {
          id: 35,
          title: "Ventana",
          price: 780000,
          image: "images/product-of-the-year/9.png",
      },
      {
          id: 36,
          title: "Dior Homme Sport",
          price: 2500000,
          image: "images/product-of-the-year/11.png",
      }, {
          id: 37,
          title: "Christian Dior Sauvage EAU",
          price: 27500000,
          image: "images/niche/1.png",
      },
      {
          id: 38,
          title: "Bleu Chanel Eau De Parfum",
          price: 3300000,
          image: "images/niche/3.png",
      },
      {
          id: 39,
          title: " Dolce & Gabbana Ligh Blue  Forever",
          price: 1900000,
          image: "images/niche/5.png",
      },
      {
          id: 40,
          title: "Le Labo Santal 33",
          price: 5400000,
          image: "images/niche/7.png",
      },
      {
          id: 41,
          title: "Le Labo Another 13",
          price: 4850000,
          image: "images/niche/9.png",
      },
      {
          id: 42,
          title: "Chanel No 5 De Parfume Women",
          price: 3500000,
          image: "images/niche/11.png",
      },
      {
          id: 43,
          title: " Chanel Coco Mademoiselle Intense EDP",
          price: 2150000,
          image: "images/niche/13.png",
      },
      {
          id: 44,
          title: "Elysium Roja Parfum ",
          price: 4700000,
          image: "images/niche/15.png",
      },
      {
          id: 45,
          title: "Bigarade Concentree ",
          price: 5980000,
          image: "images/niche/17.png",
      },
      {
          id: 46,
          title: "Dolce & Gabbana Women The Only",
          price: 2350000,
          image: "images/products/Women/1-1.png",
      },
      {
          id: 47,
          title: "Michael Kors Women Sexy Amber",
          price: 1999000,
          image: "images/products/Women/2-1.png",
      },
      {
          id: 48,
          title: "Bvlgari Spendid Jasmin Noir",
          price: 2000000,
          image: "images/products/Women/3-1.png",
      },
      {
          id: 49,
          title: "Versace Pour Female Dylan Blue ",
          price: 2300000,
          image: "images/products/Women/4-1.png",
      },
      {
          id: 50,
          title: " Carolina Herrera Women Good Girl",
          price: 3250000,
          image: "images/products/Women/5-1.png",
      },
      {
          id: 51,
          title: "Jean Paul Women Scandal",
          price: 3400000,
          image: "images/products/Women/6-1.png",
      },
      {
          id: 52,
          title: "Ajmal Unisex Oudesiere Oriental",
          price: 8600000,
          image: "images/products/Unisex/1-1.png",
      },
      {
          id: 53,
          title: "Loccitane En Provance ",
          price: 2300000,
          image: "images/products/Unisex/2-1.png",
      },
      {
          id: 54,
          title: "Ajmal Unisex Perfume ",
          price: 87000000,
          image: "images/products/Unisex/3-1.png",
      },
      {
          id: 55,
          title: "Calvin Klein Unisex One Summer  ",
          price: 1200000,
          image: "images/products/Unisex/4-1.png",
      },
      {
          id: 56,
          title: "The Body Shop Black Musk",
          price: 1100000,
          image: "images/products/Unisex/5-1.png",
      },
      {
          id: 57,
          title: "Lattafa unisex Mahir EDP",
          price: 8990000,
          image: "images/products/Unisex/6-1.png",
      },
      {
          id: 100,
          title: "Jaguar Men Classic EDT ",
          price: "2149000",
          image: "images/products/Men/1-2.png",
      },
      
  ];
  
  // Initialize cart from local storage or create an empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Function to save cart to local storage
  function saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Function to add a product to the cart
  function addToCart(productId, quantity) {   
      // Find the product in the products array
      let product = products.find(item => item.id === parseInt(productId)); // Ensure productId is parsed as an integer
  
      // If product is found
      if (product) {
          // Check if the product is already in the cart
          let cartItem = cart.find(item => item.id === product.id);
  
          // If the product is already in the cart, update its quantity
          if (cartItem) {
              cartItem.quantity += parseInt(quantity); // Ensure quantity is parsed as an integer
          } else {
              // Otherwise, add the product to the cart
              cart.push({
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: parseInt(quantity) // Ensure quantity is parsed as an integer
              });
          }
  
          // Update the cart in local storage and render cart products
          saveCartToLocalStorage();
          renderCartProducts();
      } 
  }
  
  // Function to remove an item from the cart
  function removeFromCart(productId) {
      // Find the index of the item in the cart array
      const index = cart.findIndex(item => item.id === productId);
  
      // If the item is found in the cart
      if (index !== -1) {
          // Remove the item from the cart array
          cart.splice(index, 1);
  
          // Update the cart in local storage and render cart products
          saveCartToLocalStorage();
          renderCartProducts();
      } 
  }
  
  // Function to render cart products on the page
  function renderCartProducts() {
      // Get the cart items element
      const cartItemsElement = document.getElementById("cartItems");
      const cartTotalElement = document.getElementById("cartTotal");
  
      // Clear previous items
  while (cartItemsElement.firstChild) {
      cartItemsElement.removeChild(cartItemsElement.firstChild);
  }
  
  
      // Initialize total quantity and total price
      let totalQuantity = 0;
      let totalPrice = 0;
  
      // Render each item in the cart
      cart.forEach((item) => {
      const cartItemHTML = `
      <td
                  class="cart-item"> <img src="${item.image}" alt="${item.title}">
                  <div class="cart-item-info">
                  <h3 class="cart-item-title">${item.title}</h3>
                 </div>
      </td>      
          
      <td>
                       <input
                      class="cart-item-quantity"
                      type="number"
                      name=""
                      min="1"
                      value="${item.quantity}"
                      data-id="${item.id}"
                      onchange="updateQuantity(this)" 
                     />                 
      </td>
  
      <td class="cart-item-total">${formatCurrency(item.price*item.quantity)} </td>
  
      <td> 
      <button class="remove-to-cart" onclick="removeFromCart(${item.id})">
      <i class="fa fa-trash"></i>
      </button>
  </td>
  
  
          `;
          cartItemsElement.innerHTML += cartItemHTML;
  
          // Increment total quantity
          totalQuantity += item.quantity;
          
          // Calculate total price for this item and add to totalPrice
          const itemTotalPrice = item.price * item.quantity;
          totalPrice += itemTotalPrice;
      });
  
      // Update cart total element
      cartTotalElement.innerHTML = `<p class="bill">Tổng tiền: ${formatCurrency(totalPrice)}</p>`;
      
      // Update cart icon quantity display (if applicable)
      const cartIconQuantity = document.querySelector('.cart-quantity');
      if (cartIconQuantity) {
          cartIconQuantity.textContent = totalQuantity;
      }
  }
  
  // Function to update quantity and recalculate total price
  function updateQuantity(input) {
      const productId = parseInt(input.dataset.id);
      const newQuantity = parseInt(input.value);
      // Find the product in the cart
      const product = cart.find(item => item.id === productId);
      if (product) {
          // Update quantity of the product
          product.quantity = newQuantity;
          // Re-render cart products
          renderCartProducts();
      }
  }
  // Call renderCartProducts after the page has loaded
  document.addEventListener('DOMContentLoaded', function() {
      renderCartProducts();
  });
  
  
  // Event listener for adding a product to the cart
  document.addEventListener('DOMContentLoaded', function() {
      const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
      addToCartButtons.forEach(button => {
          button.addEventListener('click', function() {
              const productId = parseInt(button.dataset.productId);
              const quantity = 1; // You can change this to allow users to input quantity
              addToCart(productId, quantity);
          });
      });
  
      // Render cart products when the page loads
      renderCartProducts();
  });
  
  // Format currency in Vietnamese Dong
  function formatCurrency(amount) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
  
  // Header Scroll
  let header = document.querySelector("header");
  window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
  });
  