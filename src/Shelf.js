import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'
import Book from './Book'


class Shelf extends React.Component{

    static propTypes = {
        shelf_type: PropTypes.string.isRequired,
        shelf_books: PropTypes.array.isRequired,
    }

    render() {

        const { shelf_type, shelf_books } = this.props

        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{shelf_type}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {shelf_books.map((b) =>
                        <li>
                            <Book
                                book={b}
                            />
                        </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;
