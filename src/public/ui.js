const notesList = document.querySelector('#notes');

const appendNote = note => {
    notesList.innerHTML += `<h1>${note.title}</h1>`;
}