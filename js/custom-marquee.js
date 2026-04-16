$(function(){
    $('.de-marquee-list').marquee({
        direction: 'left',
        duration: 30000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    $('.wm-carousel').marquee({
        direction: 'left',
        duration: 20000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
    });
});