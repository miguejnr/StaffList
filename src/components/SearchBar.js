import React from 'react'
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ getVal, handleShow }) {

    return (
        <div className='bar'>
            <h1>Staff</h1>
            <div className='bar__search'>
                <SearchIcon />
                <input onChange={e => getVal(e.target.value)} placeholder="Search" type="text" />
            </div>
            <div className='bar__add'>
                <button onClick={handleShow}>+Add Staff</button>
            </div>
        </div>
    )
}

export default SearchBar
