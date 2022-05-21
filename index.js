document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.getElementById('flower-animation').offsetTop;
  
     if (isVisible) {
       document.getElementById('flower-animation').classList.add('animate-rotate');
     }
  });