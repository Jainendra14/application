import React from "react";
import "./fnstyle.css"
import Fnhero from "../netflix/hero";
import Fnbanner from "../netflix/banner";
import Fnaccordian from "../netflix/accordians"
import Fnsubscription from "../netflix/subscription"

const Fnhome=()=>{
    return(
        <div>
            <Fnhero/>
            <Fnbanner/>
            <Fnaccordian/>
            

        </div>
    )
}

export default Fnhome 