function SearchBar({ isLibrary, handleSearch }) {
    return (
    <input 
        style ={{ 
            marginLeft: "auto", 
            marginRight: "auto", 
            marginBottom: "30px", 
            display: "flex"
        }}
        onChange={(e) => handleSearch(e)} 
        placeholder={isLibrary ? "Search Pokémon" : "Search Pokédex"}
    />
    )
}

export default SearchBar