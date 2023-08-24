import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import "./style.css"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from './assets/Background.jpg'

export default function App() {
    return(
        <>
            <Navbar />
            <Main />
            <Work />
            <About />
            <Contact />
            <Footer />
        </>
    );
}