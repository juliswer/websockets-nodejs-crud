const notesList = document.querySelector('#notes');

const appendNote = note => {
    console.log(note);
    notesList.innerHTML += `
    <div class="card card-body rounded-0">
        <div>
            <h1 class="h3 card-title">${note.title}</h1>
        </div>
        <p>${note.description}</p>
    </div>
    `;
}