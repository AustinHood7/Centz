import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

function SearchBar({placeholder, data}) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.coin_data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  console.log(filteredData);
  console.log(data.coin_data)


  return (
    <div className="content">
        <div className="search">
            <input 
              type="text" 
              className="search__input" 
              aria-label="search" 
              placeholder={placeholder} 
              onChange={handleFilter}
            />
            <button className="search__submit" aria-label="submit search"><AiOutlineSearch color='#e0f2fe'/></button>
        </div>
        {filteredData.length !== 0 && (
          <div className='results'>
              <div className='dataResult'>
                {(typeof filteredData === 'undefined') ? (
                          <div>Loading...</div>
                      ): (
                          filteredData.map((value, i) => (
                            <div className="data_coins" key={i}>
                              <img className='coinIcon' src={value.iconUrl} alt=''/>
                              {value.rank}. {value.name}
                            </div>
                      ))
                )}
              </div>
          </div>
      )}
    </div>
  )
}

export default SearchBar
