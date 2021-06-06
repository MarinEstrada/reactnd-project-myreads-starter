import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'


class Search extends React.Component{

    static propTypes = {
        changeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
    }

    state = {
        query: '',
        query_books: [],
    }

    handleQuery = query => {
        BooksAPI.search(query)
            .then((query_books) => {
                query_books.error
                    ? this.setState(() => ({
                        ...this.state,
                        query_books: []
                    }))
                    : this.setState(() => ({
                        ...this.state,
                        query_books
                    }))
            })
    }

    updateQuery = query =>{
        this.setState(() => ({
            ...this.state,
            query: query.trim()
        }))
    }

    render() {

        const { query } = this.state
        const { changeShelf, books} = this.props

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>
                        <button className='close-search' >Close</button>
                    </Link>
                    <div className='search-books-input-wrapper'>
                        <input
                            type='text'
                            placeholder='Search by Title or Author'
                            value={query}
                            onChange={(event) => this.handleQuery(this.updateQuery(event.target.value))}
                        />
                    </div>
                </div>
                <div className='bookshelf'>
                <Shelf
                    changeShelf={changeShelf}
                    shelf_type='Search Results'
                    shelf_books={this.state.query_books}
                />
                </div>
            </div>
        )
    }

}

export default Search;
