import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PricingDisplay from "./components/PricingDisplay";
import FAQ from "./components/FAQ";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {

    return ( <div>
        <Navbar/>
        <Hero/>
        <PricingDisplay unitCount={3} promotedCard={2}/>
        <FAQ/>
        <Review/>
        <Footer/>
    </div> );
}

export default App;