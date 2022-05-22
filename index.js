document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.getElementById('flower-animation')?.offsetTop;
      isVisiblePage = top > document.getElementById('flower-animation-second')?.offsetTop;
      if(isVisiblePage) {
        document.getElementById('flower-animation-second').classList.add('animate-rotate');
      }

    if (isVisible) {
      document.getElementById('flower-animation').classList.add('animate-rotate');
    }
});

const activateButton = () => {
  const button = document.getElementById('book-button')

  button.classList.remove('disabled')
}

// Modal logic

// Get the modal
const modal = document.getElementById("booking-modal");

// Get the button that opens the modal
const btn = document.getElementById("book-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  if (!btn.classList.contains('disabled')) {
    modal.style.display = "flex";
    document.body.style.overflowY = 'hidden';
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = 'scroll';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = 'scroll';
  }
}

const firstStage = document.getElementsByClassName('first-stage')[0]
const secondStage = document.getElementsByClassName('second-stage')[0]

document.getElementById('submit-book').addEventListener('click', () => {
  firstStage.style.display = 'none'
  secondStage.style.display = 'flex'
})

document.getElementById('great-button').addEventListener('click', () => {
  modal.style.display = "none";
  document.body.style.overflowY = 'scroll';
  firstStage.style.display = 'flex'
  secondStage.style.display = 'none'
})