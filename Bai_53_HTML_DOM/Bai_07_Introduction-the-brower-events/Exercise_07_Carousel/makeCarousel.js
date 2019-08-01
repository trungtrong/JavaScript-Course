
let images = carousel.querySelectorAll('li');
let list = carousel.querySelector('ul');

// configuration
let width = 130;
let count = 3; // //shift 3 imgs each time
let maxMarginLeft = -width * (images.length - count);

let position = 0; // ribbon scroll position
let prevButton = carousel.querySelector('.prev');
let nextButton = carousel.querySelector('.next')

// the first sight of prevButton
prevButton.style.opacity = '0.4';

function changeButtonOpacity() {
  if (position === 0) {
    prevButton.style.opacity = '0.4';
  } else {
    prevButton.style.opacity = '1';
  }

  if (position === maxMarginLeft) {
    nextButton.style.opacity = '0.4';
  } else {
    nextButton.style.opacity = '1';
  }
}

prevButton.onclick = function() {
  //shift left 3 imgs
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0);

  list.style.marginLeft = position + 'px';
  changeButtonOpacity();
}


nextButton.onclick = function() {
  //shift right (width * count) =  -130 * 3 = -390px 
  position -= width * count;

  // can only shift the ribbon for (total ribbon length - visible count)
  position = Math.max(position, maxMarginLeft);
  list.style.marginLeft = position + 'px';
  changeButtonOpacity();
}
