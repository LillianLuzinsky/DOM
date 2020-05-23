

// val = document;
// val = document.all;//this gives us a collection
// val = document.all[0];//html
// val = document.all[1];//head
// val = document.all[2];//meta charset
// val = document.all.length;//43
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;//task-form
// val = document.forms[0].method;//get
// val = document.forms.method;//indefined - you need to specify which form to access

// val = document.links;//6
// val = document.links[0];
// val = document.links[1].className;
// val = document.links[0].classList;//a collection or list of the classNames
// val = document.links[5];
// val = document.links[5].classList[0];//clear-tasks;
// val = document.links[5].classList[1];//btn
// val = document.links[5].classList[2];//black

// val = document.images;//HTMLCollection[] empty as there are no images
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');//script.js

// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(function(script){
//     console.log(script);
// });


//-------DOM Selectors for single elements
//this will allow you to grab one element by it's id or class

//get element by id
//document.getElementById()

// console.log(document.getElementById('task-title'));

// //get things from the element
// console.log(document.getElementById('task-title').id);//task-title

// //change styling
// document.getElementById('task-title').style.background = 'red';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '20px';
// // document.getElementById('task-title').style.display = 'none';


// //create a variable instead of repeating document.getElementById() so many times
// const taskTitle = document.getElementById('task-title');


// //change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';

// //if we want to insert HTML --- why?
// taskTitle.innerHTML = '<span style="color:brown">Tasks Lists</span>';



//-----QUERY SELECTOR------
//document.querySelector() = newer and more powerful

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));//it'll give you the first one

// document.querySelector('li').style.color = 'red';

// document.querySelector('li:last-child').style.color = 'blue';//use CSS pseudo class

// document.querySelector('li:nth-child(3)').style.color = 'green';

// document.querySelector('li:nth-child(4)').textContent = 'hello world';

// document.querySelector('li:nth-child(odd)').style.background = 'yellow';
// document.querySelector('li:nth-child(even)').style.background = 'orange';


//GET ELEMENTS BY CLASSNAME
//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//get ElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.background = 'orange';
// lis[3].textContent = 'Hello';
// lis[3].style.color = 'orange';

// //convert HTML collection into an array

// lis = Array.from(lis);
// lis.textContent = 'hello';
// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`
// })

// console.log(lis);


//querySelectorAll(), which returns a node list
//it allows us to return a forEach without having to convert it into an array

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;  
})

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li){
    li.style.background = 'orange';  
});

liEven.forEach(function(li){
    li.style.background = 'yellow';
})

console.log(items);//NodeList

