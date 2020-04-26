document.getElementById('trigger-menu').addEventListener('click', function() {
    TweenMax.to('.mmenu-expand', 1, { scaleX: 1, ease: Expo.easeIn });
    TweenMax.to('.mmenu', .3, { opacity: 0, zIndex: '1999'});
    TweenMax.to('.mmenu-white', .3, { opacity: 0, zIndex: '1999'});
    TweenMax.to('.mmenu-close', .3, { delay: .3, opacity: 1, zIndex: '2000'});
    TweenMax.to('.mtabs', .3, { delay: 1, opacity: 1});
    TweenMax.to('.vertical-mmenu-expand', 1, { scaleY: 1, ease: Power4.easeOut});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 1.5, WebkitTransformOrigin: 'bottom'});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 1.5, MozTransformOrigin: 'bottom'});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 1.5, OTransformOrigin: 'bottom'});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 1.5, MsTransformOrigin: 'bottom'});
})

document.getElementById('trigger-close-menu').addEventListener('click', function() {
    TweenMax.to('.mmenu-expand', 1, { scaleX: 0, ease: Expo.easeIn });
    TweenMax.to('.mmenu-expand', 0, { transformOrigin: 'right'});
    TweenMax.to('.mmenu', .3, { delay: 0.3, opacity: 1, zIndex: '2000'});
    TweenMax.to('.mmenu-white', .3, { delay: 0.3, opacity: 1, zIndex: '2000'});
    TweenMax.to('.mmenu-close', .3, { opacity: 0, zIndex: '1999'});
    TweenMax.to('.mtabs', .3, { opacity: 0});
    TweenMax.to('.vertical-mmenu-expand', 1, { delay: 1, scaleY: 0, ease: Power4.easeOut});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 2, WebkitTransformOrigin: 'top'});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 2, MozTransformOrigin: 'top'});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 2, OTransformOrigin: 'top'});
    TweenMax.to('.vertical-mmenu-expand', 0, { delay: 2, MsTransformOrigin: 'top'});
})