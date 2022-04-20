import React from "react";
import s from './Slider.module.scss'
import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";



const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>

                    <Heading level={1} className={s.header}>
                        Triple Triad Game
                    </Heading>
                    <Heading
                        className={s.subheader}
                        level={2}
                    >
                        Wow.Wow.Wow
                    </Heading>

                    <div className={s.call}>
                        <Button  name="Wow" />
                    </div>

                </Container>
            </div>
        </section>
    )
}

export default Slider