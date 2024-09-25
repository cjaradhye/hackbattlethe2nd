import React from 'react';

function Search(props) {
  return (
    <div className="search">
        <input
            type="text"
            placeholder="Search for your Stego"
            value={props.searchQuery}
            onChange={(e) => props.setSearchQuery(e.target.value)}
        />
    </div>
  );
};

export default Search;
