let val;

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

console.log(document.getElementById('task-title'));

//get things from the element
console.log(document.getElementById('task-title').id);//task-title

//change styling
document.getElementById('task-title').style.background = 'red';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '20px';
// document.getElementById('task-title').style.display = 'none';

//change content



// console.log(val);