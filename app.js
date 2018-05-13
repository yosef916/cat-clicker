
/* ======= Model ======= */

var model = {
  currentCat: null,
  cats: [
  {
    clickCount : 0,
    name : 'Tabby',
    imgSrc : 'img/1.jpg'
  },
  {
    clickCount : 0,
    name : 'Tiger',
    imgSrc : 'img/2.jpg'
  },
  {
    clickCount : 0,
    name : 'Scaredy',
    imgSrc : 'img/3.jpg'
  },
  {
    clickCount : 0,
    name : 'Shadow',
    imgSrc : 'img/4.jpg'
  },
  {
    clickCount : 0,
    name : 'Sleepy',
    imgSrc : 'img/5.jpg'
    }
  ]
};

/* ======= Octopus ======= */

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

/* ======= View ======= */

var catView = {
  init: function() {
    this.catElem = document.getElementById("cat");
    this.catNameElem = document.getElementById("cat-name");
    this.catImgElem = document.getElementById("cat-img");
    this.catCountElem = document.getElementById("cat-count");

    this.catImgElem.addEventListener('click', function() {
      octopus.incrementCounter();
  });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.catNameElem.textContent = currentCat.name;
    this.catImgElem.src = currentCat.imgSrc;
    this.catCountElem.textContent = currentCat.clickCount;
  }
};

var catListView = {
  init: function () {
    this.catListElem = document.getElementById("cat-list");
    this.render();
  },

  render: function() {
    var cat, elem, i;

    var cats = octopus.getCats();

    this.catListElem.innerHTML = '';

    for (i = 0; i < cats.length; i++) {
      cat = cats[i];

      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      }(cat));

      this.catListElem.appendChild(elem);
    }
  }
};
octopus.init();