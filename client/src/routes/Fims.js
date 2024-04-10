import { useCookies } from "react-cookie";
import Approuter from "./AppRoutes";
import AuthRouter from "./AuthRoutes";
import { App } from "antd";

const Myfac8ry = () => {
    const [cookies, setCookie] = useCookies(["token"]);

    return (
        <App>
            {cookies["token"] ? (
                <Approuter  />
            ) : (
                <AuthRouter />
            )}
        </App>
    );
};

export default Myfac8ry;
