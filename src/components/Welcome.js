import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import centerPNG from "../func.png"


function Welcome(){
    return(
        <div className="centerFontWelcome maxHeight">
            <img className="imgMain" src = {centerPNG} alt="main img"/>
        </div>
    )
}
export default Welcome