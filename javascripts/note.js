class Note {
    constructor(noteObj) {
        this.title = noteObj.title
        this.content = noteObj.content
        this.user = new User (noteObj.user)
    }
 render() {
     return `<div class="card">
            <div style = "position:relative; left: 800px; top:-280px; 
            color: black; font-style: bold; font-size: 30px;  background-color: white; background-size: cover; backgroung-repeat: no-repeat; background-attachment: fixed; width: 500px; ;border: 1px solid black;
            border: 3px solid lightblue;
              class="card-content">
            
                <p>By: ${this.user.render()}</p>
                <span class="card-title">${this.title}</span>
                <p>
                    ${this.content}
                   
                </p>
            </div>
            <br />
        </div>`
    }
}

/* <div>
    <button type="submit" style="background-color: #fbff00;
    color: #026999;
    border-color: #e4676f;
    text-align: center;
    font-size: 14px;" >Delete</button>
    </div>*/