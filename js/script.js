'use strict';
//MUSTACHE
(function() {
var slides = document.getElementById('template-carousel-slides').innerHTML;
Mustache.parse(slides);

var slideList = '';

for(var i = 0; i < mySlides.length; i++){
  slideList += Mustache.render(slides, mySlides[i]);
}

results.insertAdjacentHTML('beforeend', slideList);
})();

//FLICKITY
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
});

//FUNCTION "BACK TO FIRST SLIDE"
var firstSlide = document.querySelector('.restartButton');
firstSlide.addEventListener('click', function () {
  flkty.select(0);
});

//PROGRESS BAR
var progressBar = document.querySelector('.progress-bar');
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
//INIT MAP
(function(){ 
  window.initMap = function() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: mySlides[0].coords
		});

		//ADD MARKERS TO MAP
    var markers = [];
    for ( var i = 0; i < mySlides.length; i++ ) {
      markers.push(new google.maps.Marker({
        position: mySlides[i].coords,
        map: map,
        marker: i
      }))
      markers[i].addListener("click", function() {
        flkty.select(this.marker);
      });

      //CHANGE SLIDE = CHANGE MARKER
      flkty.on("change", function(index) {
        map.panTo(mySlides[index].coords);
        map.setZoom(8);
      });
    }
  };






/*
//GOOGLE MAPS
(function(){ 
	
	// Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  window.initMap = function() {
		
		// Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne.
		//var uluru = {lat: 35.370566, lng: 24.477572};
		
		// W zmiennej map zapisujemy nową instancję obiektu Map. 
		var map = new google.maps.Map(document.getElementById('map'), {
			// Podajemy opcje mapy, np. zoom i punkt wycentrowania mapy.
			zoom: 4,
			center: mySlides[0].coords
		});
		//ADD MARKERS TO MAP
		var markers = [];
		for(var i = 0; i < mySlides.length; i++) {
			markers.push = (new google.maps.Marker ({
			position: mySlides[i].coords,
			map: map,
			id: i
			}));
			markers[i].addListener('click', function() {
				flkty.select(this.id);
			});
			// Change map position after slide change
      flkty.on("change", function(index) {
        map.panTo(slideData[index].coords);
        map.setZoom(12);
			});
		}
	};	*/ 
})();  