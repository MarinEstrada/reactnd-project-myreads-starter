import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'


class Book extends React.Component {

    static propTypes = {
        books: PropTypes.object.isRequired,
    }

    render () {

        const { books } = this.props

        return (
            <div className='book'>
                <div className='book-top'>
                </div>
            </div>
        )

    }

}

export default Book;
