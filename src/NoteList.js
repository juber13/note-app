import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NoteList({notes , addNote , handleDeleteNote , handleEdit , isUpdating , setInputValue , inputValue , handleUpdate}) {
  return (
    <div className='note-list'>
        {notes.map((note) => {
            return <Note text={note.text} id={note.id} date={note.date} handleDeleteNote={handleDeleteNote} handleEdit={handleEdit}/>
        })}
        <AddNote addNote={addNote} isUpdating={isUpdating} setInputValue={setInputValue} inputValue={inputValue} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default NoteList;