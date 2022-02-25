import React from "react";

function Filter({ search, handleSearch}){


    return (
        <div className="searchbar">
            <label> <h2>Search Brand </h2></label>
                <input
                type="text"
                id="search"
                placeholder="Type a brand to search..."
                value={search}
                onChange={handleSearch}
                />
                {/*<select onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="Classic">Classic</option>
                    <option value="Modern">Modern</option>
                </select>*/}
        </div>
    )
}

export default Filter;