class Animations {
    static revealFeed(e) {
        anime({
            targets: '.add-button',
            translateX: 340,
            duration: 1000,
            easing: 'easeOutBack',
          });   
          anime({
            targets: '.svg',
            opacity: 1,
            translateX: -1200,
            duration: 900,
            easing: 'easeOutBack',
          });    
          anime({
            targets: '.searchcenter',
            translateX: -650,
            duration: 1000,
            easing: 'easeOutBack',
          }); 
    }
    static revealGo(e) {
        anime({
            targets: '.submit-button',
            translateX: 1040,
            duration: 1000,
            easing: 'easeInOutElastic',
        })
    }
    static photoSubmitReveal(e){
        e.preventDefault()
        anime({
            targets: '.addpopup',
            opacity: 0.8,
            translateY: -255,
            height: 230,
            duration: 500,
            easing: 'easeInQuad',
          });    
    }
    static photoSubmitHide(e) {
        anime({
            targets: '.addpopup',
            opacity: 0.0,
            translateY: -100,
            height: 0,
            duration: 500,
            easing: 'easeInQuad',
        })
    }
}