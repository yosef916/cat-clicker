document.body.innerHTML = '';

var cats = ['1', '2', '3', '4', '5'];

for (var i = 0; i < cats.length; i++) {
  var catList = cats[i];

  var elem = document.createElement('div');
  elem.setAttribute('id', 'allImages');

  var newElem = document.createElement('div');
  newElem.className += 'display';

  var images = document.createElement('img');
  images.className += 'size';
  images.setAttribute('src', 'img/'+ catList +'.jpg');
  
  images.addEventListener('click', (function() {
    images.className= "";
    newElem.appendChild(catList);
  }));

  document.body.appendChild(elem);
  elem.appendChild(images);
  document.body.appendChild(newElem);
};