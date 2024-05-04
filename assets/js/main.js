"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 100 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 69; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});
    

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header


// Initialize Gumshoe
var spy = new Gumshoe('#navigation a', {
	offset: 69 //page .header heights
});


/* ======= Countdown ========= */
// set the date we're counting down to
var countDownDate = new Date("June 06, 2024 09:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = '<div class="col-6 col-md-3"> <div class="item"><div class="number">' + days + '</div>' + '<div class="unit"> Days </div></div></div>'  
                                                    +'<div class="col-6 col-md-3"> <div class="item"><div class="number">' + hours + '</div>' + '<div class="unit"> Hours </div></div></div>'
                                                    +'<div class="col-6 col-md-3"> <div class="item"><div class="number">' + minutes + '</div>' + '<div class="unit"> Minutes </div></div></div>'
                                                    +'<div class="col-6 col-md-3"> <div class="item"><div class="number">' + seconds + '</div>' + '<div class="unit"> Seconds </div></div></div>' 
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}, 1000);
