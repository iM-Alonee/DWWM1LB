import React from "react";
import '../css/aboutus.css';



export default class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div>
                <div className="title">A PROPOS</div>

                <br /><br /><br />
                <div className="color1">
                Bienvenue sur GeekLand. Nous sommes une équipe de 4 développeurs web,<br />
                et nous avons crée ce site regroupant différents articles de la culture geek.
                
                <br />
                Afin de répondre au mieux à la demande des fans, nous avons sélectionné les meilleurs produits à la vente.<br />
                Vous allez pouvoir choisir entre jeux-vidéos, mangas, goodies et figurines.
                </div>
                <br /><br /><br />
                <div className="center1">
                <div className="flex1">
                    <div className="color2"> <u>Lucas Berlemont :  développeur web</u> <br/><br/>
                    <i>3 Passions : informatique, jeux vidéos et patin sur glace</i><br/><br/><br/>
                        <u> Logan Wadoux : développeur web</u><br/><br/>
                        <i>2 Passions : informatique et mangas</i> <br/><br/><br/>
                        <u>Mike Armansin : développeur web</u><br/><br/>
                        <i>2 Passions : informatique et mangas</i><br/><br/><br/>
                        <u>Wail           : développeur web</u><br/><br/>
                        <i>3 Passions: informatique, mangas et jeux vidéos</i></div>
                </div>
                </div>





            </div>



        );



    }
}