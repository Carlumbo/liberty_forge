class App {
    constructor(note_objects) {
        this.notes = note_objects.map( p => new Note(p))

    }

    render() {
        return `<div>
        ${this.notes.map(p => p.render()).join('')}
        </div>`
    }
}


function removeNote(deleter) {
    // Removes an element from the document
    let note = document.getElementById(deleter);
    note.parentNode.removeChild(note);
}
