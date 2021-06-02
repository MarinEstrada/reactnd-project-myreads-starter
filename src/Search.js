import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'


class Search extends React.Component{

    render() {
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <button className='close-search' >Close</button>
                    <div className='search-books-input-wrapper'>
                        <input type='text' placeholder='Search by Title or Author'/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;
