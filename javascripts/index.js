//let appInstance
//appInstance.notes = appInstance.notes.filter(note => {
 //   return note.id !== 5
//})
//appInstance.render()//
//appInstance.render()
document.addEventListener('DOMContentLoaded', () => {
    const loadNotes = async params => {
        const notes = await (await fetch(BASEURL + '/api/notes')).json()
        appInstance = new App(notes)


        noteList.innerHTML = appInstance.render()
    }


/*
    const findNotes = async params => {
        const notes = await (await fetch(BASEURL + '/api/notes')).json()
        appInstance = new App(notes)
        appInstance.notes = appInstance.notes.filter(note => {
          return note.id !== 5
        })
        appInstance.render()
    }
*/ 
    const handleSubmission = e => {
        e.preventDefault()
        const data = {
            note: {
                title: e.target.title.value,
                content: e.target.content.value
            },
            user: {
                name: e.target.author.value
            }
        }

        fetch(BASEURL + '/api/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => {
              const note = new Note(data)
              noteList.innerHTML = appInstance.render()
              e.target.reset()
            })
        }

    
     document
    .querySelector('#blog-form')
    //.addEventListener('delete', deleteNote)
    .addEventListener('submit', handleSubmission)
    loadNotes()


})

document.addEventListener('DOMContentLoaded', () => {
    const findNotes = async params => {
        const notes = await (await fetch(BASEURL + '/api/notes')).json()
        appInstance = new App(notes)
        appInstance.notes
        delete appInstance["notes"][0]
        appInstance.render()
    }   


        


})


let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})


p.then((message) => {
    console.log('this is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})