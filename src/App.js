import React from 'react'
import * as BooksAPI from './BooksAPI'
import './css/App.css'
import { Route } from 'react-router-dom'
import BookCase from './BookCase'
import Search from './Search'


class App extends React.Component {
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
        BooksAPI.update(book, new_shelf).then(() => {
            book.shelf = new_shelf
            this.setState({
                books: this.state.books.filter(b => b.id !== book.id).concat(book)
            })
        })
    }


  render() {

      const shelves=['Currently Reading', 'Want to Read', 'Read'];

    return (
        <div className='app'>
            <Route exact path='/' render={() => (
                <BookCase
                    shelves={shelves}
                    changeShelf={this.changeShelf}
                    books={this.state.books}
                />
            )} />
            <Route path='/search' render={({ history }) => (
                <Search
                    changeShelf={this.changeShelf}
                    books={this.state.books}
                />
            )} />
        </div>
    )
  }
}

export default App;
