import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const ItemSlider = ({data}) => {
    return (
        <Link to={`./project/${data.project_id}`} className="item">
            <div className="item_img">
                <div className="img" style={{backgroundImage: `url('${data.imageURL}')`}}></div>
                <div className="filter"></div>
            </div>
            <div className="content">
                <h2>{data.title}</h2>
                <h4>{data.date}</h4>
                <p>{data.serial_key}</p>
            </div>
        </Link>
    )
}

export default ItemSlider;
