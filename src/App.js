import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
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

  render() {

      const shelves=['Currently Reading', 'Want to Read', 'Read'];

    return (
        <div>
            <h1 className='page-header'>MyReads</h1>
            {shelves.map((current_shelf) =>
            <div className='list-shelves'>
                <Shelf
                    shelf_type={current_shelf}
                    shelf_books={this.state.books.filter((b) => b.onShelf === current_shelf)}
                />
            </div>
            )}
        </div>
    )
  }
}

export default BooksApp
