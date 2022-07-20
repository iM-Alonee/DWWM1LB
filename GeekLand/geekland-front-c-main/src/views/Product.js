import React from "react";
import SingleProduct from "../components/SingleProduct";
import Products from "./Products";


export default class Product extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <Products />

                <div>{this.props.id}</div>
                <div>{this.props.name}</div>
                <div>{this.props.date}</div>
                <div>{this.props.description}</div>
                <div>{this.props.price}</div>
                <div>{this.props.inventory}</div>
                <button className="add">Ajout au panier</button>

            </div>

        );



    }
}





