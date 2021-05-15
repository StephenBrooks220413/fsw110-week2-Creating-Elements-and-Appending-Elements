var intro = document.createElement('h1');
var pText = document.createElement('p');

function toggle() {
    intro.textContent = 'Welcome to my JS site';
    intro.style.fontSize = '3em';
    intro.style.color = 'red';
    intro.style.textAlign = 'center';
    document.body.appendChild(intro);
}

function paragraph() {
    pText.textContent = 'All of this was created with Javascript';
    pText.style.textAlign = 'center';
    pText.style.color = 'blue';
    document.body.appendChild(pText);
}

function list() {
    var slides = ["slide 1", "slide 2", "slide 3"]
    var str = '<ol>'

    slides.forEach(function(slide) {
    str += '<li>'+ slide + '</li>';
    }); 

    str += '</ul>';
    document.getElementById("slideContainer").innerHTML = str;
}

toggle();
paragraph();
list();