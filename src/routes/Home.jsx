import { Search } from "../components/Search";
import { User } from "../components/User";
import { useState } from "react";


export const Home = () => {
    const [user, setUser] = useState(null);

    const loadUser = async (userName) => {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
       // const { avatar_url, login, location, followers, following } = data;

        setUser(data);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {/* Aqui passa todos os dados do usuário como props para o componente User */}
            {user && <User {...user} />}
        </div>
    );
};
