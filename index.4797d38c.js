const e={mainList:document.querySelector(".js-main-film-list"),dataNotFoundEl:document.querySelector(".js-not-film-card"),headerForm:document.querySelector(".header__form"),authBtn:document.querySelector(".auth-btn"),footerBtn:document.querySelector(".footer__btn"),loader:document.querySelector(".js-page-loader"),headerWatchedBtn:document.querySelector(".js-watched"),headerQueueBtn:document.querySelector(".js-queue"),paginationBox:document.querySelector(".pagination_box"),errorMessage:document.getElementById("header__error-message"),trendingSection:document.querySelector(".swiper-section"),btnToTop:document.getElementById("up-btn"),aboutModal:document.querySelector(".js-about-modal"),body:document.querySelector("body"),btnOpenAboutModal:document.querySelector(".js-open-modal"),btnCloseAboutModal:document.querySelector(".js-close-about-modal"),swiperModal:document.querySelector("#swiper-modal"),libBtn:document.querySelector(".library__btns"),modal:document.querySelector("[data-backdrop]"),dataModalClose:document.querySelector("[data-modal-close]"),dataBackdrop:document.querySelector("[data-backdrop]"),changeTheme:document.querySelectorAll(".change_theme"),changeThemeCssLink:document.querySelector('[title= "theme"]'),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperRef:document.querySelector("#trends-swiper"),autorizationChecked:document.getElementById("icon-autorization-checked")},o=e.aboutModal,t=e.body,n=e.btnCloseAboutModal,r=e.swiperModal;function d(e){"Escape"===e.code&&a()}function a(){o.classList.remove("is-shown"),t.classList.remove("modal-open"),document.removeEventListener("keydown",d),e.btnToTop.style.display="block"}e.btnOpenAboutModal.addEventListener("click",(function(){o.classList.add("is-shown"),t.classList.add("modal-open"),e.btnToTop.style.display="none",document.addEventListener("keydown",d),document.addEventListener("click",(function(e){e.target===o&&a()}))})),n.addEventListener("click",a);new Swiper(r,{modules:[Navigation,Pagination],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},scrollbar:{el:".swiper-scrollbar",draggable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0,sensitivity:1,eventsTarget:"swiper"},centeredSlides:!0,grabCursor:!0,slideToClickedSlide:!0,loop:!0,slidesPerView:"auto",freeMode:!0});
//# sourceMappingURL=index.4797d38c.js.map
