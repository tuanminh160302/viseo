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
    TweenMax.to('#con4', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con5', 0, { delay: 2, display: 'none' });
    TweenMax.to('.video-tabs', 0, { delay: 2, color: '#ebebeb' });
    TweenMax.to('input', 0, { delay: 2, borderBottom: 'solid black', color: 'black' });
});


document.getElementById('view-action').addEventListener('click', function () {
    TweenMax.to('#circle', 0, { animation: 'rotating .5s linear infinite' });
    TweenMax.to('.curtain', 0, { zIndex: '1000' });
    TweenMax.to('.curtain', 0, { opacity: 1 });
    TweenMax.to('#con1', 0, { delay: 1, display: 'none' });
    TweenMax.to('#con2', 0, { delay: 1, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 1, color: 'black' });
    TweenMax.to('.curtain', .7, { delay: 0.25, scaleY: 1, ease: Power4.easeOut });
    TweenMax.to('input', 0, { delay: 1, borderBottom: 'solid black', color: 'black' });

    TweenMax.to('#curtain-logo', 0, { animation: 'fill .4s ease forwards 2.5s' });
    TweenMax.to('#curtain-logo', 0.5, { delay: 3, opacity: 0 });
    TweenMax.to('#curtain-logo', 0, { delay: 3.6, display: 'none' });
    TweenMax.to('#path1', 0, { delay: 0.95, animation: 'animated_logo 1.3s ease forwards' });
    TweenMax.to('#path2', 0, { delay: 0.95, animation: 'animated_logo 1.3s ease forwards 0.3s' });
    TweenMax.to('#path3', 0, { delay: 0.95, animation: 'animated_logo 1.3s ease forwards 0.6s' });
    TweenMax.to('#path4', 0, { delay: 0.95, animation: 'animated_logo 1.3s ease forwards 0.9s' });
    TweenMax.to('#path5', 0, { delay: 0.95, animation: 'animated_logo 1.3s ease forwards 1.2s' });

    TweenMax.to('.curtain', 1.3, { delay: 3.5, scaleY: 0, ease: Power4.easeOut });
    TweenMax.to('#panel2-gallery', 1, { delay: 4.2, x: 0, ease: Back.easeOut.config(4) });
    TweenMax.to('#panel2-gallery', 0, { delay: 5.2, scaleX: 1, scaleY: 1, transformOrigin: 'top bottom', ease: Back.easeOut.config(4) });
    TweenMax.to('#panel2-gallery', 1, { delay: 5.2, scaleY: 0.75, scaleX: 0.75, ease: Power4.easeOut });
    TweenMax.to('.fake-panel2', 1, { delay: 5.2, scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#vslogan', .3, { opacity: 0 });
    TweenMax.to('#vslogan2', .3, { delay: 4.9, opacity: 1 });
    TweenMax.to('#social-media', .3, { opacity: 0 });
    TweenMax.to('#social-media2', .3, { delay: 4.9, opacity: 1 });
    TweenMax.to('#language', .3, { opacity: 0 });
    TweenMax.to('#language2', .3, { delay: 5, opacity: 1 });
    TweenMax.to('#arrow-action', 0, { delay: 5.35, opacity: 1 });
    TweenMax.to('.curtain', 0, { delay: 4.8, zIndex: '-1' });
    TweenMax.to('.curtain', 0, { delay: 4.8, opacity: 0 });
    TweenMax.to('#arrow-action2', 0.1, { delay: 5.7, opacity: 1 });
    TweenMax.to('input', 1, { delay: 5.2, borderBottom: 'solid #ebebeb', color: '#ebebeb' });
    TweenMax.to('.video-tabs', 1, { delay: 5.2, color: '#ebebeb' });
    TweenMax.to('#view-events', 0.5, { delay: 5.7, opacity: 1 });

});


document.getElementById('view-events').addEventListener('click', function () {
    TweenMax.to('.fake-panel2', 0, { delay: 1, scaleX: 0 });
    TweenMax.to('.curtain', 0, { zIndex: '1000' });
    TweenMax.to('.curtain', 0, { opacity: 1 });
    TweenMax.to('#con1', 0, { delay: 1, display: 'none' });
    TweenMax.to('#con2', 0, { delay: 1, display: 'none' });
    TweenMax.to('#con3', 0, { delay: 1, display: 'none' });
    TweenMax.to('#con4', 0, { delay: 1, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 1, color: 'black' });
    TweenMax.to('.curtain', .7, { delay: 0.25, scaleY: 1, ease: Power4.easeOut });
    TweenMax.to('input', 0, { delay: 1, borderBottom: 'solid black', color: 'black' });

    TweenMax.to('.curtain', 1.3, { delay: 1.5, scaleY: 0, ease: Power4.easeOut });
    TweenMax.to('#panel4-events', 1, { delay: 2.2, x: 0, ease: Back.easeOut.config(4) });
    TweenMax.to('#panel4-events', 0, { delay: 3.2, scaleX: 1, scaleY: 1, transformOrigin: 'top bottom', ease: Back.easeOut.config(4) });
    TweenMax.to('#panel4-events', 1, { delay: 3.2, scaleY: 0.75, scaleX: 0.75, ease: Power4.easeOut });
    TweenMax.to('.fake-panel2', 1, { delay: 3.2, scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('#vslogan4', .3, { delay: 2.9, opacity: 1 });
    TweenMax.to('#social-media4', .3, { delay: 2.9, opacity: 1 });
    TweenMax.to('#language4', .3, { delay: 3, opacity: 1 });
    TweenMax.to('#arrow-action', 0, { delay: 3.35, opacity: 1 });
    TweenMax.to('.curtain', 0, { delay: 2.8, zIndex: '-1' });
    TweenMax.to('.curtain', 0, { delay: 2.8, opacity: 0 });
    TweenMax.to('#arrow-action2', 0.1, { delay: 3.7, opacity: 1 });
    TweenMax.to('input', 1, { delay: 2.2, borderBottom: 'solid #ebebeb', color: '#ebebeb' });
    TweenMax.to('.video-tabs', 1, { delay: 2.2, color: '#ebebeb' });
});


document.getElementById('view-contacts').addEventListener('click', function () {

    TweenMax.to('#vslogan5', .7, { delay: 3.4, opacity: 1 });
    TweenMax.to('#social-media5', .7, { delay: 3.4, opacity: 1 });
    TweenMax.to('#language5', .7, { delay: 3.4, opacity: 1 });
    TweenMax.to('.contacts-contents', .7, { delay: 3.4, opacity: 1 });

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
    TweenMax.to('#con3', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con4', 0, { delay: 2, display: 'none' });
    TweenMax.to('#con5', 0, { delay: 2, display: 'flex' });
    TweenMax.to('.video-tabs', 0, { delay: 2, color: 'white' });
    TweenMax.to('input', 0, { delay: 2, borderBottom: 'solid white', color: 'white' });
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
