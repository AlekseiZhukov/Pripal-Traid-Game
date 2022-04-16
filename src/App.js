import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text";
import Container from "./components/Container";


function App() {
  return (
    <>
        <Header />
        <Slider />
        <div>
            <Container>
                <Text element="div">
                    Это "div" элемент
                </Text>
                <Text element="p">
                    Это "p" элемент
                </Text>
                <Text element="span">
                    Это "span" элемент
                </Text>
            </Container>
        </div>

        <Footer />
    </>

  );
}

export default App;
