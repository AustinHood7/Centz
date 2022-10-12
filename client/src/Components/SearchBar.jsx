import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  return (
    <div className='content'>
        <div className='search-bar'>
            <input type="text" className='search-bar-input' placeholder='Search...'/>
            <button className='search-bar-submit'><AiOutlineSearch color='white' /></button>
        </div>
    </div>
  )
}

export default SearchBar
