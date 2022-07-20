import React from "react";
import '../css/header.css';
import { Link } from "react-router-dom";
import { ImUser } from "react-icons/im";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdHelpOutline } from "react-icons/md";

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <nav>

        <ul>
          <div className="flex">
            <li>
              <Link to="/">
                <img src="/assets/LOGO.png" width="20%"></img>
              </Link>
            </li>

            <li>
              <div className="gauche">
                <Link className="nav-link" to="products/videogames">Jeux vidéos &ensp;</Link>
                <ul className="sous">
                  <li><Link className="nav-link" to="products/videogames/action">Action/Multijoueur</Link></li>
                  <li><Link className="nav-link" to="products/videogames/mmorpg">MMORPG</Link></li>
                  <li><Link className="nav-link" to="products/videogames/fps">FPS</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="deroulant">
                <Link className="nav-link" to="products/mangas">Mangas &ensp;</Link>
                <ul className="sous">
                  <li><Link className="nav-link" to="products/mangas/shonen">Shonen</Link></li>
                  <li><Link className="nav-link" to="products/mangas/seinen">Seinen</Link></li>
                  <li><Link className="nav-link" to="products/mangas/shojo">Shojo</Link></li>
                  <li><Link className="nav-link" to="products/mangas/goodies">Goodies</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <input id="bar" type="text" name="recherche" placeholder="Recherche...🔍"></input>
            </li>
            <li>
              <div className="deroulant">
                <Link className="nav-link" to="help"><MdHelpOutline size={25} /></Link>
                <ul className="sous">
                  <li><Link className="nav-link" to="">Problème de connexion</Link></li>
                  <li><Link className="nav-link" to="">Conseil sur un produit</Link></li>
                  <li><Link className="nav-link" to="">Litige/problème d'envoie ou de réception du colis</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="deroulant">
                <Link className="nav-link" to="user"><ImUser size={25} color="white" /></Link>
                <ul className="sous">
                  <li><Link className="nav-link" to="compte.html">Se connecter / déconnecter</Link></li>
                  <li><Link className="nav-link" to="commande.html">Mes commandes</Link></li>
                  <li><Link className="nav-link" to="profil.html">Mon profil</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <div className="deroulant">
                <Link to="shoppingcart"><HiOutlineShoppingCart size={25} color="white" /></Link>
                <ul className="sous">
                </ul>
              </div>
            </li>
          </div>
        </ul>

      </nav>

    );
  }
}
