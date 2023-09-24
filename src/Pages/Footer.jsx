import { colors } from "@mui/material";
import React from "react";
import '../style/FooterStyle.css'

export default function Footer () {
return (
	<>
    <div className="footer" >
        <div className="chatbot">
            <h4 className="ftext1">LinkBot/Help</h4>
            <search className="searchbar"></search>

            <img src="./assets/bot.png" height='50px'></img>
        
        </div>
        <div className="column1">
            <h4>Company</h4>
            <div>About</div>
            <div>Services</div>
            <div>Link</div>
        </div>
        <div className="column2">
            <h4>Support</h4>
            <div></div>
			<div>Contact</div>
            <div>E-mail</div>
            <div>Pricing</div>
        </div>
		<div className="column3">
            <h4>Legal</h4>
            <div></div>
			<div>Claims</div>
            <div>Privacy</div>
            <div>Terms</div>
        </div>
		<div><p>@copyright</p></div>
    </div>
    </>
);
};

