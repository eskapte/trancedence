import React, { ChangeEvent } from "react";

interface SearchBarProps {
    name: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    return (
        <div className="search-bar__wrapper">
            <input 
                type="text" 
                name={props.name} 
                placeholder={props.placeholder ?? "Поиск..."} 
                className="search-bar"
                onChange={(e) => props.onChange(e)}
                />
        </div>   
    )
}

export default SearchBar