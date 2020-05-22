let val;

val = document;
val = document.all;//this gives us a collection
val = document.all[0];//html
val = document.all[1];//head
val = document.all[2];//meta charset
val = document.all.length;//43
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;//task-form
val = document.forms[0].method;//get
val = document.forms.method;//indefined - you need to specify which form to access


console.log(val);