document.getElementById('events-items-1').addEventListener('click', function() {
    TweenMax.to('.events-details', 1.5, { scaleX: 1, ease: Power4.easeOut });
    TweenMax.to('.events-details-panel-1', 0, { delay: 1.6, display: 'block' });
    TweenMax.to('.events-details-panel-2', 0, { delay: 1.6, display: 'flex' });
    TweenMax.to('.events-details-panel-1', 0.4, { delay: 1.7, opacity: 1 });
    TweenMax.to('.events-details-panel-2', 0.4, { delay: 1.7, opacity: 1 });
})




document.getElementById('events-details-back-btn').addEventListener('click', function() {
    TweenMax.to('.events-details', 1.5, { delay: 0.5, scaleX: 0, ease: Power4.easeOut  });
    TweenMax.to('.events-details-panel-1', 0, { delay: 0.45, display: 'block' });
    TweenMax.to('.events-details-panel-2', 0, { delay: 0.45, display: 'flex' });
    TweenMax.to('.events-details-panel-1', 0.4, { opacity: 0 });
    TweenMax.to('.events-details-panel-2', 0.4, { opacity: 0 });
})