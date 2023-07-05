import React from "react" 
import "./Header.css"
import Button from '@mui/material/Button';

function Header() {
    return (
        <div className="nav-flex-container">
            <div className="nav-flex-container-1">
                <img src={require("./img2.jpeg")} /> 
            </div>
            <div className="nav-flex-container-2">
                <div>
                    <h4>MENU</h4>
                </div>
                <div>
                    <h4>LOCATION</h4>
                </div>
                <div>
                    <h4>ABOUT</h4>
                </div>
                <div>
                    <h4>CONTACT</h4>
                </div>
            </div>
            <div className="nav-flex-container-3">
                <Button variant="contained">Login</Button>
            </div>
        </div>
    )
}

export default Header ; 