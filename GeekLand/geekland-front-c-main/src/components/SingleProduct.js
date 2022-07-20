import React from "react";
import '../css/singleproduct.css';

export default class SingleProduct extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="single">
                <div className="size">{this.props.name}</div>
                <img src={'/assets/' + this.props.name + '.png'}></img>



                {/* <div>{this.props.description}</div>  */}
                <div>{this.props.price + '€'}</div>
                <button className="add">Ajout au panier</button>
                <br /><br /><br /><br />
            </div>
        );



    }
}

