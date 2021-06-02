import React from 'react'
import * as BooksAPI from './BooksAPI'
import './css/App.css'
import { Route } from 'react-router-dom'
import Shelf from './Shelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      books: [],
  }

    componentDidMount(){
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    changeShelf = (book, new_shelf) => {
        this.setState((currentState) => ({
            books: currentState.books.map((b) => (
                b.id === book.id
                ? {...b, shelf: new_shelf}
                : b
            ))
        }))
        BooksAPI.update(book, new_shelf)
    }



  render() {

      const shelves=['Currently Reading', 'Want to Read', 'Read'];

    return (
        <div className='app'>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            {shelves.map((current_shelf) =>
            <div className='bookshelf'>
                <Shelf
                    changeShelf={this.changeShelf}
                    shelf_type={current_shelf}
                    shelf_books={this.state.books.filter((b) => (
                        b.shelf.toLowerCase() === current_shelf.toLowerCase().replace(/\s/g, "")
                    ))}
                />
            </div>
            )}
        </div>
    )
  }
}

export default BooksApp
