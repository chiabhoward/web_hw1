let images = ["https://image1.thenewslens.com/2021/3/2p2me9furggnfmx3xqgcqxnvng6nth.jpeg?h=628&w=1200",
"http://pic.pimg.tw/a7526746/1390404211-628325379_l.jpg",
"https://weirdtaste.files.wordpress.com/2020/03/how-i-met-your-mother-01.jpg",
"https://cdn.prod.www.spiegel.de/images/bb8879e6-0001-0004-0000-000000495934_w948_r1.77_fpx42.65_fpy49.86.jpg"];

var image = document.getElementById("display");
var imageSrc = document.getElementsByClassName('image-viewer__display-source-wrapper')[0];
var prevButton = document.getElementsByClassName('image-viewer__main')[0].children[0].children[0];
var nextButton = document.getElementsByClassName('image-viewer__main')[0].children[2].children[0];

let current = 0;
let maxImage = images.length-1;

function nextImage() {
    console.log("Right button pressed");
    current++;
    if (current >= maxImage) {
        console.log("Right reach end");
        current = maxImage;
	    nextButton.classList.add('disabled');
    }
    prevButton.classList.remove('disabled');
    image.onload = function() {
        image.src = images[current];
    }
    image.src = "./images/loading.gif";
    imageSrc.innerHTML = "source: " + images[current];
}

function prevImage() {
	console.log("Left button pressed");
    current--;
    if (current <= 0) {
        console.log("Left reach end");
        current = 0;
	    prevButton.classList.add('disabled');
    }
    nextButton.classList.remove('disabled');
    image.onload = function() {
        image.src = images[current];
    }
    image.src = "./images/loading.gif";
    imageSrc.innerHTML = "source: " + images[current];
}

function showSource() {
    imageSrc.innerHTML = "source: " + images[current];
}
