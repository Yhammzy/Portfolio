var button = document.querySelector('.fa-bars')
var list = document.querySelector('.menu')
var icons = document.querySelector('.hover-i a')
// var icony = document.querySelectorAll('.fa-heart')
var icon = document.querySelector('.fa-share')
//  document.querySelectorAll(".bouncing-title span").forEach(span =>{
//     span.addEventListener("mouseover", function() {
//         this.classList.add("bounce")
//         setTimeout(function() {
//             this.classList.remove("bounce")
//         }.bind(this), 1000)
//     })
// })

var count = 0

icon.addEventListener('click', function() {
    if (count == 0 ) {
        icons.style.display = 'flex'
        count = 1
        return;
    }
    icons.style.display = 'none'
    count = 0
    return
})

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -60% 0px"

};
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }  else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }   
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
// button.addEventListener('click', function() {
//     if (count == 0 ) {
//         list.style.display = 'flex'
//         count = 1
//         return;
//     }
//     list.style.display = 'none'
//     count = 0
//     return
// })

// icons.forEach(icon => {
//     icon.addEventListener('click', function(e) {
//         console.log(e.target);
//         if (count == 0 ) {
//             icon.style.color = 'red'
//             count = 1
//             return;
//         }
//         icon.style.color = 'rgba(0, 0, 0, 0.7)'
//         count = 0
//         return
//     })    
// });