let ticking = false;

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}


var color = document.getElementById('color');	//Color Code
var color2 = document.getElementById('color2');	//Color Code


var isPause1 = false;
var timer1;

var isPause2 = false;
var timer2;

var isPause3 = false;
var timer3;

var isPause4 = false;
var timer4;

var isPause5 = false;
var timer5;

var start1 = true;
var start2 = true;
var start3 = true;
var start4 = true;
var start5 = true;

function stopTimer1(){
  console.log("stoptimer")
    clearInterval(timer1);
    isPause1 = true;
}

function stopTimer2(){
  console.log("stoptimer")
    clearInterval(timer2);
    isPause2 = true;
}

function stopTimer3(){
  console.log("stoptimer")
    clearInterval(timer3);
    isPause3 = true;
}

function stopTimer4(){
  console.log("stoptimer")
    clearInterval(timer4);
    isPause4 = true;
}

function stopTimer5(){
  console.log("stoptimer")
    clearInterval(timer5);
    isPause5 = true;
}

window.addEventListener('DOMContentLoaded', () => {

  

  const options = {
    threshold: 0.6 // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
  }

  var jbAry = [ 'introduction', 'request-response' , 'endpoints--cities-overview' ,
    'endpoints--city-detail' , 'endpoints--city-config' ,'endpoints--city-spots-overview' ,'endpoints--city-spot-detail' , 'endpoints--city-icons-overview','links'];
  

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {

			const id = entry.target.getAttribute('id');

			if (entry.intersectionRatio > 0) {
        console.log(id)
        console.log(jbAry.indexOf(id))
        console.log(jbAry[jbAry.indexOf(id)])
        for (let tracking of document.querySelectorAll(".tracking-in-expand")) tracking.classList.add("loaded");
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        if(jbAry.indexOf(id) != 0){
        document.querySelector(`nav li a[href="#${jbAry[jbAry.indexOf(id)-1]}"]`).parentElement.classList.remove('active');
        }
        if(id.indexOf("request") != -1){
          tag()
          tag2()
          tag3()
          tag4()
        }
        
        if(jbAry.indexOf(id) != 8){
          document.querySelector(`nav li a[href="#${jbAry[jbAry.indexOf(id)+1]}"]`).parentElement.classList.remove('active');
        }

        if(id.indexOf("endpoint") != -1){
          document.querySelector(`nav li a[href="#endpoints"]`).parentElement.classList.add('active');
        }else{
          document.querySelector(`nav li a[href="#endpoints"]`).parentElement.classList.remove('active');
        }

        if(id.indexOf("cities-overview") != -1){
          stopTimer2();
          stopTimer3();
          stopTimer4();
          stopTimer5();
          isPause1 = false
          if(start1){
            timer1 = setInterval(fadeOut1, 4000);
          }
          start5 = true
          start4 = true
          start3 = true
          start2 = true
          start1 = false
           
        }

         if(id.indexOf("city-detail") != -1){
           stopTimer1();
           stopTimer3();
           stopTimer4();
           stopTimer5();
           isPause2 = false
           if(start2){
           timer2 = setInterval(fadeOut2, 3000);
           }
           start5 = true
            start4 = true
           start3 = true
           start2 = false
           start1 = true
        }

        if(id.indexOf("city-config") != -1){
          stopTimer2();
          stopTimer1();
          stopTimer4();
          stopTimer5();
          isPause3 = false
          if(start3){
          timer3 = setInterval(fadeOut3, 3000);
          }
          start5 = true
          start4 = true
          start3 = false
          start2 = true
          start1 = true
       }

       if(id.indexOf("spots-overview") != -1){
        stopTimer2();
        stopTimer1();
        stopTimer3();
        stopTimer5();
        isPause4 = false
        if(start4){
        timer4 = setInterval(fadeOut4, 3000);
        }
        start5 = true
        start4 = false
        start3 = true
        start2 = true
        start1 = true
     }

     if(id.indexOf("spot-detail") != -1){
      stopTimer2();
      stopTimer1();
      stopTimer4();
      stopTimer3();
      isPause5 = false
      if(start5){
      timer5 = setInterval(fadeOut5, 3000);
      }
      start5 = false
      start4 = true
      start3 = true
      start2 = true
      start1 = true

      
   }

  

        
			}else{
      }
       
		});
	}, options);

  function arrayset(index){
    console.log("들어오긴하냐")
    for(var i=0; i<jbAry.length; i++) {
      if(i=index){
        console.log('iiiii')
      }
  }
  }

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});

var dateNow = Date.now();
timePassed = Date.now() - dateNow;

function handleScroll() {
  ticking = false;

  const upOnScrollElems = document.querySelectorAll('.up-on-scroll');
  upOnScrollElems.forEach(elem => {
    if (isElementUnderBottom(elem)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  });

  const changeBgSection = document.querySelector('.background-change-wrap');
  const changeBgImg = document.querySelector('.background-change-wrap > div');
  const text = document.getElementById('hi')
  const textcolor = document.getElementById('txtcolor')
  const {top: bgTop, height: bgHeight} = changeBgSection.getBoundingClientRect();
  if (bgTop < 0) {
    const rate2 = (-1) * bgTop / 4;
    const ratee = (-1) * bgTop
    const rate = Math.floor((-1) * bgTop/100);
    const rate3 = (-1) * bgTop / 50;
    const rate4 = bgHeight/80
    text.style.opacity = `${(100-rate2/5) / 100}`;
    if(rate >= bgHeight/98){
        color2.style.backgroundColor = "#ffffff"
        color.style.backgroundColor = "#ffffff"
        textcolor.style.color = "#000000"
    }else{
      color2.style.backgroundColor = "#000000"
      color.style.backgroundColor = "#000000"
      textcolor.style.color = "#ffffff"
    }

    
    console.log(rate)
    //console.log(bgHeight/98)
    document.getElementById("notebook").src = "notebook/scene"+rate+".jpg"
  } else {
    changeBgImg.style.filter = 'none';
        changeBgImg.style.opacity = `1`;
  }
}

function requestTick() {
  if(!ticking) {
    requestAnimationFrame(handleScroll);
  }
  ticking = true;
}

var contentWayPoint = function() {
  var i = 0;
  $('.animate-box').waypoint( function( direction ) {

    if( direction === 'down' && !$(this.element).hasClass('animated') ) {
      
      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .animate-box.item-animate').each(function(k){
          var el = $(this);
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn animated');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated');
            } else {
              el.addClass('fadeInUp animated');
            }

            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });
        
      }, 100);
      
    }

  } , { offset: '85%' } );
};

 window.addEventListener('scroll', requestTick);
 window.addEventListener('scroll', handleScroll);

 function tag () {
  var progress = document.getElementById('progressTag');
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 0.7

  function animator () {
    progress.value = progress.value + interval
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress.value = end
    }
  }

  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}

function tag2 () {
  var progress = document.getElementById('progressTag2');
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 0.45

  function animator () {
    progress.value = progress.value + interval
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress.value = end
    }
  }

  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}

function tag3 () {
  var progress = document.getElementById('progressTag3');
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 0.6

  function animator () {
    progress.value = progress.value + interval
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress.value = end
    }
  }

  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}

function tag4 () {
  var progress = document.getElementById('progressTag4');
  let interval = 1
  let updatesPerSecond = 1000 / 60
  let end = progress.max * 0.4

  function animator () {
    progress.value = progress.value + interval
    if ( progress.value + interval < end){
      setTimeout(animator, updatesPerSecond);
    } else { 
      progress.value = end
    }
  }

  setTimeout(() => {
    animator()
  }, updatesPerSecond)
}

var firstArray = new Array();

var img_tracker1 = true;
var img_tracker2 = true;
var img_tracker3 = true;
var img_tracker4 = true;
var img_tracker5 = true;
var pic = document.getElementById("introImg");

function changeImg1()
{
    if (img_tracker1)
    {
        pic.src = "img/checkpage.png";
        img_tracker1 = false;
    }else{
      pic.src = "img/home.png";
        img_tracker1 = true;
    }
}

function changeImg2()
{
    if (img_tracker2)
    {
        pic.src = "img/opencv.png";
        img_tracker2 = false;
    }else{
      pic.src = "img/facecheck.png";
        img_tracker2 = true;
    }
}

function changeImg3()
{
    if (img_tracker3)
    {
        pic.src = "img/care.png";
        img_tracker3 = false;
    }else{
      pic.src = "img/moisture.png";
        img_tracker3 = true;
    }
}

function changeImg4()
{
    if (img_tracker4)
    {
        pic.src = "img/diethome.png";
        img_tracker4 = false;
    }else{
      pic.src = "img/dietmypage.png";
        img_tracker4 = true;
    }
}

function changeImg5()
{
    if (img_tracker5)
    {
        pic.src = "img/ruller.png";
        img_tracker5 = false;
    }else{
      pic.src = "img/dietwrite.png";
        img_tracker5 = true;
    }
}


function fadeIn1()
{
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");    
}

function fadeIn2()
{
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");    
}

function fadeIn3()
{
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");    
}

function fadeIn4()
{
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");    
}

function fadeIn5()
{
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");    
}


function fadeOut1()
{if(!isPause1){
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
    pic.addEventListener("transitionend", function x()
    {
        pic.removeEventListener("transitionend", x);
        changeImg1();
        fadeIn1();
    });
  }
}

function fadeOut2()
{if(!isPause2){
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
    pic.addEventListener("transitionend", function x()
    {
        pic.removeEventListener("transitionend", x);
        changeImg2();
        fadeIn2();
    });
  }
}

function fadeOut3()
{if(!isPause3){
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
    pic.addEventListener("transitionend", function x()
    {
        pic.removeEventListener("transitionend", x);
        changeImg3();
        fadeIn3();
    });
  }
}
function fadeOut4()
{if(!isPause4){
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
    pic.addEventListener("transitionend", function x()
    {
        pic.removeEventListener("transitionend", x);
        changeImg4();
        fadeIn4();
    });
  }
}

function fadeOut5()
{if(!isPause5){
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");
    pic.addEventListener("transitionend", function x()
    {
        pic.removeEventListener("transitionend", x);
        changeImg5();
        fadeIn5();
    });
  }
}

function showPopup1(hasFilter) {
	const popup = document.querySelector('#popup1');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide1');
}

function closePopup1() {
	const popup = document.querySelector('#popup1');
  popup.classList.add('hide1');
}

function showPopup2(hasFilter) {
	const popup = document.querySelector('#popup2');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide2');
}

function closePopup2() {
	const popup = document.querySelector('#popup2');
  popup.classList.add('hide2');
}


function showPopup3(hasFilter) {
	const popup = document.querySelector('#popup3');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide3');
}

function closePopup3() {
	const popup = document.querySelector('#popup3');
  popup.classList.add('hide3');
}


function showPopup4(hasFilter) {
	const popup = document.querySelector('#popup4');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide4');
}

function closePopup4() {
	const popup = document.querySelector('#popup4');
  popup.classList.add('hide4');
}


function showPopup5(hasFilter) {
	const popup = document.querySelector('#popup5');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide5');
}

function closePopup5() {
	const popup = document.querySelector('#popup5');
  popup.classList.add('hide5');
}


function showPopup6(hasFilter) {
	const popup = document.querySelector('#popup6');
  
  if (hasFilter) {
  	popup.classList.add('has-filter');
  } else {
  	popup.classList.remove('has-filter');
  }
  
  popup.classList.remove('hide6');
}

function closePopup6() {
	const popup = document.querySelector('#popup6');
  popup.classList.add('hide6');
}



