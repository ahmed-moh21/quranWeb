import React, { useState, useEffect } from "react";
import "./quran.css";
import img from "../Assert/pexels-nadim-shaikh-4521947.jpg";
import { AiFillCaretRight, AiFillCaretLeft , AiOutlineClose } from "react-icons/ai";
import axios from "axios"


function SectionQuran() {
    const [surahs, setSurahs] = useState([]);
    const [ayahs, setAyahs] = useState([]);
    const [active, setActive] = useState(false);


    const fetchSurahs = async () => {
        const { data } = await axios.get(
            "http://api.alquran.cloud/v1/meta"
        );
        const surahs = data.data.surahs.references;
        setSurahs(surahs);
    };

    useEffect(() => {
        fetchSurahs();
    }, []);

    const Select = async (event) =>{
        const { data } = await axios.get(
            `http://api.alquran.cloud/v1/surah/${event.currentTarget.id}`
        );
        const ayahs = data.data.ayahs;
        setAyahs(ayahs);
        setActive(true);

        if(event.id == 2){
            console.log("this is selected ...")
        }
    }

    return (
        <>
            <div
                className="quran-head "
                style={{ backgroundImage: `url(${img})` }}>
            </div>
            {/* Quran Section */}
            <section className="quran">

                <div id="quranSec" className="quran-title">
                    <h3>الْقُرْآن الْكَرِيْم</h3>
                    <hr />
                    <hr className="hr-hade" />
                </div>

                <div className="quran-link">
                    <div
                        onClick={() => {
                            let myCon = document.getElementById("marCon");
                            myCon.classList.toggle("mar-con-display")
                        }}
                        className="link_1">
                        قرائة
                        <AiFillCaretLeft className="link-icon1" />
                    </div>

                    <div
                     className="link_2">
                        <AiFillCaretRight className="link-icon2" />
                        <a href="/samaei" > سماعي </a>
                    </div>
                </div>

                <div className="container mar-con">
                    <div  id="marCon" className="surhasContainer">
                        {surahs.map((item, index) => (
                            <div className="surah su-ah" id={index + 1} key={index} onClick={Select}> 
                                <p>{item.name}</p>
                                <p>{item.englishName}</p> 
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*  End of Quran Section  */}


            {/* Pop Up */}
            <div className={`surah-popup ${active ? "active": ""}`}>
                <div className="close-popup" onClick={() => {setActive(false)}}>
                    <AiOutlineClose />
                </div>
                <div className="ayat">
                    {ayahs.map((item, index) => (
                        <p key={index}>({item.numberInSurah}) - {item.text}</p>
                    ))}
                </div>
            </div>
        </>
    )
};



export default SectionQuran;