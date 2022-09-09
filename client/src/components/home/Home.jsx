import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import ItemSlider from "../ItemSlider/ItemSlider";
import scroller from '../../tools/scroller';
import axios from 'axios';

import '../../styles/home/home.css';

const Home = () => {
    const [projects, setProjects] = useState([]);

    const fetchData = async()=>{
        await axios.get('/api/all-projects')
        .then((res)=>{
            setProjects(res.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    const f = ()=>{
        const text = document.querySelector('.rotated');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    document.querySelectorAll('span').forEach((e, i)=>{
        e.style.transform = `rotate(${i * 19}deg)`;
    })
    }

    useEffect(()=>{
        fetchData();
        scroller(document.querySelector('.slider'));
        f();
    }, []);

    return (
        <main className="home">
            <div className="scroller-logo-div">
                <div className="circular-text">
                    <p className="rotated">Scroll - Right - there -</p>
                </div>
            </div>
            <div className="slider">
                <div className="inner">
                    {
                        projects.map((project)=>(
                            <ItemSlider key={project.project_id} data={project}/>
                        ))
                    }
                </div>
            </div>
          </main>
    )
}

export default Home;
