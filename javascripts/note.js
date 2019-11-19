class Note {
    constructor(noteObj) {
        this.title = noteObj.title
        this.content = noteObj.content
        this.user = new User (noteObj.user)
    }

 render() {
     return `<div class="card">
            <div class="card-content">
                <p>By: ${this.user.render()}</p>
                <span class="card-title">${this.title}</span>
                <p>
                    ${this.content}
                   
                </p>
                <div class="update">
                <input type="submit" value="delete" id='btn'>
                </div>
            </div>
        </div>`
    }
}