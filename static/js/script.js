// Maquina de escrever

function typeWriter(e) {
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach((letra, i) => {
           setTimeout(() => e.innerHTML += letra, 75 * i)});
 }
 const texto = document.querySelector('.cargo')
 typeWriter(texto)


// Menu responsivo

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, navLinks2) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.navLinks2 = document.querySelectorAll(navLinks2);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks2.forEach((item) => {
        item.addEventListener("click", this.handleClick);
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "ul",
    "ul, .nav",
    "ul .nav a"
  );
  mobileNavbar.init();


// Animação

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})