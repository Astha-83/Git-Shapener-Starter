var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
// gives error
var title = document.getElementById('title');
// title.style.color = 'green';
// console.log (title)
for (var i =0;i  < title ; i++){
    title[i].style.color   = 'green';
}
var items = document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[4]);
for (var i =0;i  < items.length ; i++){
    items[i].style.color   = 'green';

}
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[4]);
li[4].textContent ="Hello "
li[4].style.fontWeight ="bold "
for (var i =0;i  < li.length ; i++){
    li[i].style.backgroundColor   = '#f4f4f4';

}



