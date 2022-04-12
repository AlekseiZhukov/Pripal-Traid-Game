import React from "react";
import s from './style.module.css'
import Heading from "../Heading";


const Slider = () => {
    return(
        <section className={s.section}>
            <div className={s.slider}>
                <div className={`${s.container} ${s.sliderContent}`} >
                    <Heading />

                    <h2 className={s.subheader}>Wow.Wow.Wow</h2>
                    <div className={s.call}>
                        <button className={s.button}>Wow</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider