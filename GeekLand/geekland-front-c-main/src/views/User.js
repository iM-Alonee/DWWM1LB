import React from "react";
import '../css/user.css';
import { Link } from "react-router-dom";



export default class User extends React.Component {
    constructor(props) {
        super(props)
        let lm = document.getElementsByTagName('html')[0];
        lm.style.backgroundImage = 'url("assets/fondmanga.jpg")';
        lm.style.backgroundRepeat = "no-repeat";
        lm.style.backgroundSize = "cover";
    }
    render() {
        return (
            <div className="user">
                <h1 className="user-title">
                    <b>IDENTIFIEZ-VOUS</b>
                    <div className="text-hr1"> <hr /> </div>
                </h1>


                <div>
                    <div className="client">Déjà client ?</div>
                    <form className="user-inputs">
                        <label htmlFor="email" className="user-label">Email</label>
                        <input id="email" type="email" autoComplete="off" size="25" />

                        <label htmlFor="password" className="user-label">Mot de passe</label>
                        <input id="password" type="password" autoComplete="off" />

                        <button id="user-connect" type="button"><b>Se connecter</b></button>

                        <div className="user-forget">Mot de passe oublié ?</div>

                        <div className="space"></div>

                        <div className="text-hr2"> <hr /> </div>

                        <div className="user-new">Nouveau client ?</div>

                    <button id="user-register" type="button"><Link to="/geekland-groupe-c/Form.php"><b>S'inscrire</b></Link></button>
                    </form>
                </div>
            </div>
        );
    }
}
