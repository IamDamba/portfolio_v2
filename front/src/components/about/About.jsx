import React, { useRef, useState } from 'react';
import axios from 'axios';
import fileDownloader from 'js-file-downloader';
import DownloadLink from "react-download-link";
import CV from '../../media/cv.pdf';

import "../../styles/about/about.css";

const About = () => {
    const link = useRef(null);
    const [urlPDF, setUrlPDF] = useState('');
    const handleDownload = async(e)=>{
        await axios.get('/api/download-cv')
        .then((res)=>{
            const url = res.data;
            setUrlPDF(url)
            link.current.download = "IamDamba_CV.pdf";
            link.current.target = "_blank";
            link.current.rel = "noreferrer";
            link.current.click();
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    return (
        <main className="about">          
            <div className="about_information">
            <div className="information_header">
                <h1>About</h1>
            </div>
                <p>Based in Paris, I am a <u><b>Front-End Developer</b></u> passionnate about web and mobile design.</p>
                <p>I tend to be attracted by interactive project likes games, apps and website using development technologies like Barba, Framer Motion, GreenSock-GSAP and javascript and enjoy creating new visual worlds that can touch and inspire others.</p>
                <p>I'am also specialized on the MERN Stack (MongoDB, Express, ReatcJS, NodeJS), Google Firebase and also have some knowledge on other tools like NextJS, WebServices, Github, Heroku and Vercel.</p>
                <p>If you want to know more about me, don't hesitate to read my CV down below !!</p>
                <button onClick={ e=> handleDownload(e.target.this) }>Download CV</button>
                <a href={CV} ref={link}/>
            </div>
      </main>
    )
}

export default About;
