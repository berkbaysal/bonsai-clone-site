import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PricingDisplay from "./components/PricingDisplay";

function App() {

    return ( <div>
        <Navbar/>
        <Hero/>
        <PricingDisplay unitCount={3} promotedCard={2}/>
    </div> );
}

export default App;