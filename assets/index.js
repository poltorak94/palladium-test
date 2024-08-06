document.addEventListener("DOMContentLoaded", () => {
    //animation first screen
    const animateHero = function () {
        const title = document.querySelector(".hero__title");
        const subtitle = document.querySelector(".hero__subtitle");
        const leftImg = document.querySelector(".hero__left");
        const rightImg = document.querySelector(".hero__right");

        setTimeout(function () {
            title.classList.add("hero__title--active");
        }, 100);

        setTimeout(function () {
            subtitle.classList.add("hero__subtitle--active");
        }, 600);

        setTimeout(function () {
            leftImg.classList.add("hero__left--active");
            rightImg.classList.add("hero__right--active");
        }, 900);
    };
    animateHero();

    //fixed header
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("header--white");
    }
    window.addEventListener("scroll", function () {
        if (this.window.innerWidth >= 768) {
            if (window.scrollY > 50) {
                header.classList.add("header--white");
            } else {
                header.classList.remove("header--white");
            }
        }
    });

    //catalog show more
    const showMoreBtn = document.querySelector(".catalog__show-more");
    const showMoreBtnContainer = document.querySelector(
        ".catalog__button-holder"
    );
    showMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const hiddenCatalog = document.querySelector(".catalog__grid--hidden");
        hiddenCatalog.classList.remove("catalog__grid--hidden");
        showMoreBtnContainer.classList.add("catalog__button-holder--hidden");
    });

    //slider
    const advantages = document.querySelector(".advantages");
    if (advantages.length !== "") {
        let swiper = new Swiper(".advantages__slider", {
            spaceBetween: 60,
            slidesPerView: 1.944,
            centeredSlides: true,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1.4,
                    spaceBetween: 40,
                },
                990: {
                    slidesPerView: 1.944,
                    spaceBetween: 60,
                },
            },
        });
    }

    //fancybox
    const gallery = document.querySelector(".gallery");
    if (gallery.length !== "") {
        Fancybox.bind("[data-fancybox]", {});
    }

    //burger menu
    const burger = document.querySelector(".header__burger");
    burger.addEventListener("click", function (e) {
        e.preventDefault();
        burger.classList.toggle("header__burger--active");
        header.classList.toggle("header--opened");
    });
});
