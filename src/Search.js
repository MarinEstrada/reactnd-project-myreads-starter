import React from 'react'
import PropTypes from 'prop-types'
import './css/App.css'
import { Link } from 'react-router-dom'


class Search extends React.Component{

    render() {
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>
                        <button className='close-search' >Close</button>
                    </Link>
                    <div className='search-books-input-wrapper'>
                        <input type='text' placeholder='Search by Title or Author'/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Search;
