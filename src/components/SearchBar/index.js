import React from 'react';
import './searchbar.css';
//images
import searchIcon from '../../images/search-icon.svg';


const SearchBar = () => {
    return (
        <div className='Wrapper'>
            <div className='Content'>
                <img src={searchIcon} className='searchImg' />
                <input 
                    type='text'
                    placeholder='Search Clubs'
                    className='inputSection'
                />
            </div>
        </div>

    )
}

export default SearchBar;