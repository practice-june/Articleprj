const moonPath = "M29 50C29 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 29 22.3858 29 50Z";

const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

//Made clickable
darkMode.addEventListener('click', ()=>{
    const timeline = anime.timeline({
        duration : 800,
        easing : 'easeOutExpo'
    });
    //Add different animation to the timeline
    timeline.add({
        targets : '.sun',
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets : '#darkMode',
        rotate : 320
    }, '-= 350')
    .add({
        targets : 'section',
        backgroundColor : toggle ? 'rgb(225,225,225)' : 'rgb(22,22,22)',
        color : toggle ? 'rgb(22,22,22)' : 'rgb(225,225,225)'
    }, '-= 750');

    //everytime I click on the sun I want that toggle to switch
    if(!toggle){
        toggle = true;

    }else{
        toggle = false;

    }

    
});