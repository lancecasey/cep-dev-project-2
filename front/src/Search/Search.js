import React, { Component }  from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './Search.css';

class Search extends Component {
    
    
    render(){

    return (
        <div className="searchBar_container">
            <input className="searchBar_input" tupe="text" />
           
            <button className="searchBar_button" type="submit">SEARCH</button>
            <SearchResults />                 
        </div>
    )
}
}

export default Search;