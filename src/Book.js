import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'


class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
    }

    render () {

        const { book } = this.props

        return (
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: book.infolink
                        }}
                    ></div>
                </div>
            </div>
        )

    }

}

export default Book;
