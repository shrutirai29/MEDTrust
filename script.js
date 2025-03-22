const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const updateIndicator = (tab, index) => {
    sliderIndicator.style.transform  = `translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
}

const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    autoplay: {
        delay: 2000
    },
    on: {
        slideChange: () => {
            const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
            updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
        }
    }
})

sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index);
        updateIndicator(tab, index);
    })
})

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], swiper.activeIndex)); 

const modal = document.getElementById("adModal");

const btn = document.getElementById("adBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}