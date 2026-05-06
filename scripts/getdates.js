const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;
// the above line of code seems super confusing, but really it is grabbing one of the titles of a piece in the html.
// that is what the document.getElementById("lastModified").innerHTML is doing.
// then the document.lastModified is a command. it outputs the information of when the document was last modified.