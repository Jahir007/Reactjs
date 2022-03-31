import { Redirect,Route } from "react-router-dom";
import { useAppContext } from "../AppContext";

const Role = (props) => {
    const { isLoggedIn } = useAppContext();
    
    if (!isLoggedIn) {
        return <Redirect to="/" />;
    }
    return <Route {...props} />;
}

export default Role;