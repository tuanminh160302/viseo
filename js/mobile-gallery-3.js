var pop = document.getElementById('pop-up-slider-items');
var img = Number(0);
var close = document.getElementById('close-3');
var next = document.getElementById('next-3');
var prev = document.getElementById('prev-3');

document.getElementById('close-3').addEventListener('click', function () {
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 0, scaleY: 0 });
    TweenMax.to('#close-3', 0, { display: 'none'});
    TweenMax.to('#next-3', 0, { display: 'none'});
    TweenMax.to('#prev-3', 0, { display: 'none'});
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 0});
});

document.getElementById('slider-items-3-1').addEventListener('click', function () {
    img = 1;
    TweenMax.to('#prev-3', 0, { display: 'none'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-2').addEventListener('click', function () {
    img = 2;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-3').addEventListener('click', function () {
    img = 3;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-4').addEventListener('click', function () {
    img = 4;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-5').addEventListener('click', function () {
    img = 5;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-6').addEventListener('click', function () {
    img = 6;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-7').addEventListener('click', function () {
    img = 7;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-8').addEventListener('click', function () {
    img = 8;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-9').addEventListener('click', function () {
    img = 9;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-10').addEventListener('click', function () {
    img = 10;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-11').addEventListener('click', function () {
    img = 11;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-12').addEventListener('click', function () {
    img = 12;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-13').addEventListener('click', function () {
    img = 13;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-14').addEventListener('click', function () {
    img = 14;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`; 
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-15').addEventListener('click', function () {
    img = 15;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-16').addEventListener('click', function () {
    img = 16;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-17').addEventListener('click', function () {
    img = 17;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-18').addEventListener('click', function () {
    img = 18;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-19').addEventListener('click', function () {
    img = 19;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-20').addEventListener('click', function () {
    img = 20;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-21').addEventListener('click', function () {
    img = 21;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-22').addEventListener('click', function () {
    img = 22;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-23').addEventListener('click', function () {
    img = 23;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-24').addEventListener('click', function () {
    img = 24;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-25').addEventListener('click', function () {
    img = 25;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-26').addEventListener('click', function () {
    img = 26;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-3-27').addEventListener('click', function () {
    img = 27;
    TweenMax.to('#prev-3', 0, { display: 'block'});
    TweenMax.to('#next-3', 0, { display: 'block'});
    TweenMax.to('#close-3', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});


document.getElementById('next-3').addEventListener('click', function(){
    img = img + 1;
    if (img > 27) {
        TweenMax.to('#next-3', 0, { display: 'none'});
    } else if (img == 27) {
        TweenMax.to('#next-3', 0, { display: 'none'});
    } else {
        TweenMax.to('#next-3', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`
    TweenMax.to('#prev-3', 0, { display: 'block'});
    console.log(img);
});

document.getElementById('prev-3').addEventListener('click', function(){
    img = img - 1
    if (img < 1) {
        TweenMax.to('#prev-3', 0, { display: 'none'});
    } else if (img == 1) {
        TweenMax.to('#prev-3', 0, { display: 'none'});
    } else {
        TweenMax.to('#prev-3', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery3/${img}.png`
    TweenMax.to('#next-3', 0, { display: 'block'});
    console.log(img);
});
