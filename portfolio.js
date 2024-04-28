// toggle iconbar

let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll section
let sections = document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a ');

window.onscroll = () =>{
    // sticky header
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top>=offset && top<offset + height){
            // active navbar links
            navlinks.forEach(links=>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation on reapet then we use
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle icon and navbar when click navbar links (scroll)
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation on footer on scroll

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >=document.scrollingElement.scrollHeight);

}
// add preloader
var loader =document.getElementById('perloader');
window.addEventListener("load",function(){
    loader.style.display="none";
});