

// //Get all the querySelectors
const noteContainer = document.getElementById("app");
const addNoteButton = noteContainer.querySelector(".add-note");


// //event listing 
addNoteButton.addEventListener("click", () => addNote())


// loop through on the note on the page
getNotes().forEach(note => {
    const noteElement =  createNoteElement(note.id , note.content);
    noteContainer.insertBefore(noteElement, addNoteButton);
});


// // All the function 
function getNotes() {
        return JSON.parse(localStorage.getItem("stickynotes")  ||  "[ ]");
}


function saveNotes() {
    localStorage.setItem("stickynotes",  JSON.stringify(notes));
}

function createNoteElement(id, content) {
     const element = document.createElement("textarea");

     element.classList.add("note");
     element.value  = content;
     element.placeholder  =  "Wirte Some Note";

     element.addEventListener("change",  () => {
        updateNote(id, element.value);
     });

     element.addEventListener("dblclick", () => {
        const doDelete  =  confirm("Are you sure wish to delete this note?")

        if (doDelete) {
            deletNote(id,  element)
        }
     });
     return element;
}


function addNote () {
     const existingNotes  = getNotes();
     const noteObject = {
        id : Math.floor(Math.random() * 10000),
        content : ""
     }

     const noteElement  =  createNoteElement(noteObject.id, noteObject.content);
     noteContainer.insertBefore(noteElement, addNoteButton);

     notes.push(noteObject);
     saveNotes(notes);
}


function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote  = notes.filter(note => note.id  == id) [0];

    targetNote.content  =  newContent;
    saveNotes(notes)
}


function deletNote(id, element){
    const notes = getNotes().filter(note =>  note.id  !=  id);

    saveNotes(notes);
    noteContainer.removeChild(element)
}