import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./dark.css"
function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const darkFun = () => {
        let myBode = document.body;
        if (isDarkMode) {
            myBode.classList.remove("mode-dar-before");
        }
        else {
            myBode.classList.add("mode-dar-before");
        }
        
    }


    return (
        <div
            onClick={darkFun}
            id="dark-pa"
        >
            <DarkModeToggle
                className="Dark-page"
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />
        </div>
    );
};


export default DarkMode;

/* 

.mode-dar-before {
    --background-d: #607d8b7d !important;
    --background: black !important;
    --color : white !important;
   
}
.mode-dar-after{
    filter: brightness(0.5);
    background-color: black;
    transition: all 1.3s ease-in-out;
}

*/