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
        this.updateQuery(query)
        query === ''
            ? this.setState({ query_books: [] })
            : BooksAPI.search(query)
            .then((query_results) => {
                query_results.error
                    ? this.setState({ query_books: [] })
                    : this.setState({ query_books: this.prepBookResults(query_results) })
            })
    }


    updateQuery = query => {
        this.setState({ query: query })
    }

    prepBookResults = search_results => {
        return search_results.map((b_results) => {
            const found = this.props.books.find((b) => (
                b_results.id === b.id
            ))
            return found === undefined
            ? { ...b_results, shelf: 'none' }
            : found
        })
    }


    render() {

        const { query, query_books } = this.state
        const { changeShelf } = this.props

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
                            onChange={(event) => this.handleQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className='bookshelf'>
                <Shelf
                    changeShelf={changeShelf}
                    shelf_type='Search Results'
                    shelf_books={query_books}
                />
                </div>
            </div>
        )
    }

}

export default Search;
