new Swiper("#swiper-1", {
            effect: "fade",
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: "#swiper-1 .swiper-pagination",
                clickable: true,
            },
            lazyLoading: true,
            loop: true
        });

        const swiper = new Swiper(".gameSwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            loopedSlides: 15, // match total number of slides for symmetry
            spaceBetween: 0,
            speed: 800, // smooth out transition
            coverflowEffect: {
                rotate: 0,       // keep flat
                stretch: 10,      // perfect centering, no uneven offset
                depth: 200,      // balanced depth perception
                modifier: 1.5,   // reduced exaggeration for symmetry
                slideShadows: false
            },
            autoplay: {
                delay: 2500,                // autoplay interval
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

        });