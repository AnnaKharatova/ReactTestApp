import './Library.css'
import { useEffect, useState } from 'react'
import { Library, Book } from './Library.js'
import { catalog } from '../../utils/constants.js'

function LibraryPage() {
    const [showAll, setShowAll] = useState(true)
    const [booksArray, setBooksArray] = useState([])
    const [newBookName, setNewBookName] = useState('')
    const [newBookAuthor, setNewBookAuthor] = useState('')
    const [newBookIsbn, setNewBookIsbn] = useState('')

    const library = new Library(booksArray)
    const book = new Book(newBookName, newBookAuthor, newBookIsbn)

    function addNewBook(e) {
        e.preventDefault()
        library.addBook(book)
        setBooksArray(library.booksArray)
        setNewBookName('')
        setNewBookAuthor('')
        setNewBookIsbn('')
    }

    useEffect(() => {
        if (showAll) {
            setBooksArray(catalog)
        } else {
            setBooksArray(library.listAvailableBooks())
        }
    }, [showAll])

    function borrowBook(isbn) {
        const newArray = library.borrowBook(isbn)
        setBooksArray(newArray)
    }

    function returnBook(isbn) {
        const newArray = library.returnBook(isbn)
        setBooksArray(newArray)
    }

    return (
        <div className='library'>
            <h1>4.2 Система управления библиотекой</h1>
            <input id='available-books' type='checkbox' onChange={() => { setShowAll(!showAll) }} />
            <label>Показать доступные книги</label>
            <ul className='library__list'>
                {booksArray.map((book, index) => (
                    <li className='library__item' key={index}>
                        <p className='library__author'>{book.author}</p>
                        <p className='library__title'>{book.title}</p>
                        {book.isAvailable ?
                            <button className='library__button library__button_available' onClick={() => { borrowBook(book.isbn) }}>Взять</button> : <button className='library__button' onClick={() => { returnBook(book.isbn) }}>Вернуть</button>}
                    </li>
                ))}
            </ul>
            <form className='library__form' onSubmit={addNewBook}>
                <h2>Добавить новую книгу</h2>
                <input className='library__input' placeholder='Название книги' type='text' onChange={(e) => setNewBookName(e.target.value)} value={newBookName} required />
                <input className='library__input' placeholder='Автор книги' type='text' onChange={(e) => setNewBookAuthor(e.target.value)} value={newBookAuthor} required />
                <input className='library__input' placeholder='ISBN' type='number' onChange={(e) => setNewBookIsbn(e.target.value)} value={newBookIsbn} required />
                <button className='library__submit-button' type='submit'>Добавить</button>
            </form>
        </div>
    )
}

export default LibraryPage