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

    debugger
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



function fetchNotes() {
    return fetch(BASEURL + '/api/notes')
      .then(resp => resp.json())
      .then(json => renderNotes(json))
    
  }

  function renderNotes(json) { 
    const main = document.querySelector('main')

    let note = json.pop().user.name 

      const h2 = document.createElement('h2')
    
      h2.innerHTML = `<h2>${note}</h2>`
      main.appendChild(h2)
    
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchNotes()
  })

/*
  function deleteLast() {
    appInstance.notes.pop()
  }

  document.addEventListener('button', deleteLast)
  */
