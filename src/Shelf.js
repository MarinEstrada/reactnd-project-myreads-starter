import React from 'react'
import PropTypes from 'prop-types'

class Shelf extends React.Component{

    static propTypes = {
        shelf_type: PropTypes.string.isRequired,
        shelf_books: PropTypes.array.isRequired,
    }

    render() {

        const { shelf_type, shelf_books } = this.props

        return (
            <h2 className='bookshelf-title'>{shelf_type}</h2>
        )
    }
}

export default Shelf
