import cssSearch from "./Search.module.css";
import { Link } from "react-router-dom";

export const User = ({ avatar_url, login, location, followers, following }) => {
    return (
        <>
            <section>
                <div className={cssSearch.result}>
                    <aside>
                        <p>
                            <img src={avatar_url} alt={login} width={180} />
                        </p>
                    </aside>
                    <article>
                        <p>
                            Login: <strong>{login}</strong>
                        </p>

                        <p>
                            Location: <strong>{location}</strong>
                        </p>
                        <p>
                            Followers: <strong>{followers}</strong>
                        </p>
                        <p>
                            Following: <strong>{following}</strong>
                        </p>
                    </article>
                </div>
                <Link to={`https://github.com/${login}`}>Ver melhores projetos </Link>
            </section>
        </>
    );
};
