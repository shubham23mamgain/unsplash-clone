import React,{useState, useEffect,useRef} from 'react';
import axios from "axios";
import Image from "./Image";
import "./ImageCard.css";
const ImageCard = (topic, selectedOption) => {

    console.log(topic);
    const baseUrl = "https://api.unsplash.com/";
    const [url,setUrl] = useState(`topics/nature/photos/?client_Id=NbspBl38y4iGq8L0YdtLx9mZhUp5tAogLsNKuC36OTw&per_page=80`);
    // console.log(url);
    
    const [images, setImages] = useState([]);
    

    useEffect(() => {
        async function fetchImages() {
          const request = await axios.get(`${baseUrl}topics/nature/photos?client_id=NbspBl38y4iGq8L0YdtLx9mZhUp5tAogLsNKuC36OTw&per_page=80`).then(res=> {
              console.log(res.data);
              setImages(res.data);
          });
          return request;
        }
        fetchImages();
      }, []);

    const showImages=()=> {
       return images.map((img)=> (
           <Image  className={`item item-${Math.ceil(
            img.height / img.width,
          )}`} image={img}  key={img.id} topic={topic} selectedOption={selectedOption}/>
       ))     
    } 

    return (
        <div className="ImageCard">
              {showImages()};
        </div>
    )
}

export default ImageCard;
