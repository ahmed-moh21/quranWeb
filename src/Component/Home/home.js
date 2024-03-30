import React from "react";
import "./home.css";
import img from "../Assert/quran.jpg"
import { AiFillCaretDown } from "react-icons/ai";
import Notification from "../Notification/notification";
function Home() {
    const myButtom = () =>{
       let scro_l = window.scrollTo(0 , 750)
       return scro_l
    }
    return (
        <>
        <Notification />
        <div
            style={{ backgroundImage: `url(${img})` }}
            className="home-page">
            
            <div className="home-title">
                <h1>مرحبا بك في موقع الموعظة الإسلامي</h1>
            </div>


            <div className="bu-sec">
                <div className="con-bu">
                    <button
                    onClick={myButtom}
                     className="bu">
                        <AiFillCaretDown className="left-ic" />
                        إبدأ التصفح
                    </button>
                </div>
            </div>

        </div>
        </>
    );
}


export default Home; 