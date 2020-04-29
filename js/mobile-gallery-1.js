var pop = document.getElementById('pop-up-slider-items');
var img = Number(0);
var close = document.getElementById('close-1');
var next = document.getElementById('next-1');
var prev = document.getElementById('prev-1');

document.getElementById('close-1').addEventListener('click', function () {
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 0, scaleY: 0 });
    TweenMax.to('#close-1', 0, { display: 'none'});
    TweenMax.to('#next-1', 0, { display: 'none'});
    TweenMax.to('#prev-1', 0, { display: 'none'});
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 0});
});

document.getElementById('slider-items-1-1').addEventListener('click', function () {
    img = 1;
    TweenMax.to('#prev-1', 0, { display: 'none'});
    TweenMax.to('#next-1', 0, { display: 'block'});
    TweenMax.to('#close-1', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-1-2').addEventListener('click', function () {
    img = 2;
    TweenMax.to('#prev-1', 0, { display: 'block'});
    TweenMax.to('#next-1', 0, { display: 'block'});
    TweenMax.to('#close-1', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 1, scaleY: 1, });
});

document.getElementById('slider-items-1-3').addEventListener('click', function () {
    img = 3;
    TweenMax.to('#prev-1', 0, { display: 'block'});
    TweenMax.to('#next-1', 0, { display: 'block'});
    TweenMax.to('#close-1', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
});

document.getElementById('slider-items-1-4').addEventListener('click', function () {
    img = 4;
    TweenMax.to('#prev-1', 0, { display: 'block'});
    TweenMax.to('#next-1', 0, { display: 'block'});
    TweenMax.to('#close-1', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
});

document.getElementById('slider-items-1-5').addEventListener('click', function () {
    img = 5;
    TweenMax.to('#prev-1', 0, { display: 'block'});
    TweenMax.to('#next-1', 0, { display: 'block'});
    TweenMax.to('#close-1', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
});

document.getElementById('slider-items-1-6').addEventListener('click', function () {
    img = 6;
    TweenMax.to('#prev-1', 0, { display: 'block'});
    TweenMax.to('#next-1', 0, { display: 'none'});
    TweenMax.to('#close-1', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
});


document.getElementById('next-1').addEventListener('click', function(){
    img = img + 1;
    if (img > 6) {
        TweenMax.to('#next-1', 0, { display: 'none'});
    } else if (img == 6) {
        TweenMax.to('#next-1', 0, { display: 'none'});
    } else {
        TweenMax.to('#next-1', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`
    TweenMax.to('#prev-1', 0, { display: 'block'});
    console.log(img)
});

document.getElementById('prev-1').addEventListener('click', function(){
    img = img - 1
    if (img < 1) {
        TweenMax.to('#prev-1', 0, { display: 'none'});
    } else if (img == 1) {
        TweenMax.to('#prev-1', 0, { display: 'none'});
    } else {
        TweenMax.to('#prev-1', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery1/${img}.jpg`
    TweenMax.to('#next-1', 0, { display: 'block'});
    console.log(img)
});