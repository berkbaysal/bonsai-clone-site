import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PricingDisplay from "./components/PricingDisplay";
import FAQ from "./components/FAQ";

function App() {

    return ( <div>
        <Navbar/>
        <Hero/>
        <PricingDisplay unitCount={3} promotedCard={2}/>
        <FAQ/>
    </div> );
}

export default App;