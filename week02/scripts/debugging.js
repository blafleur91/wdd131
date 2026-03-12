// get elements from the document
const radiusOutput = document.getElementById('radius');
// below is the line of code they have you start with. the reason it doesn't work is because you are trying to get
// the element the wrong way. it is using the querySelector, which is normally for getting an element by its name.
// So one way to fix it would be to switch it to getElementById. However, if you add a pound sign in front of the
// area, the querySelector will know it is trying to grab something by its ID, not its container name.
// const areaOutput = document.querySelector('area');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

// for variables, there are two ways to initialize them. one is to use a const. this makes it more difficult to change.
// the other option is to use let, which makes it super easy and work like a variable from python.
// however, in javascript, they want you to use const as much as possible.
let radius = 10;
area = PI * radius * radius;
// radiusOutput is a const, so I can't change that, however I can change its textContent
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;