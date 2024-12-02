
export class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true
    }
}

export class Library {

    constructor(booksArray) {
        this.booksArray = booksArray
    }

    addBook(book) {
        this.booksArray.push(book)
    }

    borrowBook(isbn) {
        const updatedBooks = this.booksArray.map((book) => {
            if (book.isbn === isbn) {
                return { ...book, isAvailable: false };
            }
            return book;
        });
        return updatedBooks;
    }

    returnBook(isbn) {
        const updatedBooks = this.booksArray.map((book) => {
            if (book.isbn === isbn) {
                return { ...book, isAvailable: true };
            }
            return book;
        });
        return updatedBooks;
    }

    listAvailableBooks() {
        const selectedBooks = this.booksArray.filter((book) => book.isAvailable == true)
        return selectedBooks
    }
}