import React from "react";

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar__wrapper">
            <input type="text" id='chat-search' name='chat-search' 
                    placeholder="Поиск сообщений или пользователей"/>
        </div>   
    )
}

export default SearchBar