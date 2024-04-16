import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import "./App.css";

import PageLoader from "../src/Component/PageLoader.js";
import { AuthProvider } from "../src/State/AuthProvider";

function App() {
    const Fims = lazy(() => import("../src/routes/Fims"));
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense
                    fallback={
                        <PageLoader
                            text={"Making things Perfect Please wait"}
                            isLoading={true}
                        />
                    }
                >
                    <CookiesProvider>
                        <AuthProvider>
                            <Fims />
                        </AuthProvider>
                    </CookiesProvider>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
