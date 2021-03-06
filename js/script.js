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
