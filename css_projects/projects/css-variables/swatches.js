var swatches = document.querySelectorAll('.swatches span');
var changes = document.querySelectorAll('.changes span');

var root = document.querySelector(':root');

swatches.forEach((swatch) => {
    swatch.addEventListener('click',(e) => {
        root.style.setProperty('--theme-color', e.target.style.background);
    })
})

changes.forEach((change) => {
    change.addEventListener('click',(e) => {
        root.style.setProperty('--link-color', e.target.style.background);
    })
})