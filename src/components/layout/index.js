import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import "../../styles/index.css"
import '@aws-amplify/ui-react/styles.css';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout