const navbar = document.querySelector('.navbar');
const introContainer = document.querySelector('.intro-container');
var sections = document.querySelectorAll(".section-container");
var links = document.querySelectorAll(".nav-link");
const navBarCollapse = document.querySelector('.navbar-collapse');

window.onscroll = () => {
  //change colour of nav bar when it sticks to the top
  if (window.scrollY > 700) {
      navbar.classList.add('nav-color-change');
      introContainer.classList.add('nav-color-change');
      // document.documentElement.scrollTop = 1000;
      // document.getElementById("experiences").scrollIntoView({behavior:'instant'})

      } else {
      navbar.classList.remove('nav-color-change');
      introContainer.classList.remove('nav-color-change');

      // window.scrollTo({top:0,behavior:'instant'});
  }
  // if (window.scrollY ) {
  //   // location.href = "#";
  //   // location.href = "#experiences"
  //   // window.scrollTo({ top: scrollDiv-70, behavior: 'smooth'});
  // }

  //fade in up effect
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  //active nav links
  var currSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if(window.scrollY > sectionTop) {
      currSection = section.getAttribute("id");
    }
  })
  for (var i = 0; i < links.length; i++){
    if (links[i].classList.contains(currSection)){
      links[i].classList.add("nav-link-active");
    } else { 
      links[i].classList.remove("nav-link-active");
    }
  }
};

document.querySelectorAll('.nav-link').forEach((navLink) => {
  navLink.addEventListener('click', ()=>{  
    navBarCollapse.classList.remove('show');
  })});

  // window.addEventListener("scroll", ()=> {
  //   if (window.scrollY > 700) {

  //     // document.documentElement.scrollTop = 1000;
  //     window.scrollTo({top: 1000, behavior: 'instant'});
    
  //     } else {

  //     window.scrollTo({top:0, behavior: 'instant'});
    
  //     // window.scrollTo({top:0,behavior:'smooth'});
  //   }
  // })