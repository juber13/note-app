import React from 'react'
import { MdDeleteForever } from 'react-icons/md'


function Note({text , id , date , handleDeleteNote}) {
  const formatText = (str) => {
    return str.slice(0 ,1).toUpperCase() + str.slice(1)
  } 
  return (
    <div className='note' key={id}>
        <div className='note-text'>
            <span>{formatText(text)}</span>
        </div>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className='delete-btn' onClick={() => handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note