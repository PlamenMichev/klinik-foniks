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