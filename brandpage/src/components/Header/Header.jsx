import React from "react" 
import "./Header.css"
import Button from '@mui/material/Button';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

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
            <div className="dropdown" style={{float: "right"}}>
                <DensitySmallIcon className="dropbtn"></DensitySmallIcon>
                <div class="dropdown-content">
                    <a href="#">LOGIN</a>
                    <a href="#">MENU</a>
                    <a href="#">LOCATION</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Header ; 