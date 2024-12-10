import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './components/props/Note'
import NewNote from './components/props/NewNote'
import { fetchNotes } from './services/notes'
import { createNote } from './services/notes'

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes();

      setNotes(notes);
    }

    fetchData();
  }, [])

  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes();
    setNotes(notes);
  };

  return (
    <>
      <NewNote onCreate={onCreate} />
      <ul>
      {notes.map((n) => (
        <li key={n.id}>
          <Note
          title={n.title} 
          content={n.content} 
          />
        </li>
      ))}
      </ul>
    </>
  )
}

export default App
