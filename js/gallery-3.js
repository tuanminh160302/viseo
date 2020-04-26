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
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)'});
});

document.getElementById('slider-items-2').addEventListener('click', function () {
    img = 2;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-3').addEventListener('click', function () {
    img = 3;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-4').addEventListener('click', function () {
    img = 4;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-5').addEventListener('click', function () {
    img = 5;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-6').addEventListener('click', function () {
    img = 6;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-7').addEventListener('click', function () {
    img = 7;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-8').addEventListener('click', function () {
    img = 8;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-9').addEventListener('click', function () {
    img = 9;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-10').addEventListener('click', function () {
    img = 10;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-11').addEventListener('click', function () {
    img = 11;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-12').addEventListener('click', function () {
    img = 12;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-13').addEventListener('click', function () {
    img = 13;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-14').addEventListener('click', function () {
    img = 14;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`; 
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-15').addEventListener('click', function () {
    img = 15;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-16').addEventListener('click', function () {
    img = 16;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-17').addEventListener('click', function () {
    img = 17;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-18').addEventListener('click', function () {
    img = 18;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-19').addEventListener('click', function () {
    img = 19;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-20').addEventListener('click', function () {
    img = 20;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-21').addEventListener('click', function () {
    img = 21;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-22').addEventListener('click', function () {
    img = 22;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-23').addEventListener('click', function () {
    img = 23;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-24').addEventListener('click', function () {
    img = 24;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-25').addEventListener('click', function () {
    img = 25;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-26').addEventListener('click', function () {
    img = 26;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-27').addEventListener('click', function () {
    img = 27;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'none'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});


document.getElementById('next').addEventListener('click', function(){
    img = img + 1;
    if (img > 27) {
        TweenMax.to('#next', 0, { display: 'none'});
    } else if (img == 27) {
        TweenMax.to('#next', 0, { display: 'none'});
    } else {
        TweenMax.to('#next', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`
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
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`
    TweenMax.to('#next', 0, { display: 'block'});
});