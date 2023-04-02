import { useEffect, useState } from "react";
import NoteList from "./NoteList";
import Search from "./Search";
import Header from "./Header";



function App() {
  const [notes , setNotes] = useState([
    {id : 1 , text : "This is my first node" , date : "01/04/2023"},
    {id : 2 , text : "This is my second node" , date : "01/02/2023"},
    {id : 3 , text : "This is my third node" , date : "01/01/2023"},
    {id : 4 , text : "This is my fourth node" , date : "01/14/2023"}
  ]);
  
  const [searchText , setSearchText] = useState("");
  const [darkMode , setDarkMode] = useState(false);
  const addNote = (text) => {
    const date  = new Date();
    const newNote = {
      id : notes.length + 1,
      text : text,
      date : date.toLocaleDateString(),
    }

    const newNotes = [...notes , newNote];
    setNotes(newNotes);
    addLoLocalStorage(newNotes);
  }

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('notes'));
    if(saveNotes) setNotes(saveNotes);
   },[])

   const addLoLocalStorage = (note) => {
    localStorage.setItem('notes' , JSON.stringify(note))
  }
  
 

  const DeleteNote = (id) => {
     const newNotes = notes.filter(note => note.id !== id);
     setNotes(newNotes);
     addLoLocalStorage(newNotes);
  }

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search setSearchText={setSearchText}/>
        <NoteList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} addNote={addNote} handleDeleteNote={DeleteNote}/>
      </div>
    </div>
  );
}

export default App;
