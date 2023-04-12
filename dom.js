var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
// gives error
var title = document.getElementById('title');
// title.style.color = 'green';
// console.log (title)
for (var i =0;i  < title.length ; i++){
    title[i].style.color   = 'green';
}