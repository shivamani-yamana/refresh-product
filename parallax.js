const parallax_el = document.querySelectorAll(".parallax-bg");
let xValue=0,
yValue=0;
var calcxy,
calcy;
window.addEventListener("mousemove",(e)=>{
    xValue=e.clientX - window.innerWidth/2;
    yValue=e.clientY - window.innerHeight/2;
    
    parallax_el.forEach((el)=>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        calcxy= `translateX(calc(${xValue*speedx}px - 50%)) translateY(calc(${yValue*speedy}px - 50%))`;
        el.style.transform=calcxy;
    })
}
)