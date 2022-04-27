import React from "react";
import {Routes, Route} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import Biography from "./pages/Biography";
import Layout from "./components/Layout/Layout";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import AboutGamePage from "./pages/AboutGamePage/AboutGamePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<MainPage />} />
                <Route path="characters" element={<CharactersPage  />} />
                <Route path="characters/:id" element={<Biography  />} />
                <Route path="about" element={<AboutGamePage  />} />
                <Route path="contacts" element={<ContactsPage  />} />
            </Route>
        </Routes>
    )
};

export default App;
