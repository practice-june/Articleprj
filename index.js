// alert("check-list for Rocco");


// 1. Let's make Darkmode & Daymode button!

// Drew in Figma to get math info.
const moonPath = "M29 50C29 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 29 22.3858 29 50Z";

const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

const darkMode = document.querySelector('#darkMode');

let toggle = false;

//Made Darkmode clickable
darkMode.addEventListener('click', ()=>{
    const timeline = anime.timeline({
        duration : 800,
        easing : 'easeOutExpo'
    });

    
    if(document.querySelector('#mode').innerHTML==='Dark Mode'){document.querySelector('#mode').innerHTML = 'Day Mode';
    }else{
        document.querySelector('#mode').innerHTML = 'Dark Mode';
    }
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
        targets : '#wrap',
        backgroundColor : toggle ? '#ffffff' : '#000000',
        color : toggle ? '#000000' : '#ffffff'
    }, '-= 750')
    .add({
        targets : 'h1',
        color : toggle ? '#000000' : '#ffffff'
    }, '-= 750');

    //everytime I click on the sun I want that toggle to switch
    if(!toggle){
        toggle = true;

    }else{
        toggle = false;

    }    
});


// 2. Let's make carousel slide img

window.onload = function(){
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    
    
    //Button
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    
    //Counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;
    
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    //Make Buttons clickable both side
    nextBtn.addEventListener('click',()=>{
        if(counter >= carouselImages.length -1) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter)+'px)';
    });
    
    prevBtn.addEventListener('click',()=>{
        if(counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter)+'px)';
    });
    
    carouselSlide.addEventListener('transitionend', ()=>{
        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length -2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter)+'px)';
        }
        if(carouselImages[counter].id === 'firstClone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter)+'px)';
        }
    
    })};

    

// 3. Let's make Infinitely load content 

let haveHitBottom = false;

let theStateOfTheInterface = (event)=>{
    let winH = document.documentElement.clientHeight
    let docH = document.documentElement.scrollHeight
    let winY = window.scrollY
    let maxY = docH - winH
    let allSections = ''
    
    if(winY >= maxY){
        document.querySelector('.more').innerHTML += `
            <li><a href="">
				<div><img src="img/more1.jpg" alt=""></div>
				<div><span>Don't judge there wines at the LCBO by their labels</span></div>
			</a></li>
            `
            haveHitBottom = true;
    };

    
// 4. Let's make state-of-the-interface
    
document.querySelectorAll('article').forEach(($sec) => {
    
    let secH = $sec.scrollHeight
    let topPx = $sec.offsetTop
    let botPx = topPx + secH
    let seenThese = ''
        
    
    if (winY >= topPx && winY < botPx) {
              seenThese = 'class= "seen"' 
     }
    
    allSections += `<li ${seenThese}><a href="$">${ $sec.querySelector('h5').textContent }</a></li>`
        })
    
    
    document.querySelector('.panel').innerHTML = allSections

            
}
     
    window.addEventListener('load', theStateOfTheInterface)
    window.addEventListener('scroll', theStateOfTheInterface)
    window.addEventListener('resize', theStateOfTheInterface)