document.getElementById('pg').addEventListener('click', function () {
    TweenMax.to('.sb-container', 0, { zIndex: '1000', opacity: 1 });
    TweenMax.to('#sb1', 1, { zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb2', 1, { delay: .07, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb3', 1, { delay: .14, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb4', 1, { delay: .21, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb5', 1, { delay: .28, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb6', 1, { delay: .35, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb7', 1, { delay: .42, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb8', 1, { delay: .49, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb9', 1, { delay: .56, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb10', 1, { delay: .63, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });

    TweenMax.to('.slide-bar', 0, { delay: 1.63, transformOrigin: 'left' });

    TweenMax.to('.sb-img', .5, { delay: 2, opacity: 0 });
    TweenMax.to('.sb-img', 0, { delay: 3.5, opacity: 1 });

    TweenMax.to('#sb1', 1, { delay: 2.33, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb2', 1, { delay: 2.4, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb3', 1, { delay: 2.47, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb4', 1, { delay: 2.54, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb5', 1, { delay: 2.61, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb6', 1, { delay: 2.68, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb7', 1, { delay: 2.75, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb8', 1, { delay: 2.82, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb9', 1, { delay: 2.89, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb10', 1, { delay: 2.96, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('.slide-bar', 0, { delay: 3.96, zIndex: '-10', transformOrigin: 'right' });
    TweenMax.to('.sb-container', 0, { delay: 3.96, zIndex: '-10', opacity: 0 });

    TweenMax.to('#con1', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con2', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con3', 0, { delay: 2, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 2, color: 'black' });
    TweenMax.to('input', 0, { delay: 2, borderBottom: 'solid black', color: 'black' });
});


document.getElementById('view-action').addEventListener('click', function () {
    TweenMax.to('#circle', 0, { animation: 'rotating .5s linear infinite' });
    TweenMax.to('.curtain', 0, { delay: 0, zIndex: '1000' });
    TweenMax.to('.curtain', .7, { delay: 0.25, scaleY: 1, ease: Power4.easeOut, opacity: 1 });
    TweenMax.to('.curtain', 0, { opacity: 1 });
    TweenMax.to('.curtain', 0, { delay: 2.3, zIndex: '-1' });
    TweenMax.to('.curtain', 0, { delay: 2.8, opacity: 0 });
    TweenMax.to('#con1', 0, { delay: 1, display: 'none' });
    TweenMax.to('#con2', 0, { delay: 1, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 1, color: 'black' });
    TweenMax.to('input', 0, { delay: 1, borderBottom: 'solid black', color: 'black' });
    TweenMax.to('.curtain', 1.3, { delay: 1.5, scaleY: 0, ease: Power4.easeOut });
    TweenMax.to('.panel2', 4, { delay: 2.5, x: 0, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to('#vslogan', .3, { opacity: 0 });
    TweenMax.to('#vslogan2', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#social-media', .3, { opacity: 0 });
    TweenMax.to('#social-media2', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#language', .3, { opacity: 0 });
    TweenMax.to('#language2', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#arrow-action', 0, { delay: 6, opacity: 1 });
});


document.getElementById('view-action').addEventListener('click', function () {
    TweenMax.to('#circle', 0, { animation: 'rotating .5s linear infinite' });
    TweenMax.to('.curtain', 0, { delay: 0, zIndex: '1000' });
    TweenMax.to('.curtain', .7, { delay: 0.25, scaleY: 1, ease: Power4.easeOut, opacity: 1 });
    TweenMax.to('.curtain', 0, { opacity: 1 });
    TweenMax.to('.curtain', 0, { delay: 2.3, zIndex: '-1' });
    TweenMax.to('.curtain', 0, { delay: 2.8, opacity: 0 });
    TweenMax.to('#con1', 0, { delay: 1, display: 'none' });
    TweenMax.to('#con2', 0, { delay: 1, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 1, color: 'black' });
    TweenMax.to('input', 0, { delay: 1, borderBottom: 'solid black', color: 'black' });
    TweenMax.to('.curtain', 1.3, { delay: 1.5, scaleY: 0, ease: Power4.easeOut });
    TweenMax.to('.panel2', 4, { delay: 2.5, x: 0, ease: Elastic.easeOut.config(1, 0.3) });
    TweenMax.to('#vslogan', .3, { opacity: 0 });
    TweenMax.to('#vslogan2', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#social-media', .3, { opacity: 0 });
    TweenMax.to('#social-media2', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#language', .3, { opacity: 0 });
    TweenMax.to('#language2', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#arrow-action', 0, { delay: 6, opacity: 1 });
});


document.getElementById('arrow-action').addEventListener('click', function () {
    TweenMax.to('#gradient-curtain', .7, { delay: .5, opacity: 1 });
    TweenMax.to('#arrow-action', 0, { x: '20vw', opacity: 0 });
    TweenMax.to('.video-tabs', .5, { delay: .5, color: '#ebebeb' });
    TweenMax.to('input', .5, { delay: .5, borderBottom: 'solid #ebebeb', color: '#ebebeb' });
    TweenMax.to('#arrow-action2', 0.5, { delay: 0.5, opacity: 1 });
});

document.getElementById('arrow-action2').addEventListener('click', function () {
    TweenMax.to('.sb-container', 0, { zIndex: '1000', opacity: 1 });
    TweenMax.to('#sb1', 1, { zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb2', 1, { delay: .07, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb3', 1, { delay: .14, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb4', 1, { delay: .21, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb5', 1, { delay: .28, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb6', 1, { delay: .35, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb7', 1, { delay: .42, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb8', 1, { delay: .49, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb9', 1, { delay: .56, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#sb10', 1, { delay: .63, zIndex: '1000', scaleX: 1, ease: Power4.easeOut });

    TweenMax.to('.slide-bar', 0, { delay: 1.63, transformOrigin: 'left' });

    TweenMax.to('.sb-img', .5, { delay: 2, opacity: 0 });
    TweenMax.to('.sb-img', 0, { delay: 3.5, opacity: 1 });

    TweenMax.to('#sb1', 1, { delay: 2.33, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb2', 1, { delay: 2.4, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb3', 1, { delay: 2.47, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb4', 1, { delay: 2.54, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb5', 1, { delay: 2.61, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb6', 1, { delay: 2.68, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb7', 1, { delay: 2.75, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb8', 1, { delay: 2.82, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb9', 1, { delay: 2.89, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('#sb10', 1, { delay: 2.96, zIndex: '1000', scaleX: 0, ease: Power4.easeOut });
    TweenMax.to('.slide-bar', 0, { delay: 3.96, zIndex: '-10', transformOrigin: 'right' });
    TweenMax.to('.sb-container', 0, { delay: 3.96, zIndex: '-10', opacity: 0 });

    TweenMax.to('#con1', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con2', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con3', 0, { delay: 2, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 2, color: 'black' });
    TweenMax.to('input', 0, { delay: 2, borderBottom: 'solid black', color: 'black' });
});
