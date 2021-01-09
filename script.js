var carouselCont = document.querySelector('.carrossel-cont')



function generateImgs(){
  for(var i=0; i < 4; i++){
    const imagesBlock = `
                          <div id="${i}" class="fade carrosselI-cont">
                            <img class="carrossel-img" src="./assets/carrossel${i}.jpg" alt="">
                          </div>`
    var newCont = carouselCont.innerHTML += imagesBlock;
  }

  carouselCont.innerHTML = newCont
  console.log(newCont);
}

var currentId = 0;

setInterval(function changeImg(){
  var imgCont = document.getElementById(currentId);

  if (imgCont.classList.contains('fade')) {
    imgCont.classList.replace('fade', 'show')
    console.log('pao');
      setTimeout(function changeVerifc(){
        imgCont.classList.replace('show', 'fade')
      }, 1500)
  }
  if(currentId > 2){
    currentId = 0
  } else {currentId++}
  console.log(imgCont);
}, 1500)

generateImgs()