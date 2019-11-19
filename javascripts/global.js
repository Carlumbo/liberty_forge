const noteList = document.querySelector('.note-lists')
const BASEURL = 'http://localhost:3000'


function removeNote(deleter) {
    // Removes an element from the document
    let note = document.getElementById(deleter);
    note.parentNode.removeChild(note);
}
