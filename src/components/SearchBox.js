import React from 'react';

// search box component listening for changes in the search field
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--yellow bg-washed-yellow'
                type='search' 
                placeholder='Looking for a robot?'
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Looking for a robot?"}
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;