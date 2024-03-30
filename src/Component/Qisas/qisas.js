import React from "react";
import "./qisas.css";
import qisasData from "../../dumymyData/qisas_data";
import qisas2_Data from "../../dumymyData/qisas2_data"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


function Qisas() {

    const Data = qisasData.map((item) => {
        return (

            <AccordionItem key={item.id} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.head}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {item.content}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        )
    });

    const secondData = qisas2_Data.map((item) => {
        return (

            <AccordionItem key={item.id} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.head}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {item.content}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        )
    })

    const animalClick = () => {
        const myCon = document.getElementById("qiCon")
        myCon.classList.add("qisas_content_active");

        const myConP = document.getElementById("conP")
        myConP.classList.add("con-p-unactive");

        const animalDiv = document.getElementById("anim");
        animalDiv.classList.add("active"); /* block */

        const naDiv = document.getElementById("anims");
        naDiv.classList.remove("active"); /* none */

    }

    const naClick = () => {
        const myCon = document.getElementById("qiCon")
        myCon.classList.add("qisas_content_active");

        const myConP = document.getElementById("conP")
        myConP.classList.add("con-p-unactive");

        const naDiv = document.getElementById("anims");
        naDiv.classList.add("active"); /* block */

        const animalDiv = document.getElementById("anim");
        animalDiv.classList.remove("active"); /* none */

    }


    return (
        <div id="qisas" className="qisas-page">

            <div className="qisas_head">
                <div
                    style={{ marginTop: "0px" }}
                    id="quranSec" className="quran-title">
                    <h3>القصص</h3>
                    <hr />
                    <hr className="hr-hade" />
                </div>

                <p> قال تعالى : لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ ۗ مَا كَانَ حَدِيثًا يُفْتَرَىٰ وَلَٰكِن تَصْدِيقَ الَّذِي بَيْنَ يَدَيْهِ وَتَفْصِيلَ كُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً لِّقَوْمٍ يُؤْمِنُونَ ۚ </p>
            </div>

            <div className="qisas_title-con">

                <div
                    className="qisas_title"
                    onClick={animalClick}
                >
                    الحيوانات
                </div>

                <div
                    onClick={naClick}
                    className="qisas_title">
                    الأنبياء
                </div>

            </div>

            <div id="qiCon" className="qisas_content">
                <p id="conP" className="con-p"> برجاء اخيار موضوع </p>
                <Accordion id="anim">
                    {secondData}
                </Accordion>

                <Accordion id="anims">
                    {Data}
                </Accordion>

            </div>

            <div className="qisas_footer">
                ملاحضة : جميع القصص منقولة
            </div>
        </div>
    );
}

export default Qisas;

