import React from "react";
import LoginForom from "../../Form/AuthForm/Login";
const Login = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <LoginForom />
        </div>
    );
};

export default Login;
