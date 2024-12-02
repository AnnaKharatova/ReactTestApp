import { useState, useEffect } from 'react'
import './Note.css'

function Note({ note, deleteNote }) {
    const [done, setDone] = useState(false)

    function handleDelete() {
        deleteNote(note.content)
    }

    function handleDone() {
        if (!done) {
            setDone(true)
            note.isDone = true
        } else {
            setDone(false)
            note.isDone = true
        }
    }

    useEffect(() => {
        if (note.isDone == false) {
            setDone(false)
        } else {
            setDone(true)
        }
    }, [note.isDone])

    return (
        <li className={!done ? 'note' : 'note note_done'}>
            <p className='note__content' onClick={handleDone}>{note.content}</p>
            <button className='note__del-button' onClick={handleDelete}>Удалить</button>
        </li>
    )
}

export default Note