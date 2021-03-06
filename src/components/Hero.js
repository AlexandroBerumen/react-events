import React from 'react';
import heroImg from '../images/heroImg1.svg';


const Hero = () => {
    return (
        <div className='hero-container'>
            <section className='hero-content'>
                <span className='text-container'>
                    <span className="hero-typography">
                        Explore online events
                        <button className='button'>Find an event</button>
                    </span>
                </span>
                <img src={heroImg} alt="" />

            </section>

        </div>
    )
}

export default Hero
