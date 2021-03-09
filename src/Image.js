import React from 'react';
import "./Image.css";

const Image = ({image}) => {
    console.log(image);
    return (
        <div className="Image">
            <img src={image.urls.small} alt="Singular" />
        </div>
    )
}

export default Image;
