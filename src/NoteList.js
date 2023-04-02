import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
function NoteList({notes , addNote , handleDeleteNote}) {
  return (
    <div className='note-list'>
        {notes.map((note) => {
            return <Note text={note.text} id={note.id} date={note.date} handleDeleteNote={handleDeleteNote}/>
        })}
        <AddNote addNote={addNote}/>
    </div>
  )
}

export default NoteList
