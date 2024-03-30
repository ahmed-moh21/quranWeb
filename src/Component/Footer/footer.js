import React from "react";
import "./footer.css";
import footerimg from "../Assert/footer-bg.png";
import homeIcoN from "../Assert/home-icon-2.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaAngleDoubleUp } from "react-icons/fa";



function Footer() {


    window.onscroll = function () {
        var myDiv = document.getElementById("doneNav");
        var B = document.body; //IE 'quirks'
        var D = document.documentElement; //IE with doctype
        D = (D.clientHeight) ? D : B;

        if (D.scrollTop >= 700) {
            myDiv.classList.add("show");
        } else {
            myDiv.classList.remove("show");
        }
    };


    return (
        <div id="fotter" className="footer-page">
            <div>
                <div className=" w-100">
                    <img src={footerimg} alt="" className=" w-100 h-auto" />
                </div>
            </div>

            <div className="Top">
                <div className="aya-fo">
                    <p> (رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ) </p>
                    <img src={homeIcoN} alt="" className="aya-img" />
                </div>
                <div className="col-xs-12 w-100 logo_con">
                    <div className="log_o">
                        <img src="https://www.prayer-now.com/wp-content/uploads/2022/09/logo-1.png" data-lazy-src="https://www.prayer-now.com/wp-content/uploads/2022/09/logo-1.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img src="https://www.prayer-now.com/wp-content/uploads/2022/09/logo-1.png" /></noscript>
                    </div>
                </div>

                <div className="footer_nav">
                    <div className="container">
                        <div className="fo_na">
                            <ul>
                                <li> <BsFacebook /> </li>
                                <li> <BsInstagram /></li>
                                <li> <BsLinkedin /> </li>
                                <li> <BsTwitter /> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                        document.body.style.scrollBehavior = "smooth"
                    }}
                    id="doneNav" className="up-top" >
                    <FaAngleDoubleUp className="box-ic" />
                </div>

            </div>
        </div >
    );
};



export default Footer;