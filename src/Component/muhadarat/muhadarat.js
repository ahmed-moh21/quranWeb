import React from "react";
import "./muhadarat.css";
import img from "../Assert/pexels-safa-6873767.jpg"
import img_1 from "../Assert/صور-الشيخ-الشعراوي-27.jpg";
import img_2 from "../Assert/faq-img-1.png";
import muhadaratData from "../../dumymyData/muhadaratData"
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Muhadarat() {

    const Data_mohad = muhadaratData.map((items) => {
        return (
            <iframe
                key={items.id}
                width="560"
                height="215"
                src={items.srcVid}
                title="YouTube video player"
                border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " >
            </iframe>
        )
    })

    return (
        <div className="muhadarat-page">

            <div
                className="ahadeyth-head"
                style={{ backgroundImage: `url(${img})`, width: "102%" }}>
            </div>

            <div id="muhadarat" className="muhadarat-title">
                <h3> محاضرات </h3>
                <hr />
                <hr className="hr-hade" />
            </div>

            <div className="muhadarat-sec ">

                <div
                    style={{ backgroundImage: `url(${img_2})` }}
                    className="f-sec">
                </div>

                <div id="seSec" className="se-sec">

                    <IoIosArrowDropdownCircle
                        onClick={() => {
                            let post = document.getElementById("poster");
                            post.classList.toggle("poster-display");

                            let mySec = document.getElementById("seSec");
                            mySec.classList.toggle("se-sec_display");
                        }}
                        className="drop-icon" />

                    <div className="mohadrat-con">

                         <div
                            style={{ backgroundImage: `url(${img_1})` }}
                            className="poster"
                            id="poster">
                        </div> 

                        {Data_mohad}

                    </div>

                </div>
            </div>
        </div>
    )
};



export default Muhadarat;
