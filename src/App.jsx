import { Outlet } from 'react-router-dom';
import cssClass from'./App.module.css';

export const App = () => {
    return (
        <div className={cssClass.app}>
            <h1>Github Finder</h1>
            <Outlet />
        </div>
    );
};
