document.body.innerHTML = '';

var nums = ['1', '2', '3', '4', '5'];

for (var i = 0; i < nums.length; i++) {
  var num = nums[i];

  var elem = document.createElement('div');
  elem.setAttribute('id', 'allImages');

  var newElem = document.createElement('div');
  newElem.className += 'display';

  var images = document.createElement('img');
  images.className += 'size';
  images.setAttribute('src', 'img/'+ num +'.jpg');
  
  images.addEventListener('click', (function() {
		this.removeClass('display');
		newElem.appendChild(num);
	}));

  document.body.appendChild(elem);
  elem.appendChild(images);
  document.body.appendChild(newElem);
};