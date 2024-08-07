const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/9.NAV CLOSE.svg";
  } else {
    navBtnImg.src = "./img/icons/8.NAV OPEN.svg";
  }
};

AOS.init({
  once: true,
});
