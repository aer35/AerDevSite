import "../styles/main.scss";
import type {AppProps} from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import {ToastContainer} from "react-toastify";

config.autoAddCss = false;

function MyApp({Component, pageProps}: AppProps) {
    return (
        <NextUIProvider>
            <Head>
                <title>AerDevSite</title>
                <meta
                    name="description"
                    content="Website designed and developed by Aaron Mechanic"
                />
                <link rel="icon" href="/images/AerDevIcon3_500.png"/>
            </Head>
            <ToastContainer/>
            <Component {...pageProps} />
            <Footer/>
        </NextUIProvider>
    );
}

export default MyApp;
