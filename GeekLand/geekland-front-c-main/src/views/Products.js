import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import SingleProduct from "../components/SingleProduct";
import '../css/products.css';
import Config from "../config";

const Products = (props) => {

    let { type, category } = useParams();
    let [list, setList] = useState([]);

    let url = Config.baseBackUrl;

    console.log('URL:', url);

    useEffect(() => {        
        axios.get(url, {params: {
            rubric:'all',
            type: type, 
            category: category,
    }})
            .then((response) => {
console.log(response);
                // handle success
                let componentList = [];
                response.data.forEach(element => {
                    componentList.push(
                        <SingleProduct
                            key={element.id}
                            name={element.name}
                            date={element.date}
                            description={element.description}
                            price={element.price}
                            inventory={element.inventory}
                        />
                    )
                });

                setList(componentList);
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })
    }, [type, category])

    return (
        <div className="products">
            {list.length === 0 ? '' : list}
        </div>
    );
}

export default Products;
