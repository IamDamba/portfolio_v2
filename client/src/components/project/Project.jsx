import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import '../../styles/project/project.css';

const Project = () => {
    const [item, setItem] = useState({});
    const [texts, setTexts] = useState([]);
    const { id } = useParams();

    const fetchData = async ()=>{
        await axios.get(`/api/project/`, {params: { id: id }})
        .then((res)=>{
            setItem(res.data);
            setTexts(res.data.description)
        })
        .catch(async (err)=>{
            await console.log(err.response.data);
        })
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return (
        <main className="project">          
            <div className="btn_returnBack">
                <Link to="/"><FontAwesomeIcon icon={faTimes}/></Link>
            </div>
            <div className="project_image">
                <div className="project_image_img">
                    <img src={item.imageURL} alt={`${item.title}.jpg`}/>
                    <div className="project_image_img_filter"></div>
                </div>
                <div className="project_image_content">
                    <h1>{item.title}</h1>
                    <h2>{item.serial_key}</h2>
                </div>
            </div>
            <div className="project_information">
                <div className="project_detail">
                    <ul className="project_detail_menu">
                        <li>
                            <h3>Client:</h3>
                            <p>{item.client}</p>
                        </li>
                        <li>
                            <h3>Role:</h3>
                            <p>{item.role}</p>
                        </li>
                        <li>
                            <h3>Tools:</h3>
                            <p>{item.tools}</p>
                        </li>
                        <li>
                            <h3>Date:</h3>
                            <p>{item.date}</p>
                        </li>
                        <li>
                            <h3>Link:</h3>
                            <a href={`http://${item.link}`} target="_blank" rel="noreferrer">{item.link}</a>
                        </li>
                    </ul>
                </div>
                <div className="project_description">
                    <div className="content">
                        <h3>~ Description</h3>
                        {
                            texts.map((text, i)=>(
                                <p key={i}>{text}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project;
