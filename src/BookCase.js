import React from 'react'
import './css/App.css'
import Shelf from './Shelf'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookCase extends React.Component {

    static propTypes ={
        shelves: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequried,
    }

    render() {

        const { shelves, changeShelf, books } = this.props


        return(
            <div>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                {shelves.map((current_shelf) =>
                <div key={current_shelf} className='bookshelf'>
                    <Shelf
                        changeShelf={changeShelf}
                        shelf_type={current_shelf}
                        shelf_books={books.filter((b) => (
                            b.shelf.toLowerCase() === current_shelf.toLowerCase().replace(/\s/g, "")
                        ))}
                    />
                </div>
                )}
                <Link className='open-search' to='/search'>
                    <button>
                    </button>
                </Link>
            </div>
        )
    }
}

export default BookCase;
