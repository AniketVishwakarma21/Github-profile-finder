import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Made with 💙 by <a href="https://github.com/AniketVishwakarma21" target="_blank">Aniket Vishwakarma</a> | Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;