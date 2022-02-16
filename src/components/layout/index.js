import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import * as LayoutStyle from './layout.module.css'
import "../../styles/index.css"
import Amplify from "aws-amplify";
import awsExports from "../../aws-exports";
import { StaticImage } from "gatsby-plugin-image";
Amplify.configure(awsExports);

// const IndexPage = () => {
//   const [is_phone, set_phone] = useState(false)
//   const [promo, set_promo] = useState(false)

//   useEffect(() => {
//     set_phone(window.screen.width < 480)
//   }, [])

//   return (
//     <>
//       {
//         (is_phone | promo) ?
//           <div>

//           </div> : null
//       }
//     </>
//   )
// }

const Layout = ({ children }) => {
    return (
        <AmplifyAuthenticator>
            {/* <StaticImage src='./iphone.png' className={LayoutStyle.PhoneView} /> */}
            {/* <main> */}
            {/* <div id={LayoutStyle.PhoneWrapper}> */}
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            {/* </div> */}
            {/* </main> */}
        </AmplifyAuthenticator>

    )
}

export default Layout