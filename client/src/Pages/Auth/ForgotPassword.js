import React from "react";

import ForgotPasswordForm from "Form/AuthForm/ForgotPassword";

const ForgotPassword = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <ForgotPasswordForm />
        </div>
    );
};

export default ForgotPassword;
