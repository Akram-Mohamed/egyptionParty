'use strict'

//variables
const maxLenght=100;
const endDate=new Date('01/09/2023');
const homeOffset=$('#header').offset().top ;
const slideDownOffset=$('#slide-down').offset().top ;
const partyTimeOffset=$('#party-time').offset().top ;
const contactOffset=$('#contact').offset().top ;

// timer 
   let countDownTime=new Date('Sep 30, 2023 12:59:59 PM').getTime();



  
// clicking on header  action button
$('.singer-title').click(function(){
      $('.toggel').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500);
});

// closing side menu
$('.closebtn').click(function () { 
   $('.left-menu').animate({ width: '0px'},0);
   $('#hd-title').animate({ marginLeft: '0px'},300);
});
$('.openNav').click(function () {
   $('.left-menu').animate({width:'200px'},100);
   $('#hd-title').animate({ marginLeft: '200px'},250);
});


//msg-length
$('.msg').keyup(function () {
            let msgLength =   $(this).val().length;
            let remainingLength =maxLenght - msgLength; 
   remainingLength >=0 ? $('.msg-length').text(remainingLength) : $('.msg-length').html('your available character finished ');
});

$('.left-menu a').click(function () {
  let offset = $($(this).attr('href')).offset().top;
  $('html,body').animate({ scrollTop: offset }, 1000);

})

// timer count down 
   let counter=setInterval (function () {
//current date
   let dateNow=new Date().getTime();
//time distance
   let dateDifference = countDownTime - dateNow;

//time converter
   let Days=Math.floor(dateDifference/(1000*60*60*24));
   let Hour=Math.floor( (dateDifference % (1000*60*60*24) ) /(1000*60*60)) ;
   let Mins=Math.floor( (dateDifference % (1000*60*60) ) /(1000*60) );
   let Secound=Math.floor( dateDifference % (1000*60)  /(1000) )  ;
//print this date
   $('.days').text( Days < 10 ? `0${Days}`: Days);
   $('.hours').text(Hour  < 10 ? `0${Hour}`: Hour);
   $('.mins').text(Mins < 10 ? `0${Mins}`: Mins);
   $('.secounds').text(Secound < 10 ? `0${Secound}`: Secound );   

   if (dateDifference < 0) {
      clearInterval(counter);
      $('.party-time').html(`  <div class="end-time text-bg-info  text-dark fw-bolder fs-1"> ! Your party time was end > 3 ! </div>` );
    }
 

      
   }, 1000);


