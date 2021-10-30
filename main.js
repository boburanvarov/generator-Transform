// variables
const block = document.querySelector('.block');
const text = document.querySelector('.text');
const copy = document.querySelector('.copy');
const header = document.querySelector('.header');

const scale = document.querySelector('.scale');
const rotate = document.querySelector('.rotate');
const translateX = document.querySelector('.translateX');
const translateY = document.querySelector('.translateY');
const skewX = document.querySelector('.skewX');
const skewY = document.querySelector('.skewY');

// function
const textBlock = () => {
    text.value = 'transform:' + '  ' + 'scale(' + scale.value + ')' + '  ' + 'rotate(' + rotate.value + 'deg)' + ' ' + 'translate(' + translateX.value + 'px,' + translateY.value + 'px)' + ' ' + 'skew(' + skewX.value + 'deg,' + skewY.value + 'deg) ;';

}

const transform = () => {
    block.style.transform = 'scale(' + scale.value + ')' + 'rotate(' + rotate.value + 'deg)' + 'translate(' + translateX.value + 'px,' + translateY.value + 'px)' + 'skew(' + skewX.value + 'deg,' + skewY.value + 'deg)';
    textBlock()
}

const copyText = () => {
    text.select();
    document.execCommand('Copy');
    header.classList.add('active');
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        header.classList.remove('active');
    }, 1500);
}


// events
scale.addEventListener('input', transform);
rotate.addEventListener('input', transform);
translateX.addEventListener('input', transform);
translateY.addEventListener('input', transform);
skewX.addEventListener('input', transform);
skewY.addEventListener('input', transform);
copy.addEventListener('click', copyText);