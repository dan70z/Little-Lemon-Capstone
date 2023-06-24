import React from 'react';
import Chicago from "./Chicago";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Homepage = () => {
    return(
        <>
            <Chicago/>
            <Specials/>
            <Testimonials/>
            <About/>
        </>
    )
}

export default Homepage;