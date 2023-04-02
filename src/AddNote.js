import React,{useState} from 'react'

function AddNote({addNote}) {
    const [noteText , setNoteText] = useState('');
    const maxWord = 150;
    const handleNoteText = (e) => {
        if(maxWord - noteText.length > 0)
        setNoteText(e.target.value);
    }

    const handleAddNote = () => {
        if(noteText.trim().length > 0){
            addNote(noteText);
            setNoteText('');
        }
    }


  return (
    <div className='note new'>
        <div className='note-list'>
            <textarea 
            cols="10" 
            rows="8"
            value={noteText}
            placeholder='Type to add note...'
            onChange={handleNoteText}
            >

            </textarea>
        </div>
        <div className='note-footer'>
            <small>{maxWord - noteText.length} word remaining</small>
            <button className='save-btn' onClick={handleAddNote}>Save</button>

        </div>
    </div>
  )
}

export default AddNote