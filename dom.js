/*
console.log(document.URL);
console.log(document.title);
console.log(document.domain);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);
console.log(documnet.images);
*/
//console.log(document.getElementById('header-title'))
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText= 'goodby';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3> Hello </h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';

const headerTitle =document.getElementById('header-title');
const header=document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

// Select the "Add Items" heading element
const addItemHeading = document.querySelector('#main h2:first-of-type');

// Change the font color to green
addItemHeading.style.color = 'green';

// Make the text bold
addItemHeading.style.fontWeight = 'bold';
