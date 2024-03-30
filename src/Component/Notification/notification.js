import React from "react";
import "./notification.css";

function Notification() {


    setTimeout(
        function () {
            let playNotif = document.getElementById("notif")
            playNotif.classList.add("notif-sec-play")
        }, 7000);

    setTimeout(
        function () {
            let displayNotif = document.getElementById("notif")
            displayNotif.classList.add("notif-sec-diplay")
        }, 10_000);


    return (
        <div id="notif" className="notif-sec">
            <p> صلي علي سيدنا محمد  ﷺ  </p>
        </div>
    );
}


export default Notification;