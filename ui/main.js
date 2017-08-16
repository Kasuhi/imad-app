console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img = document.getElementById('hi');
img.onClick = function () {
    var interval = setInterval (moveright, 100);
 
};