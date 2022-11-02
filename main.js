var button = document.querySelector('.fa-bars')
var list = document.querySelector('.menu')
var icons = document.querySelector('.hover-i a')
// var icony = document.querySelectorAll('.fa-heart')
var icon = document.querySelector('.fa-share')

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