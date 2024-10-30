// toggle menu

const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const closeIcon = document.getElementById("closeicon")

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-is-open")
})

closeIcon.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-is-open")
})

navLink.forEach(link => {
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("nav-is-open")
    })
})

// sticky header

const scrollHeader = ()=>{
    const stickyMenu = document.getElementById("sticky-menu")

    if(this.scrollY >= 150){
        stickyMenu.classList.remove("lg:top-[-100%]")
        stickyMenu.classList.add("bg-hitam-transparant")
    }else{
        stickyMenu.classList.add("lg:top-[-100%]")
        stickyMenu.classList.remove("bg-hitam-transparant")
    }




}

window.addEventListener("scroll",scrollHeader)


const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")


    this.scrollY > 250 ? scrollUpBtn.classList.remove("-bottom-1/2") & scrollUpBtn.classList.add("bottom-4") : scrollUpBtn.classList.add("-bottom-1/2") & scrollUpBtn.classList.remove("bottom-4") 

}


window.addEventListener("scroll",scrollUp)


const nav_items = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")
    
        if(top >= offset && top < offset + height){
            nav_items.forEach(links => {
                links.classList.remove("active");
                document.querySelector("ul li a[href*="+ id + "]").classList.add("active")
                
            })
        }
    
    
    })
}