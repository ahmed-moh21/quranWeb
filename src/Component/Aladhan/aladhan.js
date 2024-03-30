import React from "react";
import "./aladhan.css";
import img from "../Assert/hadith.jpg";

function Aladhan() {

    return (
        <div id="aladhan" className="aladhan-page">

            <div
                style={{ fontFamily: "Reem Kufi" }}
                id="quranSec" className="quran-title">
                <h3 style={{ fontSize: "3.2rem" }}> أوقات الصلاة </h3>
                <hr />
                <hr className="hr-hade" />
            </div>

            <div
                className="aladhan_im"
                style={{ backgroundImage: `url(${img})` }}
            >
                <p>قال تعالى:"فَإِذَا قَضَيْتُمُ الصَّلَاةَ فَاذْكُرُوا اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِكُمْ ۚ فَإِذَا اطْمَأْنَنْتُمْ فَأَقِيمُوا الصَّلَاةَ ۚ إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا "</p>
            </div>

           
             <iframe id="iframe" title="prayerWidget" className="widget-m-top" scrolling="no" src="https://www.islamicfinder.org/prayer-widget/360630/shafi/2/0/19.5/17.5"> </iframe>
        </div>
    );
};


export default Aladhan;
