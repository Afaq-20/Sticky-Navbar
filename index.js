const navbarEl = document.querySelector(".navbar")

const bcEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bcEl.offsetTop);

const x = () => {
    if (window.scrollY > bcEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.remove("active");
    } else {
        navbarEl.classList.add("active");
    }
}

window.addEventListener("scroll", x )