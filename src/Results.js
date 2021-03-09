import React, { useState, useEffect } from "react";
import {Button,Divider} from "@material-ui/core";
import {Group,Image, PersonPin, ShowChartRounded} from "@material-ui/icons";
import "./Results.css";
import axios from "./axios";
import ImageCard from "./ImageCard";

function Results({ selectedOption }) {

  const [topic, setTopic] = useState("nature");

  const [clientId, setClientId] = useState("NbspBl38y4iGq8L0YdtLx9mZhUp5tAogLsNKuC36OTw");
  const baseURL = `https://api.unsplash.com/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseURL}${selectedOption}`);
      setTopic(request.data);
      
      return request;
    }

    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
        <div className="results__top">
         <div className="results__topLeft">
            <p className="result__title">{topic.title}</p>

            <h2 className="result__description">{topic.description}</h2>
            
            <div className="support">
                <h5>Supported By</h5> 
                <img className="microsoft__logo" src="https://images.unsplash.com/file-1613596651301-295c081cd4b7image" alt="Microsoft" />

            </div>
            <p className="design">Original By Design</p>
        
          </div>

          <div className="results__topRight">
            <div className="status"> 
            <div className="alanor">
            <ShowChartRounded/>
            </div>
            
               <div className="box">
               <p className="left__box"> Status </p> 
               <Button variant="outlined" disabled    className=" btn5 right__box">
                   <div id="circle"></div>
                   {topic.status === "open" ? "Open": "Closed"}
               </Button>
               </div>
            
            </div>

            <Divider />
            <div className="curator">
            <div className="alanor">
            <PersonPin/>
            </div>
                
                <div className="box">
                <p className="left__box">Curator </p> 
                <img
                  className="unsplash__icon right__box"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACTk5OlpaW7u7uJiYmYmJh5eXn8/Py6urp1dXV9fX2goKDd3d2+vr7a2tpgYGCPj4+Dg4PGxsagu3jbAAABZUlEQVR4nO3aSXKDMBBAUYKxLTwP979r7DWLNASLxvXeWiX1L9gwNA0AAAAAAAAAAADwFUops6/MpUQHDy+ktsthf9xHHPeHy9LDTrL5idssPewkChXmp1BhfgoV5qdQYX4KFeanUGF+ChXmp1BhfgoV5qdQYX6nEYWnpYed5Nx33SWi6/rz0sNOUprwd/xmnd/xR/x+sNI/FUoTuzbRdSkF79IPTwEAAOQU/0E9vOHcO/7P65xr3/2pv0Yf+17rghvWKXwfs428XWpHvMVoIxs+Kj0qv88IDdQG76oSLdxWe1gODrQbseUuV2HwGn6isBqFCgcUKpydQoUDChXOTqHCAYUKZ6dQ4YBChbNTqHBAocLZBQujX2a+v7CstjBunYW3TdxtlYWzU6hQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhwjYX3RQofFQuf97a++7NiIQAAAAAAAAAAAAAAAOT1C+qnKs6sX0ZvAAAAAElFTkSuQmCC"
                  alt="Unsplash logo"
                />
                </div>
                
             </div>

             <Divider />
            <div className="contributions">
            <div className="alanor">
            <Image/>
            </div>
               
                <div className="box">
                <p className="left__box">Contributions </p>
                <p className="strong right__box">        {(topic.total_photos/1000)}  k </p>
                </div>
                
            </div>

            <Divider />
            <div className="contributors">
            <div className="alanor">
            <Group/>
            </div> 
             
              <div className="box">
               <p className="left__box">Top Contributers</p>
               <div className="right__box">
                   {topic.top_contributors && topic.top_contributors.map(t=> (
                       <div key={t.id} className="contrib__profile">
                      <img className="contrib__profile__image" src = {t.profile_image.small} alt="User" />
                      </div>
                   ))} 
               </div>
              </div>
              
            </div>  
               
        </div>
            
         
          
      </div>
        <Button className="btn__submit">Submit to <p className="submit__title">{topic.title} </p></Button>
       
      <ImageCard topic={topic} selectedOption={selectedOption}/>
    </div>
  );
}

export default Results;

