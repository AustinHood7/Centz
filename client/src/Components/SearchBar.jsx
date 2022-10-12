import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  return (
    <div class="content">
        <div class="search">
            <input type="text" class="search__input" aria-label="search" placeholder="Search..."/>
            <button class="search__submit" aria-label="submit search"><AiOutlineSearch color='#e0f2fe'/></button>
        </div>
    </div>
  )
}

export default SearchBar
