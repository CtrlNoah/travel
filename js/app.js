(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active')
        } else {
            header.classList.remove('header__active')
        }
    };
})();


// (function () {
//     const mask = document.querySelector('.mask');
//     console.log(mask);
//     window.addEventListener('load', () => {
//         mask.classList.add('none');
//         setTimeout(() => {
//             mask.remove()
//         }, 3600)
//     })
// }) ();

setTimeout(function () {
    const mask = document.querySelector('.mask');
    mask.classList.add('none');
}, 1000);




