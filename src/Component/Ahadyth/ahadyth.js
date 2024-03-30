import React from "react";
import "./ahadyth.css";
import img from "../Assert/pexels-michael-burrows-7129614.jpg";
import Carousel from 'react-bootstrap/Carousel';
import data from "../../dumymyData/ahadeythData"

function Ahadyth() {

    const Data = data.map((item) => {
        return (
            <Carousel.Item key={item.id}>
                <Carousel.Caption>
                <p id="para_id"> <span> {item.id} </span> / 30 </p>
                    <h3>{item.hadeth}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    return (
        <>
            <div className="ahadeyth-page">
                <div
                    className="ahadeyth-head"
                    style={{ backgroundImage: `url(${img})` }}>
                </div>

                <div  id="ahadeyth" className="ahadeyth-title">
                    <h3> أحاديث </h3>
                    <hr />
                    <hr className="hr-hade" />
                </div>

                <div className="ahadeyth-sec w-100">
                    <div className="ahadeyth-con container">
                        <Carousel>
                            {Data}
                        </Carousel>

                    </div>
                </div>
            </div>
        </>
    )
};



export default Ahadyth;