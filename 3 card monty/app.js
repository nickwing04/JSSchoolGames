//images to hide under cards
var pics = [
	'img/Queen.jpg' ,
	'img/ace.jpg' ,
	'img/Ace1.jpg' ,
	'img/back.jpeg'
]

var indices = [0, 1, 2];

var images = document.getElementsByTagName('img');

var counter = document.getElementById('counter');

var count = 0;

var btn = document.querySelector('.btn');

var overlay = document.querySelector('.reveal')

//shuffle the array numbers randomly
function shuffleIds(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

//clicks on a card to turn it over.
function turnCards() {
	shuffleIds(indices);
	var i = 0
	var src = '';
	for (i = 0; i < indices.length; i++) {
		this.setAttribute('src' , pics[indices[i]]);
		images[i].removeEventListener('click' , turnCards);

	}
	src = this.getAttribute('src');
	if (src === 'img/Queen.jpg') {
		count ++
		showCards();
	}
	indices.pop(i);
	updateCounter();

}

function updateCounter() {
	    if (count === 1) {
			counter.innerHTML = count + ' time';
		} else {
			counter.innerHTML = count + ' times';
		}
}

function showCards() {
	overlay.style = "display: block";
	timeShow = window.setTimeout(function() {
	 overlay.style = "display: none";
	 }, 1000);

}

// "Try Again" button to reset the card images
function tryAgain() {
	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute('src' , pics[3]);
		images[i].addEventListener('click' , turnCards);
	}
	indices = [0, 1, 2];
}


for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click' , turnCards);
}

// "Try Again" button
btn.addEventListener('click' , tryAgain);
