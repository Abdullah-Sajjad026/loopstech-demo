import React from 'react';
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-bg">
                <img src="./images/loops-poster.jpg" alt="hero-bg" />
                {/* <video preload='auto' muted loop autoplay poster='./images/loops-poster.jpg'>
                    <source src='./images/hero-bg.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>
            <div className="container">
                <div className="hero__text-col">
                    <h1 className='page-title'>LOOPS - <br /> Latest Optimized and Organized Programming Solutions</h1>
                    <p className='huge'>Your partner for incredible mobile and web products.
                        Finally delivered in great quality and on time.</p>
                    <Link to='/contact' className="btn btn--block">Let's Work Together</Link>
                </div>
                <span className='hero__col-placeholder'></span>
            </div>
            {/* <div class="hero__layer">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}

        </section>

    )
};

export default Hero;
