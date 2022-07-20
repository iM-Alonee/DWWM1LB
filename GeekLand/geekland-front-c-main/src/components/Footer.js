import React from "react";
import '../css/footer.css';
import "react-router-dom";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";



export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer">

                <div className="left">
                    <h3><u>Nous suivre : </u></h3><br/><br/>
                    <BsFacebook size={30} color="white" />
                    <BsInstagram size={30} color="white" />
                    <BsTwitter size={30} color="white" />
                    <BsYoutube size={30} color="white" />                    
                </div>
                {/* <div className="left">
                <label for="email"><h3><u>S'inscrire à notre NewsLetter :</u></h3></label>
                <input className="taille" type="email"/>
                </div> */}
                

                <div className="mention">
                    <img src="/assets/express.png" width="10%"></img>
                    <i className="color">Livraison Express : point relais ou domicile 48H</i>
                    <br/><br/>
                    <Link to="aboutus">A propos</Link> |<Link to="legalinformation">Mentions Légales</Link> |<Link to="cookies">Cookies</Link> | <Link to="cgu">CGU & CGV</Link> |<Link to="privacypolicy">Politique de confidentialité</Link> | <Link to="contact">Contact</Link> |
                    <br/>
                    <i>GeekLand.fr est édité par visual studio code. Copyright © 2022</i>
                </div>

                <div className="right">
                    <h3><u>PAIEMENT 100% SÉCURISÉ :</u></h3>
                    <i>Achetez l'esprit tranquille</i>
                    <br /><br />
                    <img src="/assets/Lock.png" width="10%"></img>
                    <img src="/assets/Visa.png" width="10%"></img>
                    <img src="/assets/CB.png" width="10%"></img>
                    <img src="/assets/Paypal.png" width="10%"></img>
                    <img src="/assets/MasterCard.png" width="10%"></img>
                </div>
            </div>
        );
    }

}