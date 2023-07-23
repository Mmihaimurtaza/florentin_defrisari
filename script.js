//navigation
const iconResponsiveBar = document.querySelector('.fa') 
const nav = document.querySelector('.nav');

//slider
let slider=document.querySelector('.slider-items');
let nextSlide=document.querySelector(".right-slide");
let prevSlide=document.querySelector(".left-slide");
const totalSlides=10;
let index=0;


iconResponsiveBar.addEventListener('click' , (e) =>{
	e.preventDefault();
	if(iconResponsiveBar.classList.contains('fa-bars')){
		nav.style.transform = "translateY(0%)";
		iconResponsiveBar.classList.remove("fa-bars");
		iconResponsiveBar.classList.add("fa-close");
	}
	else{
		nav.style.transform = "translateY(-110%)";
		iconResponsiveBar.classList.add("fa-bars");
		iconResponsiveBar.classList.remove("fa-close");
	}


	//iconResponsiveBar.style.visibility = 'hidden';
});



 const createSlides = nrOfSlides =>{
     for(let i=0; i<nrOfSlides;i++){
        const html =  ` <div  class="item ${i==0?'active':''}">
                <img src="img/${i+1}.jpg" />
                <div class="caption">
                </div>
           </div>`;
           slider.insertAdjacentHTML('beforeend', html);
     }
 }

 //call the functions to create image slides
 createSlides(totalSlides);

 //select all the slides and caption elements that have been created for each image slides
 const caption = document.querySelectorAll('.caption');
 const slides = document.querySelector('.slider-items').children;


nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

caption[index].innerHTML = `${index+1} / ${totalSlides}`;
function next(direction){

          
      
   if(direction=="next"){
      slides[index].classList.remove("active");
      index++;
      
       if(index==totalSlides){
        index=0;
       }
       slides[index].classList.add("active");
       
   } 
   else{
           slides[index].classList.remove("active");
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
           slides[index].classList.add("active");
    }

  
 
  caption[index].innerHTML = `${index+1} / ${totalSlides}`;


}



