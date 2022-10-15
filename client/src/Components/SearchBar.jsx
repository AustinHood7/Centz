import React, {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  const [query, setQuery] = useState("")


  // send the search query to the backend
  const handleSubmit = async e => {
    e.preventDefault()
    let res = await fetch('http://localhost:5000/search', {  
      method: 'POST',
      headers: {
        "content_type": "application/json",
     }, 
      body: JSON.stringify({ query: query }) 
    }).then(resp => console.log(resp.json()))
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div class="content">
        <div class="search">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              class="search__input" 
              aria-label="search" 
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}/>
          </form>
          <button 
              class="search__submit" 
              aria-label="submit search"
              onClick={handleSubmit}>
                <AiOutlineSearch color='#e0f2fe'/>
          </button>
        </div>
    </div>
  )
}

export default SearchBar
