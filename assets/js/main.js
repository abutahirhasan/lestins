/*-----------------------------------------------------------------

Template Name: Lestin- Directory Listing HTML Template 
Author:  Mirrortheme
Author URI: 
Version: 1.0.0
Description: Lestin- Directory Listing HTML Template <

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 
09. preloader 


------------------------------------------------------------------*/

(function ($) {
	("use strict");

	$(document).ready(function () {
		//>> Mobile Menu Js Start <<//
		$("#mobile-menu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "1199",
			meanExpand: ['<i class="far fa-plus"></i>'],
		});

		//>> Sidebar Toggle Js Start <<//
		$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
			$(".offcanvas__info").removeClass("info-open");
			$(".offcanvas__overlay").removeClass("overlay-open");
		});
		$(".sidebar__toggle").on("click", function () {
			$(".offcanvas__info").addClass("info-open");
			$(".offcanvas__overlay").addClass("overlay-open");
		});

		//>> Body Overlay Js Start <<//
		$(".body-overlay").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".df-search-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
		});

		//>> Sticky Header Js Start <<//

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$("#header-sticky").addClass("sticky");
			} else {
				$("#header-sticky").removeClass("sticky");
			}
		});

		//>> Video Popup Start <<//
		$(".img-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		$(".video-popup").magnificPopup({
			type: "iframe",
			callbacks: {},
		});

		//>> Counterup Start <<//
		$(".count").counterUp({
			delay: 15,
			time: 4000,
		});

		//>> Wow Animation Start <<//
		new WOW().init();

		//>> Nice Select Start <<//
		$("select").niceSelect();

		//Hero Slider
		const heroSLider = new Swiper(".hero-slider", {
			// Optional parameters
			speed: 3500,
			loop: true,
			slidesPerView: 1,
			autoplay: true,
			simulateTouch: false,
			effect: "fade",
			breakpoints: {
				1600: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},

				a11y: false,
			},
			pagination: {
				el: ".dots",
				clickable: true,
			},

			navigation: {
				prevEl: ".array-next",
				nextEl: ".array-prev",
			},
		});

		//Sponsor Slider
		const stepSlideWrap = new Swiper(".step-slide-wrap", {
			spaceBetween: 30,
			speed: 2000,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			breakpoints: {
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				400: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		//Testimonial Slide1
		const testimonialWrapper1 = new Swiper(".testimonial-wrapper1", {
			spaceBetween: 24,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				prevEl: ".array-next",
				nextEl: ".array-prev",
			},
			breakpoints: {
				1199: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				575: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				400: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
			},
		});

		//Testimonial Slide2
		const testimonialWrapper2 = new Swiper(".testimonial-wrapper2", {
			spaceBetween: 24,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				prevEl: ".array-next",
				nextEl: ".array-prev",
			},
			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				767: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				575: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				400: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
			},
		});

		//>> Progress Bar Js Start <<//
		$(".progress-bar").waypoint(
			function () {
				$(".progress-bar").css({
					animation: "animate-positive 2.6s",
					opacity: "1",
				});
			},
			{ offset: "75%" }
		);

		//>> Back To Top Slider Start <<//
		$(window).scroll(function () {
			if ($(this).scrollTop() > 20) {
				$("#back-top").addClass("show");
			} else {
				$("#back-top").removeClass("show");
			}
		});
		$("#back-top").click(function () {
			$("html, body").animate({ scrollTop: 0 }, 800);
			return false;
		});
	}); // End Document Ready Function

	//Price Range Slideer
	document.addEventListener("DOMContentLoaded", function () {
		const minSlider = document.getElementById("min-slider");
		const maxSlider = document.getElementById("max-slider");
		const amount = document.getElementById("amount");

		function updateAmount() {
			const minValue = parseInt(minSlider.value, 10);
			const maxValue = parseInt(maxSlider.value, 10);

			// Ensure the minimum value is always lower than the maximum value
			if (minValue > maxValue) {
				minSlider.value = maxValue;
			}

			// Update the displayed price range
			amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

			// Calculate the percentage positions of the sliders
			const minPercent =
				((minSlider.value - minSlider.min) /
					(minSlider.max - minSlider.min)) *
				100;
			const maxPercent =
				((maxSlider.value - maxSlider.min) /
					(maxSlider.max - maxSlider.min)) *
				100;

			// Update the background gradient to show the active track color
			minSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #ff5722 ${minPercent}%, #ff5722 ${maxPercent}%, #000 ${maxPercent}%)`;
			maxSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #ff5722 ${minPercent}%, #ff5722 ${maxPercent}%, #000 ${maxPercent}%)`;
		}

		// Initialize the sliders and track with default values
		amount && updateAmount();

		// if (minSlider && maxSlider) {

		// Add event listeners for both sliders
		minSlider && minSlider.addEventListener("input", updateAmount);
		maxSlider && maxSlider.addEventListener("input", updateAmount);
		// }
	});

	//Cart Increment Decriemnt

	// quntity increment and decrement
	const quantityIncrement = document.querySelectorAll(".quantityIncrement");
	const quantityDecrement = document.querySelectorAll(".quantityDecrement");
	if (quantityIncrement && quantityDecrement) {
		quantityIncrement.forEach((increment) => {
			increment.addEventListener("click", function () {
				const value = parseInt(
					increment.parentElement.querySelector("input").value
				);
				increment.parentElement.querySelector("input").value = value + 1;
			});
		});

		quantityDecrement.forEach((decrement) => {
			decrement.addEventListener("click", function () {
				const value = parseInt(
					decrement.parentElement.querySelector("input").value
				);
				if (value > 1) {
					decrement.parentElement.querySelector("input").value = value - 1;
				}
			});
		});
	}

	function loader() {
		$(window).on("load", function () {
			// Animate loader off screen
			$(".preloader").addClass("loaded");
			$(".preloader").delay(600).fadeOut();
		});
	}

	//Custom Dropdown
	const dropdownButtons = document.querySelectorAll(".dropdown-button");

	dropdownButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			// Toggle the dropdown content for the clicked button
			const dropdownContent = button.nextElementSibling;
			dropdownContent.classList.toggle("show");

			// Close other open dropdowns
			document.querySelectorAll(".dropdown-content").forEach((content) => {
				if (content !== dropdownContent) {
					content.classList.remove("show");
				}
			});

			// Stop event from propagating to the window click listener
			event.stopPropagation();
		});
	});

	// Close dropdowns when clicking outside
	window.addEventListener("click", () => {
		document.querySelectorAll(".dropdown-content").forEach((content) => {
			content.classList.remove("show");
		});
	});

	loader();
})(jQuery); // End jQuery
