import React from "react";
// import '../css/carouselimage.css';

export default class CarouselImage extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.name);
    }
    render() {
        console.log(this.props.name);
        return (


            <div className="carouselimage">

                <img src={'/assets/' + this.props.name + '.png'} height='25px'></img>



                {/* <div>{this.props.description}</div>  */}

                {/* <button className="add">Ajout au panier</button> */}
                <br /><br /><br /><br />
            </div>





        );



    }
}