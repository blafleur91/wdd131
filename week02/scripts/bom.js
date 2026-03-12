
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

// I WAS HAVING PROBLEMS, BUT IT WASN'T THIS. I WAS SHIFTING THIS USING A CSS DECLARATION
// TO GET THIS I HAVE TO USE A SCRIPT DECLARATION

buttonElement.addEventListener('click', function() {
    if (inputElement.value != '') {
        const li = document.createElement('li');
        li.textContent = inputElement.value;

        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌';
        // deleteButton.setAttribute('aria-label', 'Close');
        deleteButton.addEventListener('click', function () {
            listElement.removeChild(li);
            inputElement.focus();
        });

        li.appendChild(deleteButton);
        listElement.appendChild(li);

        inputElement.value = '';

        inputElement.focus();
    }
});

// // select elements from the DOM
// const inputElement = document.querySelector("#favchap");
// const buttonElement = document.querySelector("button");
// const listElement = document.querySelector("#list");

// // wait for button clicks
// buttonElement.addEventListener("click", function () {
// 	// Check if the user entered something
// 	if (inputElement.value != "") {
// 		// create list item and give it the value of the input
// 		const li = document.createElement("li");
// 		li.textContent = inputElement.value;
// 		// create a button and add a click event listener
// 		const deleteBtn = document.createElement("button");
// 		deleteBtn.textContent = "❌";
// 		deleteBtn.addEventListener("click", function () {
// 			listElement.removeChild(li);
// 			inputElement.focus();
// 		});
// 		// add the button to the list item
// 		li.appendChild(deleteBtn);
// 		// OUTPUT: finally display the completed list item to the unordered list
// 		listElement.appendChild(li);
// 		// clear the user input field
// 		inputElement.value = "";
// 	}
// 	// focus the user back to the input field
// 	inputElement.focus();
// });