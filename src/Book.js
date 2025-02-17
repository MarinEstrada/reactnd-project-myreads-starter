import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'


class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired,
    }

    render () {

        const { changeShelf, book } = this.props

        return (
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks
                                ? book.imageLinks.smallThumbnail
                                : ''})`
                        }}
                    ></div>
                    <div className='book-shelf-changer'>
                        <select value={book.shelf} onChange={(event) => changeShelf(book, event.target.value)}>
                            <option value='move' disabled>Move to...</option>
                            <option value='currentlyReading'>Currently Reading</option>
                            <option value='wantToRead'>Want to Read</option>
                            <option value='read'>Read</option>
                            <option value='none'>No Shelf</option>
                        </select>
                    </div>
                </div>
                <div className='book-title'>{book.title}</div>
                {book.authors !== undefined &&(
                    <div className='book-authors'>
                            {book.authors.map((author) =>
                            <div key={author}>{author}</div>
                            )}
                    </div>
                )}
            </div>
        )

    }

}

export default Book;
