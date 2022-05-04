import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import Biography from "./pages/Biography";
import Layout from "./components/Layout/Layout";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import AboutGamePage from "./pages/AboutGamePage/AboutGamePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LayoutBio from "./components/BioLayout/BioLayout";
import NotFound from "./pages/NotFound/NotFound";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<MainPage />} />
                <Route path="characters" element={<LayoutBio  />} >
                    <Route index element={<CharactersPage  />} />
                    <Route path=":id" element={<Biography  />} />
                </Route>
                <Route path="about" element={<AboutGamePage  />} />
                <Route path="contacts" element={<ContactsPage  />} />
                <Route path="*" element={<NotFound  />} />
            </Route>
        </Routes>
    )
}

export default App;
