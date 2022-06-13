import React, {useCallback, useEffect} from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import Biography from "./pages/Biography";
import Layout from "./components/Layout/Layout";
import CharactersPage from "./pages/CharactersPage";
import AboutGamePage from "./pages/AboutGamePage";
import ContactsPage from "./pages/ContactsPage";
import LayoutBio from "./components/BioLayout/BioLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import {CharactersContextProvider} from "./context/charactersContext";


function App() {

    const {pathname, hash} = useLocation()
    const handleScroll = useCallback(() => {
        const el = hash && document.getElementById(hash.slice(1))
        el && el.scrollIntoView({block: 'center', behavior: "smooth"})
    }, [hash])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        window.addEventListener('load', handleScroll, {once: true})
    }, [handleScroll])

    return (
        <CharactersContextProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="characters" element={<LayoutBio/>}>
                        <Route index element={<CharactersPage/>}/>
                        <Route path=":id" element={<Biography/>}/>
                    </Route>
                    <Route path="about" element={<AboutGamePage/>}/>
                    <Route path="contacts" element={<ContactsPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </CharactersContextProvider>
    )
}

export default App;
