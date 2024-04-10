import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import cssSearch from "./Search.module.css";

export const Search = ({ loadUser }) => {
    const [username, setUsername] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            loadUser(username);
        }
    };

    return (
        <div className={cssSearch.search_container}>
            <h2>Busque por um usuário:</h2>
            <p className="p_search">Conheça alguns repositórios: </p>
            <div>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário "
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(username)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};
