import React, { useState } from "react" 
import "./Brand.css"
function Brand() {
    return (
        <div className="brand-flex-container" >
            <div className="brand-flex-container-1">
                <div>
                    <h1>YOUR FEET DESERVES THE BEST</h1>
                </div>
                <div>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.
                    </p>
                </div>
                <div className="brand-flex-container-1-2-button">
                    <button id="btn-1">Shop Now</button>
                    <button id="btn-2">Category</button>
                    {/* <Button id="btn-1" variant="contained">Shop Now</Button>
                    <Button id="btn-2" variant="contained">Category</Button> */}
                </div>
                <br></br>
                <div className="shop-icon">
                    <div><label>Also available on</label></div> 
                    <div className="pics"><img src={require("./img2.jpeg")} />
                    <img src={require("./img3.jpeg")} /></div> 
                </div>
            </div>
            <div className="brand-flex-container-2">
                <img src={require("./hero-image.png")} />
            </div>
        </div>
        
    )
}

export default Brand ; 