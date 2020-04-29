var pop = document.getElementById('pop-up-slider-items');
var img = Number(0);
var close = document.getElementById('close-2');
var next = document.getElementById('next-2');
var prev = document.getElementById('prev-2');

document.getElementById('close-2').addEventListener('click', function () {
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 0, scaleY: 0 });
    TweenMax.to('#close-2', 0, { display: 'none'});
    TweenMax.to('#next-2', 0, { display: 'none'});
    TweenMax.to('#prev-2', 0, { display: 'none'});
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 0});
});

document.getElementById('slider-items-2-1').addEventListener('click', function () {
    img = 1;
    TweenMax.to('#prev-2', 0, { display: 'none'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-2').addEventListener('click', function () {
    img = 2;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-3').addEventListener('click', function () {
    img = 3;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-4').addEventListener('click', function () {
    img = 4;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-5').addEventListener('click', function () {
    img = 5;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-6').addEventListener('click', function () {
    img = 6;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-7').addEventListener('click', function () {
    img = 7;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-8').addEventListener('click', function () {
    img = 8;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-9').addEventListener('click', function () {
    img = 9;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-10').addEventListener('click', function () {
    img = 10;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-11').addEventListener('click', function () {
    img = 11;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-12').addEventListener('click', function () {
    img = 12;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-13').addEventListener('click', function () {
    img = 13;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-14').addEventListener('click', function () {
    img = 14;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`; 
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-15').addEventListener('click', function () {
    img = 15;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-16').addEventListener('click', function () {
    img = 16;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-17').addEventListener('click', function () {
    img = 17;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-18').addEventListener('click', function () {
    img = 18;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-19').addEventListener('click', function () {
    img = 19;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-20').addEventListener('click', function () {
    img = 20;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'block'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});

document.getElementById('slider-items-2-21').addEventListener('click', function () {
    img = 21;
    TweenMax.to('#prev-2', 0, { display: 'block'});
    TweenMax.to('#next-2', 0, { display: 'none'});
    TweenMax.to('#close-2', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`;
    TweenMax.to('.mobile-gray-pop-up-curtain', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
});


document.getElementById('next-2').addEventListener('click', function(){
    img = img + 1;
    if (img > 21) {
        TweenMax.to('#next-2', 0, { display: 'none'});
    } else if (img == 21) {
        TweenMax.to('#next-2', 0, { display: 'none'});
    } else {
        TweenMax.to('#next-2', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`
    TweenMax.to('#prev-2', 0, { display: 'block'});
    console.log(img);
});

document.getElementById('prev-2').addEventListener('click', function(){
    img = img - 1
    if (img < 1) {
        TweenMax.to('#prev-2', 0, { display: 'none'});
    } else if (img == 1) {
        TweenMax.to('#prev-2', 0, { display: 'none'});
    } else {
        TweenMax.to('#prev-2', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `gallery2/${img}.jpg`
    TweenMax.to('#next-2', 0, { display: 'block'});
    console.log(img);
});
