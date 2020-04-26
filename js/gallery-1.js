var pop = document.getElementById('pop-up-slider-items');
var img = Number(0);
var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');

document.getElementById('close').addEventListener('click', function () {
    TweenMax.to('.non-touch-slider-items', 0, { scale: 0});
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 0, scaleY: 0 });
    TweenMax.to('.slider-container', 0, { filter: 'blur(0px)' });
    TweenMax.to('#close', 0, { display: 'none'});
    TweenMax.to('#next', 0, { display: 'none'});
    TweenMax.to('#prev', 0, { display: 'none'});
});

document.getElementById('slider-items-1').addEventListener('click', function () {
    img = 1;
    TweenMax.to('#prev', 0, { display: 'none'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)'});
});

document.getElementById('slider-items-2').addEventListener('click', function () {
    img = 2;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-3').addEventListener('click', function () {
    img = 3;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-4').addEventListener('click', function () {
    img = 4;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-5').addEventListener('click', function () {
    img = 5;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-6').addEventListener('click', function () {
    img = 6;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'none'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});


document.getElementById('next').addEventListener('click', function(){
    img = img + 1;
    if (img > 6) {
        TweenMax.to('#next', 0, { display: 'none'});
    } else if (img == 6) {
        TweenMax.to('#next', 0, { display: 'none'});
    } else {
        TweenMax.to('#next', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`
    TweenMax.to('#prev', 0, { display: 'block'});
});

document.getElementById('prev').addEventListener('click', function(){
    img = img - 1
    if (img < 1) {
        TweenMax.to('#prev', 0, { display: 'none'});
    } else if (img == 1) {
        TweenMax.to('#prev', 0, { display: 'none'});
    } else {
        TweenMax.to('#prev', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`
    TweenMax.to('#next', 0, { display: 'block'});
});