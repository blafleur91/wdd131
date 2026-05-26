
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

// this is a way to create an array
let chaptersArray = getChapterList() || [];


buttonElement.addEventListener('click', function() {
    if (inputElement.value != '') {

        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);

        setChapterList();

        inputElement.value = '';

        inputElement.focus();
    }
});

chaptersArray.forEach(chapter =>  {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    li.textContent = item;

    let deleteButton = document.createElement('button');

    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.appendChild(deleteButton);
    listElement.appendChild(li);

    deleteButton.addEventListener('click', function () {
        listElement.removeChild(li);
        deleteChapter(li.textContent); // this is a new function being called to remove the chapter from the newly put in array and localStorage.
        inputElement.focus();
    });

}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // this line takes the array and filters out the chapter specifically being deleted.
    setChapterList();
}