const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;  //start at the first slide
let intervalId = null;


//Instead of just call the initializeSlider function, you can add and eventListener to 
//wait for all the DOM content to load, then display the first image

document.addEventListener('DOMContentLoaded', initializeSlider)

//declare a function to initilize the slider ti populate the browser with the first img when the function is called
function initializeSlider() {

    if(slides.length > 0) {

        slides[slideIndex].classList.add('displaySlide');
    
        //use the setInterval function and call the nextSlide function after a given amount of seconds
        intervalId = setInterval(nextSlide, 5000);
        
    }
   
}

//function to show the index of the next slide we wld like to go to
function showSlide(index) {

    //if we reach the end of our slide we need to rest the slide index and set it back to 0
//if we reach the end, set it back to the first image
    if(index >= slides.length) {
        slideIndex = 0;
}
//if we go backwards to the previous button: if we're on the first slide and we it the prev button, that will send us back to the last slide
else if(index < 0) {
    slideIndex = slides.length - 1;
}

    //for each slide, take the slide, access it's class list then remove a class from the classList
    //which is displaySlide

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
//add the class displaySlide to the next slide
slides[slideIndex].classList.add('displaySlide');

}   


//function to show the previous slide
function prevSlide(){

    //clear the timer if the prev button is clicked
    clearInterval(intervalId);

    //decrement the slide index
    slideIndex--;
     
    //call the showSlide function and pass in thecureent index
    showSlide(slideIndex);
}

//function for the next slide
function nextSlide() {

    //increment the slide index by 1, call the showSlide  function, pass intheslideIndex after incrementing it
    slideIndex++;
    showSlide(slideIndex);

}

