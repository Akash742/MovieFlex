import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='col col-sm'>
            <input className='form-content' value={props.value} onChange={(event)=>props.setSearchValue(event.target.value)} placeholder='Type to Search...'/>
        </div>
    )
}

export default SearchBox;