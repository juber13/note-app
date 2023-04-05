import { useEffect, useState } from "react";
import NoteList from "./NoteList";
import Search from "./Search";
import Header from "./Header";
import FlashMessage from "./FlashMessage";



function App() {
  const [notes , setNotes] = useState([
    {id : 1 , text : "This is my first node" , date : "01/04/2023"},
    {id : 2 , text : "This is my second node" , date : "01/02/2023"},
    {id : 3 , text : "This is my third node" , date : "01/01/2023"},
  ]);
  
  const [searchText , setSearchText] = useState("");
  const [darkMode , setDarkMode] = useState(false);
  const [showFlasMessage , setShowFlash] = useState(false);
  const [message , setMesage] = useState("");

  const addNote = (text) => {
    setShowFlash(true)
    setMesage("Note added!!");
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
     setShowFlash(true)
     setMesage("Note deleted!!");
  }

  setTimeout(() => {
    setShowFlash(false);
  }, 1500);

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search setSearchText={setSearchText}/>
        <NoteList notes={notes.filter(note => note.text.toLowerCase().includes(searchText))} addNote={addNote} handleDeleteNote={DeleteNote}/>
        <FlashMessage showFlasMessage={showFlasMessage} message={message}/>
      </div>
    </div>
  );
}

export default App;
