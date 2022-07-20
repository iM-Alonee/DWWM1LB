import React, { useState, useEffect } from "react";
import axios from 'axios';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import project
import Config from '../config';
import SingleProduct from '../components/SingleProduct';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/swiper.css';
import CarouselImage from "./CarouselImage";
// import Carousel from './Carousel';




const Home = () => {

    let [newsList, setNewsList] = useState([]);
    let [promoList, setPromoList] = useState([]);
    let [figList, setFigList] = useState([]);
    // get products TOP ventes jeux videos, mangas et figurines
    useEffect(() => {
        console.log('ok');
        axios
            .get(Config.baseBackUrl, { params: { rubric: 'carousel-top-ventes-mangas' } })
            .then((response) => {
                let list = [];
                let slideKey = 0;
                response.data.forEach((element) => {
                    list.push(
                        <SwiperSlide key={slideKey}>

                            <CarouselImage
                                // key={index}
                                // id={it.id}
                                // name={it.name}
                                // brand={it.brand}
                                // model={it.model}
                                // price={it.price}

                                key={element.id}
                                id={element.id}
                                name={element.name}
                                price={element.price}

                            />

                        </SwiperSlide>
                    );
                    slideKey++;
                });

                setPromoList(list);
            })
            .catch(function (error) {
                console.error(error);
            });


        axios
            .get(Config.baseBackUrl, { params: { rubric: 'carousel-top-ventes-jeux-videos' } })
            .then((response) => {
                let list = [];
                let slideKey = 100;
                response.data.forEach((element) => {
                    list.push(
                        <SwiperSlide key={slideKey}>
                            <CarouselImage
                                key={element.id}
                                id={element.id}
                                name={element.name}

                            // key={index}
                            //     id={it.id}
                            //     name={it.name}
                            //     brand={it.brand}
                            //     model={it.model}
                            //     price={it.price}

                            />
                        </SwiperSlide>
                    );
                    slideKey++;
                });

                setNewsList(list);
            })
            .catch(function (error) {
                console.error(error);
            });


        axios
            .get(Config.baseBackUrl, { params: { rubric: 'carousel-top-ventes-produits-derives' } })
            .then((response) => {
                let list = [];
                let slideKey = 0;
                response.data.forEach((element) => {
                    list.push(
                        <SwiperSlide key={slideKey}>

                            <CarouselImage
                                // key={index}
                                // id={it.id}
                                // name={it.name}
                                // brand={it.brand}
                                // model={it.model}
                                // price={it.price}

                                key={element.id}
                                id={element.id}
                                name={element.name}


                            />

                        </SwiperSlide>
                    );
                    slideKey++;
                });

                setFigList(list);
            })
            .catch(function (error) {
                console.error(error);
            });



    }, []);














    let ho = document.getElementsByTagName('html')[0];

    ho.style.backgroundImage = 'url("assets/galaxie.jpg")'
    ho.style.backgroundRepeat = "no-repeat";
    ho.style.backgroundSize = "cover";
    ho.style.backgroundAttachment = "fixed";




    // render component

    return (
        <div className="home">
            <div className='swiper-div'>
                <img src="./assets/geekland.png" width="70%"></img>
                <div className='swiper-title'>TOP VENTES MANGAS</div>
                {/* <div className="image"><img src="./assets/librairie.png"></img></div> */}
                <Swiper
                    className="swiper3"
                    key={0}
                    initialSlide={0}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={25}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    {promoList}
                </Swiper>
            </div>

            <div className='swiper-div'>
                <div className='swiper-title1'>TOP VENTES JEUX-VIDÉOS</div>
                {/* <div className="image"><img src="./assets/gforce.png"></img></div> */}
                <Swiper
                    className="swiper3"
                    key={1}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={25}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    {newsList}
                </Swiper>
            </div>


            <div>
                <div className='swiper-title3'>TOP VENTES GOODIES</div>
                {/* <div className="image"><img src="./assets/geek.png"></img></div> */}
                <Swiper
                    className="swiper3"
                    key={2}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={25}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    {figList}
                </Swiper>
            </div>
            <div className="test-empty"></div>
        </div>
    );
}

export default Home;




