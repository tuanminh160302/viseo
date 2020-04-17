var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.ptmcon-2',
    triggerHook: 0,
})
scene.addIndicators()
scene.setClassToggle('.triggerbg', 'changecolor') //#1a172a
scene.addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: '.ptmcon-2',
    triggerHook: 0,
})
// scene.addIndicators()
scene.setClassToggle('.mmenu', 'mmenu-white') //#1a172a
scene.addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: '.ptmcon-2',
    triggerHook: 0,
})
// scene.addIndicators()
scene.setClassToggle('.mgalleryintro', 'introchange') //#1a172a
scene.addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: '.ptmcon-2',
    triggerHook: 0,
})
// scene.addIndicators()
scene.setClassToggle('.mobile', 'mobilechange') //#1a172a
scene.addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: '.mbrand',
    triggerHook: 0,
})
// scene.addIndicators()
// scene.setClassToggle('.appear-p', 'appear') 
.setTween(TweenMax.to('.appear-p', .2, { opacity: 1, delay: .2}))
scene.addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: '.mbrand',
    triggerHook: 0,
})
// scene.addIndicators()
// scene.setClassToggle('.appear-img', 'disappear')
.setTween(TweenMax.to('.appear-img', .2, { opacity: 0, delay: 0}))

scene.addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: '.mbrand',
    triggerHook: 0,
})
// scene.addIndicators()
// scene.setClassToggle('.appear-slogan', 'disappear')
.setTween(TweenMax.to('.appear-slogan', .2, { opacity: 0, delay: 0}))
scene.addTo(controller);


// var scene = new ScrollMagic.Scene({
//     triggerElement: '.mcon-3',
//     triggerHook: 0.8,
// })
// // scene.addIndicators()
// scene.setClassToggle('.triggerbg', 'changecolor2') //red
// scene.addTo(controller);


// var scene = new ScrollMagic.Scene({
//     triggerElement: '.mcon-4',
//     triggerHook: 0.8,
// })
// // scene.addIndicators()
// scene.setClassToggle('.triggerbg', 'changecolor3') //black
// scene.addTo(controller);



// var scene = new ScrollMagic.Scene({
//     triggerElement: '.mcon-5',
//     triggerHook: 0.8,
// })
// // scene.addIndicators()
// scene.setClassToggle('.triggerbg', 'changecolor4') //yellow
// scene.addTo(controller);

