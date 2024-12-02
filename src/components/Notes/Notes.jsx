import './Notes.css'
import { useState, useEffect } from 'react'
import Note from './Note/Note.jsx'

function Notes() {
    const [allNotes, setAllNotes] = useState([])
    const [note, setNote] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(allNotes)

    useEffect(() => {
        setFilteredNotes(allNotes)
    }, [allNotes])

    function addNote(e) {
        e.preventDefault()
        if (note.trim() !== '') {
            const newNote = {
                content: note,
                isDone: false
            }
            setAllNotes([...allNotes, newNote])
            setNote('')
        }
    }

    function deleteNote(content) {
        const filteredNotes = allNotes.filter((item => item.content !== content))
        setAllNotes(filteredNotes)
    }

    function showDoneTasks() {
        const filteredNotes = allNotes.filter((item => item.isDone == true))
        setFilteredNotes(filteredNotes)
    }

    function showNotDoneTasks() {
        const filteredNotes = allNotes.filter((item => item.isDone == false))
        setFilteredNotes(filteredNotes)
    }

    function showAllTasks() {
        setFilteredNotes(allNotes)
    }

    return (
        <>
            <h1 className='notes__header'>2. Манипуляции с DOM: Приложение для списка дел</h1>
            <form onSubmit={(e) => { addNote(e) }} className='notes'>
                <input
                    className='notes__input'
                    type="text"
                    id="content"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    required
                    placeholder="Добавить задачу" />
                <button type='submit' className='notes__add-button'>+</button>
            </form>

            <div className='notes__buttons'>
                <button className='notes__filter-button' onClick={showDoneTasks}>Показать завершенные</button>
                <button className='notes__filter-button' onClick={showNotDoneTasks}>Показать не завершенные</button>
                <button className='notes__filter-button' onClick={showAllTasks}>Показать все</button>
            </div>

            {filteredNotes.length <= 0 && <p className='notes__empty'>Здесь пока нет задач</p>}

            <ul className='notes__list'>
                {filteredNotes.length > 0 && filteredNotes.map((item, index) =>
                    <Note note={item} key={index} deleteNote={deleteNote} />)}
            </ul>
        </>
    )
}

export default Notes
